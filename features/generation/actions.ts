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

const GENERIC_ERROR = "Something went wrong. Please try again."

function getGenerationErrorMessage(error: unknown): string {
  if (!(error instanceof Error)) {
    return GENERIC_ERROR
  }

  switch (error.message) {
    case "GEMINI_NETWORK_ERROR":
      return "Couldn't connect to the AI provider. Check your connection and try again."

    case "GEMINI_TEMPORARILY_UNAVAILABLE":
      return "Gemini is temporarily unavailable. Please try again in a moment."

    case "GEMINI_RATE_LIMITED":
      return "Gemini is receiving too many requests. Please wait a moment and try again."

    case "GEMINI_INVALID_API_KEY":
      return "Your Gemini API key is invalid. Please check your provider settings."

    case "GEMINI_PERMISSION_DENIED":
      return "Gemini denied this request. Check your API key permissions and model access."

    case "GEMINI_EMPTY_RESPONSE":
      return "The AI returned an empty response. Please try again."

    default:
      return GENERIC_ERROR
  }
}

export async function generateContent(
  input: GenerateContentInput
): Promise<GenerateContentResult> {
  const user = await getCurrentUser()

  if (!user) {
    return { success: false, error: "You must be signed in to generate." }
  }

  const parsed = generateContentInputSchema.safeParse(input)

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0]?.message ?? "Invalid input.",
    }
  }

  try {
    return await createGeneratedPost(user.id, parsed.data)
  } catch (error) {
    console.error("[Generation] Failed to generate content:", error)

    return {
      success: false,
      error: getGenerationErrorMessage(error),
    }
  }
}

export async function updatePost(
  input: UpdatePostInput
): Promise<UpdatePostResult> {
  const user = await getCurrentUser()

  if (!user) {
    return { success: false, error: "You must be signed in to save changes." }
  }

  const parsed = updatePostInputSchema.safeParse(input)

  if (!parsed.success) {
    return {
      success: false,
      error: parsed.error.issues[0]?.message ?? "Invalid input.",
    }
  }

  try {
    return await updatePostContent(user.id, parsed.data)
  } catch {
    return { success: false, error: GENERIC_ERROR }
  }
}
