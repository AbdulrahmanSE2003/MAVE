"use client"

import { isLocale, LOCALES, useI18n, type Locale } from "@/lib/i18n"

/** Language names are always shown in their own language. */
const LANGUAGE_NAMES: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  es: "Español",
}

export function LanguageSwitcher({
  label,
  className,
}: {
  /** Accessible name for the select (pass a translated string). */
  label?: string
  className?: string
}) {
  const { locale, setLocale } = useI18n()

  return (
    <select
      value={locale}
      aria-label={label}
      onChange={(event) => {
        const value: unknown = event.target.value
        if (isLocale(value)) setLocale(value)
      }}
      className={
        className ??
        "h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
      }
    >
      {LOCALES.map((value) => (
        <option key={value} value={value}>
          {LANGUAGE_NAMES[value]}
        </option>
      ))}
    </select>
  )
}
