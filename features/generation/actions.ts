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
  } catch {
    return { success: false, error: GENERIC_ERROR }
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
