import { prisma } from "@/lib/prisma"

export async function getOnboardingState(userId: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      onboardingCompletedAt: true,
      visualStylePreferences: true,
      aiCredentials: {
        select: {
          id: true,
        },
        take: 1,
      },
    },
  })

  if (!user) {
    throw new Error("MAVE user not found.")
  }

  if (user.onboardingCompletedAt) {
    return {
      isCompleted: true,
      step: null,
    } as const
  }

  if (user.aiCredentials.length === 0) {
    return {
      isCompleted: false,
      step: 2,
    } as const
  }

  if (!user.visualStylePreferences) {
    return {
      isCompleted: false,
      step: 4,
    } as const
  }

  return {
    isCompleted: false,
    step: 5,
  } as const
}
