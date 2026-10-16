"use server"

import { getCurrentUser } from "@/lib/users/current-user"
import { prisma } from "@/lib/prisma"
import { getI18n } from "@/lib/i18n/server"

export const getUserPosts = async () => {
  const user = await getCurrentUser()

  if (!user) {
    const { t } = await getI18n()
    return {
      success: false as const,
      error: t("app.actions.errors.signedOut"),
    }
  }

  const posts = await prisma.post.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  })

  return {
    success: true as const,
    data: posts,
  }
}

export const getPost = async (postId: string) => {
  const user = await getCurrentUser()

  if (!user) {
    const { t } = await getI18n()
    return {
      success: false as const,
      error: t("app.actions.errors.signedOut"),
    }
  }

  const post = await prisma.post.findUnique({
    where: {
      id: postId,
      userId: user.id,
    },
  })

  if (!post) {
    const { t } = await getI18n()
    return {
      success: false as const,
      error: t("app.actions.errors.postNotFound"),
    }
  }

  return {
    success: true as const,
    data: post,
  }
}
