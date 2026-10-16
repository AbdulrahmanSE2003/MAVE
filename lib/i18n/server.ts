import { cache } from "react"
import { cookies } from "next/headers"
import { DEFAULT_LOCALE, isLocale, LOCALE_COOKIE, type Locale } from "./config"
import { dictionaries, type Dictionary } from "./dictionaries"
import {
  createMessageTranslator,
  createTranslator,
  type MessageTranslator,
  type Translator,
} from "./translator"

/**
 * Locale of the current request, read from the `mave-locale` cookie.
 * Cached per request so layouts and pages share a single read.
 */
export const getLocale = cache(async (): Promise<Locale> => {
  const cookieStore = await cookies()
  const value = cookieStore.get(LOCALE_COOKIE)?.value
  return isLocale(value) ? value : DEFAULT_LOCALE
})

export type ServerI18n = {
  locale: Locale
  dict: Dictionary
  t: Translator
  tm: MessageTranslator
}

/**
 * Server-side translation bundle for the current request.
 *
 * ```ts
 * const { t } = await getI18n()
 * return <h1>{t("settings.title")}</h1>
 * ```
 */
export const getI18n = cache(async (): Promise<ServerI18n> => {
  const locale = await getLocale()
  return {
    locale,
    dict: dictionaries[locale],
    t: createTranslator(dictionaries[locale], dictionaries.en),
    tm: createMessageTranslator(dictionaries[locale], dictionaries.en),
  }
})
