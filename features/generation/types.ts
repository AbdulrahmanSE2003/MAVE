// features/generation/types.ts

import { AiProvider } from "@/lib/generated/prisma/enums"
import { ContentType } from "../app/types"

export type GenerateContentParams = {
  idea: string
  contentType: ContentType
  provider?: AiProvider // explicit choice when user has more than one saved
}

export type CarouselSlide = {
  heading: string
  body: string
}

export type CarouselOutput = {
  slides: CarouselSlide[]
}

// What every provider adapter must return — a single shared shape.
// The adapter does NOT know about ContentType-specific parsing;
// it just returns raw text. Structuring (e.g. carousel JSON) happens
// in service.ts after the raw text comes back.
export type ProviderGenerationResult = {
  raw: string
}

export type GenerationAdapter = {
  generateText(params: {
    systemPrompt: string
    userPrompt: string
    apiKey: string
    model: string
  }): Promise<ProviderGenerationResult>
}

export type GenerateContentSuccess = {
  success: true
  data: {
    postId: string
    contentType: ContentType
    content: string // raw text, OR JSON string for carousel
  }
}

export type GenerateContentFailure = {
  success: false
  error: string
}

export type GenerateContentResult =
  GenerateContentSuccess | GenerateContentFailure
