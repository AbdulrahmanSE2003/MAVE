import type { Locale } from "../config"
import type { Dictionary } from "./en"
import { en } from "./en"
import { ar } from "./ar"
import { es } from "./es"

export type { Dictionary }

export const dictionaries: Record<Locale, Dictionary> = { en, ar, es }
