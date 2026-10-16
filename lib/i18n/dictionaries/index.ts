import type { Locale } from "../config"
import { createTranslator, type Translator } from "../translator"
import type { Dictionary } from "./en"
import { en } from "./en"
import { ar } from "./ar"
import { es } from "./es"

export type { Dictionary }

export const dictionaries: Record<Locale, Dictionary> = { en, ar, es }

export const translators: Record<Locale, Translator> = {
  en: createTranslator(en),
  ar: createTranslator(ar, en),
  es: createTranslator(es, en),
}
