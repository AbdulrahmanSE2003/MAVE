"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  KeyboardIcon,
  Logout01Icon,
  UserCircleIcon,
} from "@hugeicons/core-free-icons"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { cn } from "cn"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User } from "@/features/app/types"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const SidebarFooter = ({
  isOpen,
  openShortcuts,
  user,
}: {
  isOpen: boolean
  openShortcuts: () => void
  user: User
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      <Separator className="my-1 mt-2" />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "",
              "transition-colors hover:translate-0 hover:bg-muted/50",
              isOpen ? "justify-start p-3 py-5.5" : "justify-center p-px"
            )}
          >
            <div
              className={cn(
                "flex w-full min-w-0 items-center",
                isOpen ? "gap-3" : "justify-center"
              )}
            >
              <Avatar className="size-6 shrink-0 rounded-md">
                <AvatarImage
                  src={user?.image ?? ""}
                  alt={user.name}
                  className="rounded-lg"
                />
                <AvatarFallback className="rounded-lg text-xs font-medium uppercase">
                  {user.name.slice(0, 2)}
                </AvatarFallback>
              </Avatar>

              {isOpen && (
                <div className="flex min-w-0 flex-1 flex-col items-start gap-0">
                  <span className="w-full truncate text-start text-xs font-medium text-foreground">
                    {user.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Beta user
                  </span>
                </div>
              )}
            </div>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className={`w-56`}
          side="right"
          align={"end"}
          sideOffset={12}
        >
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium">{user.name}</span>
              <span className="text-xs text-muted-foreground">
                {user.email}
              </span>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem disabled>
              <HugeiconsIcon icon={UserCircleIcon} className="mr-2 size-4" />
              Profile
              <span className="ml-auto text-xs text-muted-foreground">
                Soon
              </span>
            </DropdownMenuItem>

            <DropdownMenuItem onSelect={openShortcuts}>
              <HugeiconsIcon icon={KeyboardIcon} className="mr-2 size-4" />
              Keyboard shortcuts
              <span className="ml-auto text-xs text-muted-foreground">F1</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuItem variant="destructive" disabled>
            <HugeiconsIcon icon={Logout01Icon} className="mr-2 size-4" />
            Log out
            <span className="ml-auto text-xs text-muted-foreground">Soon</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default SidebarFooter
