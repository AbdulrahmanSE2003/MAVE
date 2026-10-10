import z from "zod"
import { Platform } from "./types"

export const saveAiPostSchema = z.object({
  userId: z.string(),
  platform: z.enum(Platform),
  idea: z.string(),
  content: z.string(),
})

export type SaveAiPostSchema = z.infer<typeof saveAiPostSchema>
