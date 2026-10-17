import { ContentType } from "@/lib/generated/prisma/enums"

export type HistoryFilter = "all" | "posts" | "images"

export type HistoryCardData =
  | {
      historyType: "post"
      id: string
      idea: string
      content: string
      contentType: ContentType
      platform: "LINKEDIN" | "INSTAGRAM"
      createdAt: Date
    }
  | {
      historyType: "visual"
      id: string
      idea: string
      createdAt: Date
      storageKey: string
      mimeType: string
    }

export type HistoryCursor = {
  postId?: string
  visualId?: string
}
