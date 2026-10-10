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

const SidebarHeader = ({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean
  toggleSidebar: () => void
}) => {
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
            aria-label="Toggle Sidebar"
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
            <span>Toggle Sidebar</span>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <Kbd>B</Kbd>
            </KbdGroup>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

export default SidebarHeader
