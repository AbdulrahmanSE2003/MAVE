"use server"

import { getCurrentUser } from "@/lib/users/current-user"
import { generateContentInputSchema, updatePostInputSchema } from "./schemas"
import type { GenerateContentInput, UpdatePostInput } from "./schemas"
import {
  createGeneratedPost,
  updatePostContent,
  type UpdatePostResult,
} from "./service"
import type { GenerateContentResult } from "./types"
import { getI18n } from "@/lib/i18n/server"
import type { Translator } from "@/lib/i18n"

function getGenerationErrorMessage(error: unknown, t: Translator): string {
  if (!(error instanceof Error)) {
    return t("write.errors.somethingWentWrong")
  }

  switch (error.message) {
    case "GEMINI_NETWORK_ERROR":
      return t("write.generation.networkError")

    case "GEMINI_TEMPORARILY_UNAVAILABLE":
      return t("write.generation.temporarilyUnavailable")

    case "GEMINI_RATE_LIMITED":
      return t("write.generation.rateLimited")

    case "GEMINI_INVALID_API_KEY":
      return t("write.generation.invalidApiKey")

    case "GEMINI_PERMISSION_DENIED":
      return t("write.generation.permissionDenied")

    case "GEMINI_EMPTY_RESPONSE":
      return t("write.generation.emptyResponse")

    default:
      return t("write.errors.somethingWentWrong")
  }
}

export async function generateContent(
  input: GenerateContentInput
): Promise<GenerateContentResult> {
  const { t, tm } = await getI18n()
  const user = await getCurrentUser()

  if (!user) {
    return { success: false, error: t("write.errors.signInGenerate") }
  }

  const parsed = generateContentInputSchema.safeParse(input)

  if (!parsed.success) {
    return {
      success: false,
      error: tm(parsed.error.issues[0]?.message ?? "write.errors.invalidInput"),
    }
  }

  try {
    return await createGeneratedPost(user.id, parsed.data)
  } catch (error) {
    console.error("[Generation] Failed to generate content:", error)

    return {
      success: false,
      error: getGenerationErrorMessage(error, t),
    }
  }
}

export async function updatePost(
  input: UpdatePostInput
): Promise<UpdatePostResult> {
  const { t, tm } = await getI18n()
  const user = await getCurrentUser()

  if (!user) {
    return { success: false, error: t("write.errors.signInSave") }
  }

  const parsed = updatePostInputSchema.safeParse(input)

  if (!parsed.success) {
    return {
      success: false,
      error: tm(parsed.error.issues[0]?.message ?? "write.errors.invalidInput"),
    }
  }

  try {
    return await updatePostContent(user.id, parsed.data)
  } catch {
    return { success: false, error: t("write.errors.somethingWentWrong") }
  }
}
