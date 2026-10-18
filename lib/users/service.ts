import { Prisma } from "@/lib/generated/prisma/client"
import { prisma } from "@/lib/prisma"

/**
 * Returns the MAVE user row for a Neon Auth identity, creating it on first
 * sign-in.
 *
 * Read-first on purpose: this runs from the app layout, so an `upsert` would be
 * a write on nearly every navigation — and writes are deliberately not covered
 * by the DB layer's connection retry. The common path here is a retried read;
 * only a genuinely new identity writes.
 */
export async function getOrCreateUser(authUserId: string) {
  const existing = await prisma.user.findUnique({ where: { id: authUserId } })

  if (existing) {
    return existing
  }

  try {
    return await prisma.user.create({ data: { id: authUserId } })
  } catch (error) {
    // A concurrent request may have created the row first. If it exists now,
    // return it instead of surfacing the unique-constraint failure.
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      const concurrent = await prisma.user.findUnique({
        where: { id: authUserId },
      })
      if (concurrent) {
        return concurrent
      }
    }
    throw error
  }
}
