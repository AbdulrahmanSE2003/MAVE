import { z } from "zod"

export const providerEnum = ["OPENAI", "GEMINI"] as const

// AI credential schema
export const saveAiCredentialSchema = z.object({
  provider: z.enum(providerEnum),
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
  style: z.enum(["Editorial", "Bold", "Minimal", "Playful"]),
  colorPalette: z.enum(["Warm neutral", "Cool muted", "Monochrome", "Vibrant"]),
  density: z.enum(["Spacious", "Balanced", "Dense"]),
  typography: z.enum(["Serif", "Sans", "Bold"]),
})

export const saveVisualPreferencesSchema = z.object({
  preferences: visualStylePreferencesSchema,
})

export type SaveVisualPreferencesInput = z.infer<
  typeof saveVisualPreferencesSchema
>
