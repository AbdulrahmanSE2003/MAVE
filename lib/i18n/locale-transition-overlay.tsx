"use client"

import { Loading03Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

/**
 * Full-screen, non-dismissible overlay shown while a locale change is in
 * flight. It is a controlled modal Dialog, so it blocks interaction with the
 * rest of the page. Escape and outside clicks are prevented, and there is no
 * close button: the only way out is the provider clearing `open` once the new
 * locale is applied (or a rollback).
 */
export function LocaleTransitionOverlay({
  open,
  message,
}: {
  open: boolean
  message: string
}) {
  return (
    <Dialog open={open}>
      <DialogContent
        showCloseButton={false}
        aria-describedby={undefined}
        onInteractOutside={(event) => event.preventDefault()}
        onEscapeKeyDown={(event) => event.preventDefault()}
        className="max-w-xs"
      >
        <DialogHeader>
          <div
            role="status"
            aria-live="polite"
            className="flex flex-col items-center gap-3 text-center"
          >
            <HugeiconsIcon
              icon={Loading03Icon}
              aria-hidden="true"
              className="size-6 animate-spin text-foreground motion-reduce:animate-none"
            />
            <DialogTitle className="text-sm font-medium">{message}</DialogTitle>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
