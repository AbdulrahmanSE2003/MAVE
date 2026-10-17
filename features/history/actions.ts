"use server"

import { getI18n } from "@/lib/i18n/server"
import { postToHistoryCard, visualToHistoryCard } from "./services"
import { HistoryCardData, HistoryCursor } from "./types"
import { getCurrentUser } from "@/lib/users/current-user"
import { prisma } from "@/lib/prisma"
import { PAGE_SIZE } from "./constants"

export const getHistory = async (cursor?: HistoryCursor) => {
  const { t } = await getI18n()
  const user = await getCurrentUser()

  if (!user) {
    return {
      success: false as const,
      error: t("write.errors.signInGenerate"),
    }
  }

  try {
    const [posts, visuals] = await Promise.all([
      prisma.post.findMany({
        where: { userId: user.id },
        orderBy: [{ createdAt: "desc" }, { id: "desc" }],
        ...(cursor?.postId ? { cursor: { id: cursor.postId }, skip: 1 } : {}),
        take: PAGE_SIZE + 1,
      }),

      prisma.visual.findMany({
        where: { userId: user.id },
        orderBy: [{ createdAt: "desc" }, { id: "desc" }],
        ...(cursor?.visualId
          ? { cursor: { id: cursor.visualId }, skip: 1 }
          : {}),
        take: PAGE_SIZE + 1,
      }),
    ])

    const items: HistoryCardData[] = [
      ...posts.map(postToHistoryCard),
      ...visuals.map(visualToHistoryCard),
    ].sort((a, b) => {
      const dateDifference = b.createdAt.getTime() - a.createdAt.getTime()

      return dateDifference || b.id.localeCompare(a.id)
    })

    const hasMore = items.length > PAGE_SIZE
    const data = items.slice(0, PAGE_SIZE)

    const nextCursor: HistoryCursor = { ...cursor }

    for (const item of data) {
      if (item.historyType === "post") {
        nextCursor.postId = item.id
      } else {
        nextCursor.visualId = item.id
      }
    }

    return {
      success: true as const,
      data,
      hasMore,
      nextCursor,
    }
  } catch (error) {
    console.error("Failed to fetch history:", error)

    return {
      success: false as const,
      error: t("history.errors.fetchFailed"),
    }
  }
}
