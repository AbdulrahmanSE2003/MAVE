import type { TranslationKey } from "@/lib/i18n/translator"

export type Visual = {
  id: number
  title: TranslationKey
  platform: "Instagram" | "LinkedIn"
  format: string
  category: TranslationKey
  background: string
  foreground: string
  accent: string
  eyebrow: TranslationKey
  headline: TranslationKey
  footer: TranslationKey
}
