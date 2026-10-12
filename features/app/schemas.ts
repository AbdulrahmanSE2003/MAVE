import { Platform } from "@/lib/generated/prisma/enums"
import z from "zod"

export const saveAiPostSchema = z.object({
  userId: z.string(),
  platform: z.enum(Platform),
  idea: z.string(),
  content: z.string(),
})

export type SaveAiPostSchema = z.infer<typeof saveAiPostSchema>
