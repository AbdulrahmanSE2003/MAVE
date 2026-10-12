import { ContentType, Platform } from "@/lib/generated/prisma/enums"

export interface ShortcutGroup {
  category: string
  items: { label: string; keys: string[] }[]
}

export const PLATFORM_LABELS: Record<Platform, string> = {
  LINKEDIN: "Linkedin",
  INSTAGRAM: "Instagram",
}

// export enum ContentType {
//   LINKEDIN_POST = "Linkedin Post",
//   INSTAGRAM_CAPTION = "Instagram Caption",
//   INSTAGRAM_CAROUSEL = "Instagram Carousel",
// }
export type CarouselSlide = {
  id: string
  order: number
  title?: string
  content: string
}

export type GeneratedContent = {
  id: string
  contentType: ContentType
  content: string
  slides?: CarouselSlide[]
}

export type userRoles = "user"

export interface User {
  name: string
  email: string
  emailVerified?: boolean | null | undefined
  image?: string | null
  createdAt: Date | null | undefined
  updatedAt: Date | null | undefined
  role?: string | null | undefined
  banned?: boolean | null | undefined
  banReason?: string | null | undefined
  banExpires?: Date | null | undefined
  id: string
}
