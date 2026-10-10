"use server"

import { auth } from "@/lib/auth/server"
import { encryptSecret } from "@/lib/security/encryption"
import { getOrCreateUser } from "@/lib/users/service"
import { prisma } from "@/lib/prisma"
import {
  saveAiCredentialSchema,
  SaveVisualPreferencesInput,
  saveVisualPreferencesSchema,
  SaveWritingExamplesInput,
  saveWritingExamplesSchema,
  type SaveAiCredentialInput,
} from "./schemas"
import { getOnboardingState } from "@/lib/users/onboarding"

export async function checkIsAuthenticated() {
  const { data } = await auth.getSession()

  if (!data?.user) {
    return {
      success: false as const,
      error: "You must be signed in.",
    }
  }
  return {
    success: true as const,
    data,
  }
}

// AI credential Action
export async function saveAiCredential(input: SaveAiCredentialInput) {
  const authResult = await checkIsAuthenticated()

  if (!authResult.success) {
    return authResult
  }

  const parsed = saveAiCredentialSchema.safeParse(input)

  if (!parsed.success) {
    return {
      success: false as const,
      error: parsed.error.issues[0]?.message ?? "Invalid input.",
    }
  }

  const user = await getOrCreateUser(authResult.data.user.id)
  const encryptedApiKey = encryptSecret(parsed.data.apiKey)

  await prisma.aiCredential.upsert({
    where: {
      userId_provider: {
        userId: user.id,
        provider: parsed.data.provider,
      },
    },
    update: {
      encryptedApiKey,
    },
    create: {
      userId: user.id,
      provider: parsed.data.provider,
      encryptedApiKey,
    },
  })

  return {
    success: true as const,
  }
}

// Writing examples Action
export async function saveWritingExamples(input: SaveWritingExamplesInput) {
  const authResult = await checkIsAuthenticated()

  if (!authResult.success) {
    return authResult
  }

  const parsed = saveWritingExamplesSchema.safeParse(input)

  if (!parsed.success) {
    return {
      success: false as const,
      error: parsed.error.issues[0]?.message ?? "Invalid input.",
    }
  }

  const user = await getOrCreateUser(authResult.data.user.id)
  const examples = parsed.data.examples.filter(
    (example) => example.content.trim().length > 0
  )

  if (examples.length === 0) {
    await prisma.$transaction(async (tx) => {
      await tx.writingExample.deleteMany({
        where: { userId: user.id },
      })

      await tx.user.update({
        where: { id: user.id },
        data: {
          writingExamplesSkippedAt: new Date(),
        },
      })
    })

    return {
      success: true as const,
      skipped: true as const,
    }
  }

  await prisma.$transaction(async (tx) => {
    await tx.writingExample.deleteMany({
      where: { userId: user.id },
    })

    await tx.writingExample.createMany({
      data: examples.map((example) => ({
        userId: user.id,
        content: example.content.trim(),
      })),
    })

    await tx.user.update({
      where: { id: user.id },
      data: {
        writingExamplesSkippedAt: null,
      },
    })
  })

  return {
    success: true as const,
    skipped: false as const,
  }
}

// Visual style preferences Action
export async function saveVisualPreferences(input: SaveVisualPreferencesInput) {
  const authResult = await checkIsAuthenticated()

  if (!authResult.success) {
    return authResult
  }

  const parsed = saveVisualPreferencesSchema.safeParse(input)

  if (!parsed.success) {
    return {
      success: false as const,
      error: parsed.error.issues[0]?.message ?? "Invalid preferences.",
    }
  }

  const user = await getOrCreateUser(authResult.data.user.id)
  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      visualStylePreferences: parsed.data.preferences,
    },
  })

  return {
    success: true as const,
  }
}

// Complete onboarding Action
export async function completeOnboarding() {
  const authResult = await checkIsAuthenticated()

  if (!authResult.success) {
    return authResult
  }

  const user = await getOrCreateUser(authResult.data.user.id)
  const state = await getOnboardingState(user.id)

  if (state.isCompleted) {
    return {
      success: true as const,
    }
  }

  if (state.step !== 5) {
    return {
      success: false as const,
      error: "Onboarding is not ready to be completed.",
    }
  }

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      onboardingCompletedAt: new Date(),
    },
  })

  return {
    success: true as const,
  }
}
