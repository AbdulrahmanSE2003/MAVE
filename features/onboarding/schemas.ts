import { z } from "zod"


// AI credential schema 
export const saveAiCredentialSchema = z.object({
  provider: z.enum(["OPENAI", "GEMINI"]),
  apiKey: z.string().trim().min(1, "API key is required."),
})

export type SaveAiCredentialInput = z.infer<typeof saveAiCredentialSchema>


// Writing examples schema
export const saveWritingExamplesSchema = z.object({
  examples: z
    .array(
      z.object({
        content: z.string().trim().min(1, "Example cannot be empty."),
      })
    )
    .max(5, "You can add up to 5 writing examples."),
})

export type SaveWritingExamplesInput = z.infer<typeof saveWritingExamplesSchema>


// Visual style preferences schema
const visualStylePreferencesSchema = z.object({
  style: z.enum(["editorial", "bold", "minimal", "playful"]),
  colorPalette: z.enum([
    "warm-neutral",
    "cool-muted",
    "monochrome",
    "vibrant",
  ]),
  density: z.enum(["spacious", "balanced", "dense"]),
  typography: z.enum([
    "serif-editorial",
    "sans-modern",
    "bold-display",
  ]),
})

export const saveVisualPreferencesSchema = z.object({
  preferences: visualStylePreferencesSchema,
})

export type SaveVisualPreferencesInput = z.infer<
  typeof saveVisualPreferencesSchema
>