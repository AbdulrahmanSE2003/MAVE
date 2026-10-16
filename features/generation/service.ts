import { prisma } from "@/lib/prisma"
import { decryptSecret } from "@/lib/security/encryption"
import {
  AiProvider,
  ContentType,
  ContentType as DbContentType,
  Platform as DbPlatform,
} from "@/lib/generated/prisma/enums"
import { buildSystemPrompt, buildUserPrompt } from "./prompt-builder"
import { openaiAdapter } from "./providers/openai"
import { geminiAdapter } from "./providers/gemini"
import { carouselOutputSchema } from "./schemas"
import type { GenerateContentInput } from "./schemas"
import type { GenerateContentResult, GenerationAdapter } from "./types"

export type UpdatePostResult =
  | { success: true; data: { postId: string } }
  | { success: false; error: string }

// The UI carries ContentType as its display labels, the database stores the
// Prisma enum. This is the single place the two representations meet.
const DB_CONTENT_TYPE: Record<ContentType, DbContentType> = {
  [ContentType.LINKEDIN_POST]: DbContentType.LINKEDIN_POST,
  [ContentType.INSTAGRAM_CAPTION]: DbContentType.INSTAGRAM_CAPTION,
  [ContentType.INSTAGRAM_CAROUSEL]: DbContentType.INSTAGRAM_CAROUSEL,
}

const DB_PLATFORM: Record<ContentType, DbPlatform> = {
  [ContentType.LINKEDIN_POST]: DbPlatform.LINKEDIN,
  [ContentType.INSTAGRAM_CAPTION]: DbPlatform.INSTAGRAM,
  [ContentType.INSTAGRAM_CAROUSEL]: DbPlatform.INSTAGRAM,
}

function fail(error: string): GenerateContentResult {
  return { success: false, error }
}

function getModel(provider: AiProvider): string | null {
  const model =
    provider === "OPENAI" ? process.env.OPENAI_MODEL : process.env.GEMINI_MODEL

  return model?.trim() || null
}

function getAdapter(provider: AiProvider): GenerationAdapter {
  return provider === "OPENAI" ? openaiAdapter : geminiAdapter
}

export async function createGeneratedPost(
  userId: string,
  input: GenerateContentInput
): Promise<GenerateContentResult> {
  // 3. Resolve the credential. Never pick one at random.
  const credentials = await prisma.aiCredential.findMany({
    where: { userId },
  })

  if (credentials.length === 0) {
    return fail(
      "No AI provider is connected yet. Connect one to start writing."
    )
  }

  const credential = (() => {
    if (input.provider) {
      return (
        credentials.find((item) => item.provider === input.provider) ?? null
      )
    }

    if (credentials.length > 1) {
      return null
    }

    return credentials[0]
  })()

  if (!credential) {
    if (!input.provider && credentials.length > 1) {
      return fail(
        "You have more than one provider saved. Choose which one to use."
      )
    }

    return fail("No API key is saved for that provider. Reconnect it first.")
  }

  // 4. Decrypt only here, and only for the lifetime of this request.
  let apiKey: string
  try {
    apiKey = decryptSecret(credential.encryptedApiKey)
  } catch {
    return fail("Your saved API key can't be read. Please reconnect it.")
  }

  const model = getModel(credential.provider)
  if (!model) {
    return fail("This provider isn't configured on the server yet.")
  }

  // 5. Prompt built from the user's real writing examples.
  const examples = await prisma.writingExample.findMany({
    where: { userId },
    orderBy: { createdAt: "asc" },
    select: { content: true },
  })

  const systemPrompt = buildSystemPrompt({
    contentType: input.contentType,
    writingExamples: examples.map((example) => example.content),
    goal: input.goal,
    tone: input.tone,
  })

  const userPrompt = buildUserPrompt({
    idea: input.idea,
    context: input.context,
  })
  // 6. Generate.
  let raw: string
  try {
    const result = await getAdapter(credential.provider).generateText({
      systemPrompt,
      userPrompt,
      apiKey,
      model,
    })
    raw = result.raw
  } catch (error) {
    const code = error instanceof Error ? error.message : ""

    if (code === "OPENAI_EMPTY_RESPONSE" || code === "GEMINI_EMPTY_RESPONSE") {
      return fail("The provider came back empty. Please try again.")
    }

    return fail(
      error instanceof Error &&
        error.message === "GEMINI_TEMPORARILY_UNAVAILABLE"
        ? "Gemini is temporarily unavailable due to high demand. Please try again in a moment."
        : "Your AI provider couldn't be reached. Please check your connection and try again."
    )
  }

  // 7. Carousel output must be structured JSON.
  let content = raw

  if (input.contentType === ContentType.INSTAGRAM_CAROUSEL) {
    let parsedJson: unknown
    try {
      parsedJson = JSON.parse(raw)
    } catch {
      return fail("The carousel came back malformed. Please try again.")
    }

    const validated = carouselOutputSchema.safeParse(parsedJson)

    if (!validated.success) {
      return fail(
        validated.error.issues[0]?.message ??
          "The carousel didn't match the expected format. Please try again."
      )
    }

    content = JSON.stringify(validated.data, null, 2)
  }

  // 8. Persist.
  const post = await prisma.post.create({
    data: {
      userId,
      platform: DB_PLATFORM[input.contentType],
      contentType: DB_CONTENT_TYPE[input.contentType],
      idea: input.idea,
      content,
    },
    select: { id: true },
  })

  return {
    success: true,
    data: {
      postId: post.id,
      contentType: input.contentType,
      content,
    },
  }
}

export async function updatePostContent(
  userId: string,
  input: { postId: string; content: string }
): Promise<UpdatePostResult> {
  const post = await prisma.post.findUnique({
    where: { id: input.postId },
    select: { userId: true },
  })

  if (!post) {
    return { success: false, error: "This post could not be found." }
  }

  if (post.userId !== userId) {
    return {
      success: false,
      error: "You don't have permission to edit this post.",
    }
  }

  await prisma.post.update({
    where: { id: input.postId },
    data: { content: input.content },
  })

  return { success: true, data: { postId: input.postId } }
}
