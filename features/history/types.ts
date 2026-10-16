import type { TranslationKey } from "@/lib/i18n/translator"

export type Platform = "LinkedIn" | "Instagram"
export type Filter = "All" | Platform

export type HistoryItem = {
  id: number
  title: TranslationKey
  excerpt: TranslationKey
  platform: Platform
  date: TranslationKey
  status: "Generated" | "Edited"
  color: string
}
