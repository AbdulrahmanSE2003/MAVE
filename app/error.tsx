"use client"

import { Button } from "@/components/ui/button"
import { Alert01Icon, Refresh01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

type ErrorStateProps = {
  title?: string
  description?: string
  onRetry?: () => void
  retryLabel?: string
}

export default function Error({
  title = "Something went wrong",
  description = "We couldn't load this page. Please try again.",
  onRetry,
  retryLabel = "Try again",
}: ErrorStateProps) {
  return (
    <section
      role="alert"
      className="flex min-h-[50svh] flex-col items-center justify-center px-6 py-12 text-center"
    >
      <div className="mb-5 flex size-14 items-center justify-center rounded-2xl border border-border bg-background">
        <HugeiconsIcon
          icon={Alert01Icon}
          aria-hidden="true"
          className="size-6 text-destructive"
        />
      </div>

      <h1 className="text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h1>

      <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
        {description}
      </p>

      {onRetry && (
        <Button onClick={onRetry} className="mt-6 gap-2">
          <HugeiconsIcon
            icon={Refresh01Icon}
            aria-hidden="true"
            className="size-4"
          />
          {retryLabel}
        </Button>
      )}
    </section>
  )
}
