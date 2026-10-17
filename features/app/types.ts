import type { TranslationKey } from "@/lib/i18n/translator"

export interface ShortcutGroup {
  categoryKey: TranslationKey
  items: { labelKey: TranslationKey; keys: string[] }[]
}

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
