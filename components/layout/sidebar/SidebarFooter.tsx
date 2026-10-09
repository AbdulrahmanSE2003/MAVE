"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { MoreHorizontal, Question } from "@hugeicons/core-free-icons"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { cn } from "cn"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Kbd } from "@/components/ui/kbd"

const SidebarFooter = ({
  isOpen,
  openShortcuts,
}: {
  isOpen: boolean
  openShortcuts: () => void
}) => {
  return (
    <div className={`flex flex-col gap-1.5`}>
      <Separator className="my-1 mt-2" />

      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            onClick={openShortcuts}
            className={cn(
              "h-10 w-full rounded-lg text-muted-foreground transition-colors",
              "hover:bg-muted hover:text-foreground",
              isOpen ? "justify-start gap-3 px-3" : "justify-center px-0"
            )}
          >
            <HugeiconsIcon icon={Question} className="size-5 shrink-0" />

            {isOpen && (
              <>
                <span className="flex-1 text-left text-sm">
                  Keyboard shortcuts
                </span>
              </>
            )}
          </Button>
        </TooltipTrigger>

        {!isOpen && (
          <TooltipContent side="right">
            Keyboard shortcuts <Kbd>F1</Kbd>
          </TooltipContent>
        )}
      </Tooltip>

      <Button
        variant="outline"
        className={cn(
          "p-3 py-5.5",
          "transition-colors hover:translate-0 hover:bg-muted/50",
          isOpen ? "justify-start gap-3" : "justify-center"
        )}
      >
        <Avatar className="size-7 shrink-0 rounded-lg">
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="Abdulrahman Saad"
            className="rounded-lg"
          />
          <AvatarFallback className="rounded-lg text-xs font-medium">
            AS
          </AvatarFallback>
        </Avatar>

        {isOpen && (
          <div className="flex min-w-0 flex-1 flex-col items-start gap-1">
            <span className="w-full truncate text-sm font-medium text-foreground">
              Abdulrahman Saad
            </span>
            <span className="text-xs text-muted-foreground">Beta user</span>
          </div>
        )}
      </Button>
    </div>
  )
}

export default SidebarFooter
