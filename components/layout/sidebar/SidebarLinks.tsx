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
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { cn } from "cn"
import Link from "next/link"
import { usePathname } from "next/navigation"
const links = [
  { label: "Home", icon: Home01Icon, href: "/app" },
  { label: "Write", icon: PencilEdit01Icon, href: "/app/write" },
  { label: "Visuals", icon: Image01Icon, href: "/app/visuals" },
  { label: "Settings", icon: Settings02Icon, href: "/app/settings" },
]

const SidebarLinks = ({ isOpen }: { isOpen: boolean }) => {
  const pathname = usePathname()

  return (
    <nav className="mt-8 flex flex-1 flex-col gap-3">
      {links.map((l) => {
        const isActive = l.href === pathname
        const isSettings = l.label === "Settings"

        const linkContent = (
          <Link
            key={l.label}
            href={l.href}
            className={cn(
              "flex items-center gap-3 rounded-md p-2.5 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:bg-primary/65 hover:text-foreground",
              isActive && "bg-primary/65 text-foreground",
              isSettings && "mt-auto",
              !isOpen && "justify-center px-0"
            )}
          >
            <HugeiconsIcon icon={l.icon} className="size-5 shrink-0" />
            {isOpen && <span className="truncate">{l.label}</span>}
          </Link>
        )

        if (isOpen) {
          return <>{linkContent}</>
        }

        return (
          <Tooltip key={l.label} delayDuration={0}>
            <TooltipTrigger asChild>{linkContent}</TooltipTrigger>
            <TooltipContent side="right">
              <p>{l.label}</p>
            </TooltipContent>
          </Tooltip>
        )
      })}
    </nav>
  )
}

export default SidebarLinks
