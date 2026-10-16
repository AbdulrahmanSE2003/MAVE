"use client"

import { useEffect, useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"
import { useT } from "@/lib/i18n"
import { settingsSections } from "../constants"

const SettingsSidebar = () => {
  const t = useT()
  // The active item follows what is actually on screen instead of the URL
  // hash: client-side navigation does not fire `hashchange`, and scrolling
  // never changes the hash at all.
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const sections = settingsSections
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    if (sections.length === 0) return

    // A narrow reading band just below the top of the viewport — the section
    // crossing it is the one being read. When nothing intersects (e.g. while
    // scrolling through the gap between two sections) the last active item is
    // kept rather than cleared.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <aside className="h-fit lg:sticky lg:top-8">
      <nav
        aria-label={t("settings.sectionsNavLabel")}
        className="flex gap-1 overflow-x-auto lg:flex-col"
      >
        {settingsSections.map((item) => {
          const isActive = activeId === item.id

          return (
            <Link
              key={item.id}
              href={`#${item.id}`}
              aria-current={isActive ? "true" : undefined}
              className={`flex shrink-0 items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                isActive
                  ? "bg-muted font-medium text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <HugeiconsIcon icon={item.icon} />
              {t(`settings.sections.${item.id}`)}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

export default SettingsSidebar
