"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Loading03Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useState } from "react"

type ConfirmationDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description: string
  confirmLabel: string
  confirmingLabel: string
  cancelLabel: string
  onConfirm: () => Promise<void>
  variant?: "default" | "destructive"
}
export function ConfirmationDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel,
  confirmingLabel,
  cancelLabel,
  onConfirm,
  variant = "destructive",
}: ConfirmationDialogProps) {
  const [isActing, setIsActing] = useState(false)

  const handleClick = async () => {
    if (isActing) return

    setIsActing(true)

    try {
      await onConfirm()
    } finally {
      setIsActing(false)
    }
  }
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isActing}>
            {cancelLabel}
          </AlertDialogCancel>
          <AlertDialogAction
            variant={variant}
            onClick={(event) => {
              event.preventDefault()
              void handleClick()
            }}
            disabled={isActing}
          >
            {isActing ? confirmingLabel : confirmLabel}
            {isActing && (
              <HugeiconsIcon icon={Loading03Icon} className={`animate-spin`} />
            )}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
