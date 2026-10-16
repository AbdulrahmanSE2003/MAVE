"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  FileAddFreeIcons,
  ImagePlus,
  Sun02Icon,
  Moon02Icon,
  ComputerIcon,
} from "@hugeicons/core-free-icons"
import { navigationItems } from "@/features/app/constants"
import { useT } from "@/lib/i18n"

export function CommandMenu() {
  const t = useT()
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const isShortcut =
        (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k"

      if (!isShortcut || event.repeat) return

      event.preventDefault()
      setOpen((current) => !current)
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  function navigateTo(href: string) {
    setOpen(false)
    router.push(href)
  }

  function changeTheme(value: "light" | "dark" | "system") {
    setOpen(false)
    setTheme(value)
  }

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      title={t("app.commandMenu.title")}
      description={t("app.commandMenu.description")}
      className="rounded-md bg-popover"
    >
      <Command>
        <CommandInput placeholder={t("app.commandMenu.placeholder")} />

        <CommandList>
          <CommandEmpty>{t("app.commandMenu.empty")}</CommandEmpty>

          <CommandGroup heading={t("app.commandMenu.groups.navigation")}>
            {navigationItems.map((item) => (
              <CommandItem
                key={item.href}
                value={`${t(item.labelKey)} ${item.keywords}`}
                onSelect={() => navigateTo(item.href)}
              >
                <HugeiconsIcon icon={item.icon} className="me-2 size-4" />
                <span>{t(item.labelKey)}</span>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandGroup heading={t("app.commandMenu.groups.create")}>
            <CommandItem
              value="Create LinkedIn post write generate content لينكدإن منشور"
              onSelect={() => navigateTo("/app/write?platform=linkedin")}
            >
              <HugeiconsIcon icon={FileAddFreeIcons} className="me-2 size-4" />
              <span>{t("app.commandMenu.actions.createLinkedinPost")}</span>
            </CommandItem>

            <CommandItem
              value="Create Instagram caption write generate content انستجرام كابشن"
              onSelect={() => navigateTo("/app/write?platform=instagram")}
            >
              <HugeiconsIcon icon={FileAddFreeIcons} className="me-2 size-4" />
              <span>{t("app.commandMenu.actions.createInstagramCaption")}</span>
            </CommandItem>

            <CommandItem
              value="Generate a visual image picture artwork توليد صورة"
              onSelect={() => navigateTo("/app/visual")}
            >
              <HugeiconsIcon icon={ImagePlus} className="me-2 size-4" />
              <span>{t("app.commandMenu.actions.generateVisual")}</span>
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading={t("app.commandMenu.groups.appearance")}>
            <CommandItem
              value="Light theme mode appearance فاتح نهار"
              onSelect={() => changeTheme("light")}
            >
              <HugeiconsIcon icon={Sun02Icon} className="me-2 size-4" />
              <span>{t("app.commandMenu.actions.switchToLightTheme")}</span>
            </CommandItem>

            <CommandItem
              value="Dark theme mode appearance داكن night"
              onSelect={() => changeTheme("dark")}
            >
              <HugeiconsIcon icon={Moon02Icon} className="me-2 size-4" />
              <span>{t("app.commandMenu.actions.switchToDarkTheme")}</span>
            </CommandItem>

            <CommandItem
              value="System theme automatic appearance النظام"
              onSelect={() => changeTheme("system")}
            >
              <HugeiconsIcon icon={ComputerIcon} className="me-2 size-4" />
              <span>{t("app.commandMenu.actions.useSystemTheme")}</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  )
}
