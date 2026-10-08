import { prisma } from "@/lib/prisma"

export async function getOrCreateUser(authUserId: string) {
  return prisma.user.upsert({
    where: {
      id: authUserId,
    },
    update: {},
    create: {
      id: authUserId,
    },
  })
}
