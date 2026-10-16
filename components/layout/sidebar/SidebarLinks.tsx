"use client"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Home01Icon,
  Image01Icon,
  PencilEdit01Icon,
  Settings02Icon,
  TimeHalfPassIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { cn } from "cn"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useT } from "@/lib/i18n"
import type { TranslationKey } from "@/lib/i18n/translator"
import type { ComponentProps } from "react"

const links: {
  labelKey: TranslationKey
  icon: ComponentProps<typeof HugeiconsIcon>["icon"]
  href: string
}[] = [
  { labelKey: "app.sidebar.nav.home", icon: Home01Icon, href: "/app" },
  {
    labelKey: "app.sidebar.nav.write",
    icon: PencilEdit01Icon,
    href: "/app/write",
  },
  {
    labelKey: "app.sidebar.nav.visuals",
    icon: Image01Icon,
    href: "/app/visuals",
  },
  {
    labelKey: "app.sidebar.nav.history",
    icon: TimeHalfPassIcon,
    href: "/app/history",
  },
  {
    labelKey: "app.sidebar.nav.settings",
    icon: Settings02Icon,
    href: "/app/settings",
  },
]

const SidebarLinks = ({ isOpen }: { isOpen: boolean }) => {
  const pathname = usePathname()
  const t = useT()

  return (
    <nav className="mt-8 flex flex-1 flex-col gap-3">
      {links.map((l) => {
        const isActive = l.href === pathname
        const isSettings = l.href === "/app/settings"

        const linkContent = (
          <Link
            key={l.labelKey}
            href={l.href}
            className={cn(
              "flex items-center gap-3 rounded-md p-2.5 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:bg-primary/65 hover:text-foreground",
              isActive && "bg-primary/65 text-foreground",
              isSettings && "mt-auto",
              !isOpen && "justify-center px-0"
            )}
          >
            <HugeiconsIcon icon={l.icon} className="size-5 shrink-0" />
            {isOpen && <span className="truncate">{t(l.labelKey)}</span>}
          </Link>
        )

        // Return the Link directly if open, bypassing the unnecessary Fragment
        if (isOpen) {
          return linkContent
        }

        // Return the Tooltip when closed (Tooltip has the key)
        return (
          <Tooltip key={l.labelKey} delayDuration={0}>
            <TooltipTrigger asChild>{linkContent}</TooltipTrigger>
            <TooltipContent side="right">
              <p>{t(l.labelKey)}</p>
            </TooltipContent>
          </Tooltip>
        )
      })}
    </nav>
  )
}

export default SidebarLinks
