"use client"

import { isLocale, LOCALES, useI18n, type Locale } from "@/lib/i18n"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const LANGUAGE_NAMES: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  es: "Español",
}

export function LanguageSwitcher({
  label,
  className,
}: {
  /** Accessible name for the select. */
  label?: string
  className?: string
}) {
  const { locale, setLocale, isChangingLocale } = useI18n()

  const handleValueChange = (value: string) => {
    if (!isLocale(value) || value === locale || isChangingLocale) return

    setLocale(value)
  }

  return (
    <Select
      value={locale}
      onValueChange={handleValueChange}
      disabled={isChangingLocale}
    >
      <SelectTrigger
        aria-label={label}
        aria-busy={isChangingLocale}
        className={className}
      >
        <SelectValue placeholder={LANGUAGE_NAMES[locale]} />
      </SelectTrigger>

      <SelectContent position="popper" align="end" side="bottom">
        {LOCALES.map((value) => (
          <SelectItem key={value} value={value}>
            {LANGUAGE_NAMES[value]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
