"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { useEffect } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { Kbd, KbdGroup } from "./kbd"
import { Skeleton } from "./skeleton"
import { useT } from "@/lib/i18n"

export function ThemeToggle() {
  const t = useT()
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="sm"
        className={`min-w-24`}
        aria-label={t("app.theme.toggle")}
        disabled
      >
        <Skeleton className={`w-full`} />
      </Button>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="outline"
      size="sm"
      className="gap-2"
      aria-label={
        isDark
          ? t("app.theme.switchToLightMode")
          : t("app.theme.switchToDarkMode")
      }
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <span className="relative size-4">
        <HugeiconsIcon
          icon={Sun03Icon}
          className={`absolute inset-0 size-4 transition-all duration-300 ${
            isDark
              ? "scale-0 -rotate-90 opacity-0"
              : "scale-100 rotate-0 opacity-100"
          }`}
        />
        <HugeiconsIcon
          icon={Moon02Icon}
          className={`absolute inset-0 size-4 transition-all duration-300 ${
            isDark
              ? "scale-100 rotate-0 opacity-100"
              : "scale-0 rotate-90 opacity-0"
          }`}
        />
      </span>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <span>+</span>
        <Kbd>D</Kbd>
      </KbdGroup>
    </Button>
  )
}
