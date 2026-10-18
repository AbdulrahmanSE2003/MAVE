import { PrismaNeon } from "@prisma/adapter-neon"
import { PrismaClient } from "@/lib/generated/prisma/client"

// Diagnostic: the WebSocket layer surfaces connection failures as an
// `ErrorEvent` (re-emitted raw by `@neondatabase/serverless`), not as an
// `Error`. The adapter types this callback's argument as `Error`, so read the
// extra fields defensively and log only the whitelisted, non-sensitive ones —
// never the connection string, credentials, or the complete error object.
type SocketErrorCause = {
  name?: string
  message?: string
  code?: string
  cause?: { code?: string }
}

function logPoolError(err: Error) {
  const cause = (err as Error & { error?: SocketErrorCause }).error

  console.error("[neon:pool] error", {
    event: err.name,
    message: err.message,
    causeName: cause?.name,
    causeCode: cause?.code ?? cause?.cause?.code,
    causeMessage: cause?.message,
  })
}

const adapter = new PrismaNeon(
  {
    connectionString: process.env.DATABASE_URL!,
  },
  {
    onPoolError: logPoolError,
  }
)

/**
 * Message used when a non-`Error` rejection (the raw WebSocket `ErrorEvent`
 * that `@neondatabase/serverless` emits and `@prisma/adapter-neon` rethrows
 * unchanged) is normalized into a real `Error`. Without this, the failure
 * surfaces only as the opaque string "[object ErrorEvent]", because an
 * `ErrorEvent` is not an `Error` and has no useful `message`.
 */
const CONNECTION_LOST_MESSAGE = "Neon WebSocket connection lost"

/** Model operations that are safe to retry because they have no side effects. */
const READ_OPERATIONS: ReadonlySet<string> = new Set([
  "findUnique",
  "findUniqueOrThrow",
  "findFirst",
  "findFirstOrThrow",
  "findMany",
  "count",
  "aggregate",
  "groupBy",
  "$queryRaw",
])

/**
 * A single blip can kill several pooled sockets at once, and each failed
 * attempt drains one, so two retries usually reach a fresh connection without
 * masking real faults.
 */
const MAX_READ_ATTEMPTS = 3
const RETRY_DELAY_MS = 200

/**
 * Connection-level failures worth retrying once. Deliberately narrow: it must
 * not swallow a genuine query error (e.g. a unique-constraint violation), so
 * we match only transport-level signatures.
 */
const RETRYABLE_PRISMA_CODES: ReadonlySet<string> = new Set([
  "P1001", // Can't reach database server
  "P1002", // Timed out reaching the database server
  "P1017", // Server has closed the connection
])

const RETRYABLE_MESSAGE_PATTERNS: readonly RegExp[] = [
  /WebSocket/i,
  /\[object ErrorEvent\]/,
  /Connection terminated/i,
  /socket hang up/i,
  /ECONNRESET|ECONNREFUSED|EPIPE|ETIMEDOUT|ENOTFOUND|EAI_AGAIN/,
  /Can't reach database server/i,
  /Server has closed the connection/i,
]

function isRetryableConnectionError(error: Error): boolean {
  const code: unknown = (error as { code?: unknown }).code
  if (typeof code === "string" && RETRYABLE_PRISMA_CODES.has(code)) return true

  return RETRYABLE_MESSAGE_PATTERNS.some((pattern) =>
    pattern.test(error.message)
  )
}

/**
 * Turns any thrown value into a real `Error` with a usable message, preserving
 * the original `name`/`code` when present. Prisma's own errors already satisfy
 * this and pass through untouched.
 */
function normalizeDbError(raw: unknown): Error {
  if (raw instanceof Error && !raw.message.includes("[object ErrorEvent]")) {
    return raw
  }

  const error = new Error(CONNECTION_LOST_MESSAGE, { cause: raw }) as Error & {
    code?: string
  }

  if (raw !== null && typeof raw === "object") {
    const source = raw as { name?: unknown; code?: unknown }
    if (typeof source.name === "string" && source.name !== "Error") {
      error.name = source.name
    }
    if (typeof source.code === "string") {
      error.code = source.code
    }
  }

  return error
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Runs a query, normalizing the error shape and retrying transient
 * connection-level failures for read operations only (writes are never
 * retried, to avoid replaying a mutation).
 */
async function withConnectionRetry<T>(
  operation: string,
  run: () => Promise<T>
): Promise<T> {
  const maxAttempts = READ_OPERATIONS.has(operation) ? MAX_READ_ATTEMPTS : 1

  for (let attempt = 1; ; attempt++) {
    try {
      return await run()
    } catch (raw) {
      const error = normalizeDbError(raw)

      if (attempt >= maxAttempts || !isRetryableConnectionError(error)) {
        throw error
      }

      console.warn(
        `[prisma] transient connection failure on "${operation}"; retrying (attempt ${attempt + 1}/${maxAttempts})`
      )
      await sleep(RETRY_DELAY_MS * attempt)
    }
  }
}

function createPrismaClient() {
  return new PrismaClient({ adapter }).$extends({
    query: {
      async $allOperations({ operation, args, query }) {
        return withConnectionRetry(operation, () => query(args))
      },
    },
  })
}

type PrismaClientWithRetry = ReturnType<typeof createPrismaClient>

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientWithRetry | undefined
}

export const prisma: PrismaClientWithRetry =
  globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma
}
