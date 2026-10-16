"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Field, SectionHeading } from "./SettingsPrimitives"
import { useT } from "@/lib/i18n"
import { LanguageSwitcher } from "@/components/language-switcher"

type FontFamily = "sans" | "serif"
type Theme = "light" | "dark" | "system"

const FONT_KEY = "mave-font-family"

const themes: Theme[] = ["light", "dark", "system"]
const fonts: FontFamily[] = ["sans", "serif"]

const selectClass =
  "h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"

export default function AppearanceSection() {
  const { theme, setTheme } = useTheme()
  const t = useT()

  const [mounted, setMounted] = useState(false)
  const [font, setFont] = useState<FontFamily>("sans")

  useEffect(() => {
    const savedFont = localStorage.getItem(FONT_KEY)

    const initialFont: FontFamily = savedFont === "serif" ? "serif" : "sans"

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFont(initialFont)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    localStorage.setItem(FONT_KEY, font)
    document.documentElement.dataset.fontFamily = font
  }, [font, mounted])

  function handleFontChange(value: FontFamily) {
    setFont(value)
  }

  return (
    <section id="appearance" className="scroll-mt-8 space-y-5">
      <SectionHeading
        title={t("settings.appearance.title")}
        description={t("settings.appearance.description")}
      />

      <div className="space-y-6 rounded-xl border p-5 sm:p-6">
        <Field
          label={t("settings.appearance.theme.label")}
          hint={t("settings.appearance.theme.hint")}
        >
          <div className="grid grid-cols-3 gap-2">
            {themes.map((value) => {
              const selected = mounted && theme === value

              return (
                <button
                  key={value}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setTheme(value)}
                  className={`rounded-lg border px-3 py-2.5 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none ${
                    selected
                      ? "border-foreground bg-muted font-medium text-foreground"
                      : "text-muted-foreground hover:bg-muted/60"
                  }`}
                >
                  {t(`settings.appearance.theme.options.${value}`)}
                </button>
              )
            })}
          </div>
        </Field>

        <div className="border-t" />

        <Field
          label={t("settings.appearance.font.label")}
          hint={t("settings.appearance.font.hint")}
        >
          <div className="grid gap-2 sm:grid-cols-2">
            {fonts.map((value) => {
              const selected = mounted && font === value

              return (
                <button
                  key={value}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => handleFontChange(value)}
                  className={`flex items-center justify-between rounded-lg border p-3 text-start transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none ${
                    selected
                      ? "border-foreground bg-muted"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <span
                    className={
                      value === "serif"
                        ? "font-serif text-base"
                        : "font-sans text-base"
                    }
                  >
                    {t(`settings.appearance.font.options.${value}`)}
                  </span>

                  <span className="text-xs text-muted-foreground">Aa</span>
                </button>
              )
            })}
          </div>
        </Field>

        <div className="border-t" />

        <Field
          label={t("settings.appearance.language.label")}
          hint={t("settings.appearance.language.hint")}
        >
          <LanguageSwitcher
            label={t("settings.appearance.language.label")}
            className={selectClass}
          />
        </Field>
      </div>
    </section>
  )
}
