"use server"

import { getCurrentUser } from "@/lib/users/current-user"
import { prisma } from "@/lib/prisma"

export const getUserPosts = async () => {
  const user = await getCurrentUser()

  if (!user) {
    return {
      success: false as const,
      error: "You must be signed in.",
    }
  }

  const posts = await prisma.post.findMany({
    where: {
      userId: user.id,
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
    return {
      success: false as const,
      error: "You must be signed in.",
    }
  }

  const post = await prisma.post.findUnique({
    where: {
      id: postId,
      userId: user.id,
    },
  })

  if (!post) {
    return {
      success: false as const,
      error: "Post not found.",
    }
  }

  return {
    success: true as const,
    data: post,
  }
}
