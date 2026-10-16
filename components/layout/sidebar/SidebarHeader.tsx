"use client"

import Logo from "@/components/layout/Logo"
import {
  SidebarLeft01Icon,
  SidebarRight01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { useT } from "@/lib/i18n"

const SidebarHeader = ({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean
  toggleSidebar: () => void
}) => {
  const t = useT()

  return (
    <div
      className={cn(
        "flex items-center",
        isOpen ? "justify-between px-2" : "justify-center"
      )}
    >
      {isOpen && <Logo className={`${isOpen ? "truncate" : ""}`} />}
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={toggleSidebar}
            variant="invisible"
            size="icon"
            aria-label={t("app.sidebar.toggleSidebar")}
            className={`opacity-85 transition-opacity duration-150 hover:translate-0 hover:opacity-100`}
          >
            {!isOpen ? (
              <HugeiconsIcon icon={SidebarRight01Icon} className="size-5" />
            ) : (
              <HugeiconsIcon icon={SidebarLeft01Icon} className="size-5" />
            )}{" "}
          </Button>
        </TooltipTrigger>

        <TooltipContent side="right" className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span>{t("app.sidebar.toggleSidebar")}</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <span>+</span>
              <Kbd>\</Kbd>
            </KbdGroup>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

export default SidebarHeader
