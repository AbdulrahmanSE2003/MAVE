"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"
import { useRouter } from "next/navigation"
import {
  HTML_DIR,
  LOCALE_COOKIE,
  LOCALE_COOKIE_MAX_AGE,
  type Locale,
} from "./config"
import { dictionaries, type Dictionary } from "./dictionaries"
import {
  createMessageTranslator,
  createTranslator,
  type MessageTranslator,
  type Translator,
} from "./translator"

type I18nContextValue = {
  locale: Locale
  dict: Dictionary
  t: Translator
  tm: MessageTranslator
  setLocale: (locale: Locale) => void
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({
  locale: initialLocale,
  children,
}: {
  locale: Locale
  children: React.ReactNode
}) {
  const router = useRouter()
  const [locale, setLocaleState] = useState<Locale>(initialLocale)
  const [prevInitialLocale, setPrevInitialLocale] =
    useState<Locale>(initialLocale)

  // Keep in sync when the server re-renders with a different cookie (after
  // router.refresh(), or a change made in another tab). Adjusting state
  // during render is the React-recommended alternative to syncing in an
  // effect: https://react.dev/learn/you-might-not-need-an-effect
  if (prevInitialLocale !== initialLocale) {
    setPrevInitialLocale(initialLocale)
    setLocaleState(initialLocale)
  }

  const setLocale = useCallback(
    (next: Locale) => {
      setLocaleState((current) => {
        if (current === next) return current

        document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}; samesite=lax`

        // Apply language and direction to the document right away so client
        // components flip instantly, then refresh the server-rendered tree so
        // server components and <html lang/dir> catch up.
        document.documentElement.lang = next
        document.documentElement.dir = HTML_DIR[next]
        router.refresh()

        return next
      })
    },
    [router]
  )

  const value = useMemo<I18nContextValue>(() => {
    return {
      locale,
      dict: dictionaries[locale],
      // Falls back to English for any key the locale might be missing
      // (the type system should already prevent that).
      t: createTranslator(dictionaries[locale], dictionaries.en),
      tm: createMessageTranslator(dictionaries[locale], dictionaries.en),
      setLocale,
    }
  }, [locale, setLocale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}

export function useT(): Translator {
  return useI18n().t
}
