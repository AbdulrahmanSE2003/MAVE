import { Post, Visual } from "@/lib/generated/prisma/client"
import { HistoryCardData } from "./types"

export function postToHistoryCard(post: Post): HistoryCardData {
  return {
    id: post.id,
    historyType: "post",
    idea: post.idea,
    content: post.content,
    contentType: post.contentType,
    platform: post.platform,
    createdAt: post.createdAt,
  }
}

export function visualToHistoryCard(visual: Visual): HistoryCardData {
  return {
    id: visual.id,
    historyType: "visual",
    idea: visual.prompt ?? "",
    createdAt: visual.createdAt,
    storageKey: visual.storageKey,
    mimeType: visual.mimeType,
  }
}
