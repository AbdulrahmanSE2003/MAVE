"use client"

import { useEffect } from "react"
import { useSidebar } from "@/components/SidebarProvider"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { SHORTCUT_GROUPS } from "@/features/app/constants"
import ShortcutRow from "./ShortcutRow"

export default function KeyboardShortcutsDialog() {
  const { shortcutsOpen, openShortcuts, closeShortcuts } = useSidebar()

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "F1" || event.repeat) return

      event.preventDefault()
      if (shortcutsOpen) {
        closeShortcuts()
      } else {
        openShortcuts()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [shortcutsOpen, openShortcuts, closeShortcuts])

  return (
    <Dialog
      open={shortcutsOpen}
      onOpenChange={(open) => (open ? openShortcuts() : closeShortcuts())}
    >
      <DialogContent className="gap-0 overflow-hidden border-border/60 bg-background/95 p-0 shadow-2xl sm:max-w-lg">
        <DialogHeader className="relative p-6 pb-5">
          <DialogTitle className="text-lg font-semibold tracking-tight">
            Keyboard shortcuts
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            Speed up your workflow across MAVE.
          </DialogDescription>
        </DialogHeader>

        <Separator className="bg-border/40" />

        <div className="max-h-[60vh] space-y-6 overflow-y-auto px-4 py-4">
          {SHORTCUT_GROUPS.map((group) => (
            <div key={group.category} className="space-y-2">
              <p className="px-3 text-[11px] font-bold tracking-wider text-muted-foreground/80 uppercase">
                {group.category}
              </p>
              <div className="space-y-1">
                {group.items.map((item, i) => (
                  <div key={item.label}>
                    <ShortcutRow
                      key={item.label}
                      label={item.label}
                      keys={item.keys}
                    />
                    {i !== group.items.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Separator className="bg-border/40" />

        <div className="flex items-center justify-between bg-muted/20 px-6 py-3">
          <span className="text-xs text-muted-foreground/80">
            More shortcuts arriving soon
          </span>
        </div>
      </DialogContent>
    </Dialog>
  )
}
