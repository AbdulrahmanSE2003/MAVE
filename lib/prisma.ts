import { PrismaNeon } from "@prisma/adapter-neon"
import { PrismaClient } from "@/lib/generated/prisma/client"

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

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
  },
)

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
  })

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma
}
