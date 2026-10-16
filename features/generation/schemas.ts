import { z } from "zod"
import { AiProvider, ContentType } from "@/lib/generated/prisma/enums"
import { goalValues, Tones } from "../write/constants"

export const generateContentInputSchema = z.object({
  idea: z.string().trim().min(1, "write.validation.ideaRequired").max(2000),
  contentType: z.enum(ContentType),
  provider: z.enum(AiProvider).optional(),

  goal: z.enum(goalValues).optional(),
  tone: z.enum(Tones).optional(),
  context: z.string().trim().max(2000).optional(),
})

export type GenerateContentInput = z.infer<typeof generateContentInputSchema>

// Validates the structured output we require from the model when
// contentType is INSTAGRAM_CAROUSEL. Used to parse the provider's raw
// text (expected to be JSON) before persisting it.
export const carouselOutputSchema = z.object({
  slides: z
    .array(
      z.object({
        heading: z.string().trim().min(1).max(80),
        body: z.string().trim().min(1).max(280),
      })
    )
    .min(1, "write.validation.carouselMinSlides")
    .max(10, "write.validation.carouselMaxSlides"),
})

export const updatePostInputSchema = z.object({
  postId: z.string().cuid(),
  content: z.string().trim().min(1, "write.validation.contentEmpty"),
})

export type UpdatePostInput = z.infer<typeof updatePostInputSchema>
