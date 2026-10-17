"use client"

import { useEffect, useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"
import { useT } from "@/lib/i18n"
import { settingsSections } from "../constants"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const SettingsSidebar = () => {
  const t = useT()
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const sections = settingsSections
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    if (sections.length === 0) return

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

  const handleSelectChange = (value: string) => {
    setActiveId(value)
    const element = document.getElementById(value)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const activeSection = settingsSections.find((item) => item.id === activeId)

  return (
    <>
      {/* Mobile / Tablet: shadcn UI Select */}
      <div className="sticky top-2 z-20 bg-background backdrop-blur lg:hidden">
        <Select value={activeId} onValueChange={handleSelectChange}>
          <SelectTrigger className="w-full font-medium">
            <SelectValue placeholder={t("settings.sectionsNavLabel")}>
              {activeSection && (
                <div className="flex items-center gap-2">
                  <HugeiconsIcon
                    icon={activeSection.icon}
                    className="size-4 shrink-0"
                  />
                  <span>{t(`settings.sections.${activeSection.id}`)}</span>
                </div>
              )}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {settingsSections.map((item) => (
              <SelectItem key={item.id} value={item.id}>
                <div className="flex items-center gap-2">
                  <HugeiconsIcon
                    icon={item.icon}
                    className="size-4 shrink-0 text-muted-foreground"
                  />
                  <span>{t(`settings.sections.${item.id}`)}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Desktop Navigation Sidebar */}
      <aside className="hidden lg:sticky lg:top-8 lg:z-auto lg:block lg:h-fit">
        <nav
          aria-label={t("settings.sectionsNavLabel")}
          className="flex flex-col gap-1"
        >
          {settingsSections.map((item) => {
            const isActive = activeId === item.id

            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`flex h-10 w-full items-center gap-2.5 rounded-lg px-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-muted font-semibold text-foreground"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                }`}
              >
                <HugeiconsIcon icon={item.icon} className="size-4 shrink-0" />
                <span className="whitespace-nowrap">
                  {t(`settings.sections.${item.id}`)}
                </span>
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}

export default SettingsSidebar
