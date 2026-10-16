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
import { useT } from "@/lib/i18n"
import ShortcutRow from "./ShortcutRow"

export default function KeyboardShortcutsDialog() {
  const t = useT()
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
        <DialogHeader className="relative gap-0 p-6 pb-5">
          <DialogTitle className="text-lg font-semibold tracking-tight">
            {t("app.shortcuts.title")}
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            {t("app.shortcuts.description")}
          </DialogDescription>
        </DialogHeader>

        <Separator className="bg-border/40" />

        <div className="max-h-[60vh] space-y-6 overflow-y-auto px-4 py-4">
          {SHORTCUT_GROUPS.map((group) => (
            <div key={group.categoryKey} className="space-y-2">
              <p className="px-3 text-[11px] font-bold tracking-wider text-muted-foreground/80 uppercase">
                {t(group.categoryKey)}
              </p>
              <div className="my-0.5 space-y-0">
                {group.items.map((item, i) => (
                  <div key={item.labelKey}>
                    <ShortcutRow
                      key={item.labelKey}
                      label={t(item.labelKey)}
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
            {t("app.shortcuts.editorHint")}
          </span>
        </div>
      </DialogContent>
    </Dialog>
  )
}
