"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
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
  type TranslationKey,
  type Translator,
} from "./translator"
import { LocaleTransitionOverlay } from "./locale-transition-overlay"

type I18nContextValue = {
  locale: Locale
  dict: Dictionary
  t: Translator
  tm: MessageTranslator
  /** True while a locale transition is in flight (overlay shown, UI locked). */
  isChangingLocale: boolean
  setLocale: (locale: Locale) => void
}

const I18nContext = createContext<I18nContextValue | null>(null)

/**
 * Last-resort guard so a locale transition can never leave the interface locked.
 * Completion is normally detected by the server echoing the new locale back into
 * this provider (see the acknowledgment effect below); this timer only fires when
 * that acknowledgment never arrives — e.g. the refresh request hangs because the
 * network dropped — and rolls the interface back to the last confirmed locale.
 */
const LOCALE_TRANSITION_TIMEOUT_MS = 10_000

function translateIn(locale: Locale, key: TranslationKey): string {
  return createTranslator(dictionaries[locale], dictionaries.en)(key)
}

function writeLocaleCookie(locale: Locale): void {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${LOCALE_COOKIE_MAX_AGE}; samesite=lax`
}

/** Reads the locale cookie back so a blocked cookie write can fail fast. */
function readLocaleCookie(): string | null {
  const prefix = `${LOCALE_COOKIE}=`
  const row = document.cookie
    .split("; ")
    .find((candidate) => candidate.startsWith(prefix))
  return row === undefined ? null : row.slice(prefix.length)
}

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
  /** Target locale while a transition is in flight, otherwise `null`. */
  const [pendingLocale, setPendingLocale] = useState<Locale | null>(null)

  /** Server locale captured when the in-flight transition started. */
  const startServerLocaleRef = useRef<Locale>(initialLocale)
  /** Last server-confirmed locale: the value a failed transition rolls back to. */
  const confirmedLocaleRef = useRef<Locale>(initialLocale)
  const watchdogRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearWatchdog = useCallback(() => {
    if (watchdogRef.current !== null) {
      clearTimeout(watchdogRef.current)
      watchdogRef.current = null
    }
  }, [])

  // Keep in sync when the server re-renders with a different cookie (after
  // router.refresh(), or a change made in another tab). Adjusting state
  // during render is the React-recommended alternative to syncing in an
  // effect: https://react.dev/learn/you-might-not-need-an-effect
  if (prevInitialLocale !== initialLocale) {
    setPrevInitialLocale(initialLocale)
    setLocaleState(initialLocale)
  }

  // Track the last locale the server confirmed so a failed transition has a
  // consistent value to roll back to.
  useEffect(() => {
    confirmedLocaleRef.current = initialLocale
  }, [initialLocale])

  // Keep <html lang>/<html dir> in sync with the active locale. This single
  // path covers the optimistic switch, the server-confirmed locale, and every
  // rollback, so cookie, document, and state can never drift apart.
  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = HTML_DIR[locale]
  }, [locale])

  // Never leave a timer armed across an unmount.
  useEffect(() => clearWatchdog, [clearWatchdog])

  /**
   * Acknowledge a completed transition.
   *
   * `router.refresh()` exposes no completion callback, so the signal that the
   * new locale has been applied is the server echoing it back into this
   * provider: the root layout re-reads the cookie during the refresh and passes
   * the resolved locale down. The transition has landed the moment that prop
   * moves off the value it had when the transition started.
   */
  useEffect(() => {
    if (pendingLocale === null) return
    // Refresh has not landed yet — the server still reports the old locale.
    if (initialLocale === startServerLocaleRef.current) return

    clearWatchdog()

    if (initialLocale !== pendingLocale) {
      // The refresh landed but the server settled on a different locale than
      // requested (e.g. a competing cookie write). Client state was already
      // reconciled to the server value above, so only surface the failure.
      toast.error(translateIn(initialLocale, "errors.languageChange.failed"))
    }

    setPendingLocale(null)
  }, [initialLocale, pendingLocale, clearWatchdog])

  /**
   * Abort an in-flight transition and roll the interface back to the last
   * server-confirmed locale, keeping cookie, document, and state consistent.
   */
  const rollbackLocale = useCallback(() => {
    const confirmed = confirmedLocaleRef.current
    writeLocaleCookie(confirmed)
    setLocaleState(confirmed)
    setPendingLocale(null)
    toast.error(translateIn(confirmed, "errors.languageChange.failed"))
  }, [])

  const setLocale = useCallback(
    (next: Locale) => {
      // Block duplicate or overlapping transitions while one is in flight.
      if (pendingLocale !== null) return
      // Skip a redundant refresh when the locale is already active.
      if (next === locale) return

      // Persist the choice first: the server reads this cookie during the
      // refresh. Verifying the write lets us fail fast — and still unlocked —
      // when cookies are unavailable, instead of locking behind a refresh that
      // cannot succeed.
      writeLocaleCookie(next)
      if (readLocaleCookie() !== next) {
        console.warn(
          "[i18n] Locale cookie could not be written; language change aborted."
        )
        toast.error(translateIn(locale, "errors.languageChange.failed"))
        return
      }

      // Capture the pre-transition server locale (the acknowledgment effect
      // compares against it), then lock the UI and switch client translations
      // optimistically so the overlay message appears in the chosen language.
      startServerLocaleRef.current = initialLocale
      setLocaleState(next)
      setPendingLocale(next)

      try {
        router.refresh()
      } catch (error) {
        console.error(
          "[i18n] router.refresh() failed during language change:",
          error instanceof Error ? error.message : String(error)
        )
        rollbackLocale()
        return
      }

      // Arm the watchdog only once the refresh is actually in flight, so a
      // synchronous failure above cannot leave a stray timer behind.
      clearWatchdog()
      watchdogRef.current = setTimeout(() => {
        watchdogRef.current = null
        console.error(
          "[i18n] Language change was not acknowledged by the server; rolling back."
        )
        rollbackLocale()
      }, LOCALE_TRANSITION_TIMEOUT_MS)
    },
    [
      pendingLocale,
      locale,
      initialLocale,
      router,
      clearWatchdog,
      rollbackLocale,
    ]
  )

  // Derived outside `value`: `value` also wraps `setLocale`, which closes over
  // refs, so the refs lint rule cannot prove reading `value.t` during render is
  // safe. This memo only depends on `locale` and a pure module function.
  const changingLanguageMessage = useMemo(
    () => translateIn(locale, "common.status.changingLanguage"),
    [locale]
  )

  const value = useMemo<I18nContextValue>(() => {
    return {
      locale,
      dict: dictionaries[locale],
      // Falls back to English for any key the locale might be missing
      // (the type system should already prevent that).
      t: createTranslator(dictionaries[locale], dictionaries.en),
      tm: createMessageTranslator(dictionaries[locale], dictionaries.en),
      isChangingLocale: pendingLocale !== null,
      setLocale,
    }
  }, [locale, pendingLocale, setLocale])

  return (
    <I18nContext.Provider value={value}>
      {children}
      <LocaleTransitionOverlay
        open={pendingLocale !== null}
        message={changingLanguageMessage}
      />
    </I18nContext.Provider>
  )
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
