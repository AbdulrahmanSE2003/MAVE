export const LOCALES = ["en", "ar", "es"] as const

export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = "en"

/** Cookie that stores the visitor's interface language. Read on the server so
 * the initial HTML already carries the right `lang`/`dir`, and written from
 * the client when the visitor switches language. */
export const LOCALE_COOKIE = "mave-locale"

export const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365

export function isLocale(value: unknown): value is Locale {
  return (
    typeof value === "string" && (LOCALES as readonly string[]).includes(value)
  )
}

export const HTML_DIR: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ar: "rtl",
  es: "ltr",
}
