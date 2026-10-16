"use client"

import { Button } from "@/components/ui/button"
import { Alert01Icon, Refresh01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useT } from "@/lib/i18n"

type ErrorStateProps = {
  title?: string
  description?: string
  onRetry?: () => void
  retryLabel?: string
}

export default function Error({
  title,
  description,
  onRetry,
  retryLabel,
}: ErrorStateProps) {
  const t = useT()

  const resolvedTitle = title ?? t("errors.error.title")
  const resolvedDescription = description ?? t("errors.error.description")
  const resolvedRetryLabel = retryLabel ?? t("errors.error.retry")

  return (
    <section
      role="alert"
      className="flex min-h-svh flex-col items-center justify-center px-6 py-12 text-center"
    >
      <div className="mb-5 flex size-14 items-center justify-center rounded-2xl border border-border bg-background">
        <HugeiconsIcon
          icon={Alert01Icon}
          aria-hidden="true"
          className="size-6 text-destructive"
        />
      </div>

      <h1 className="text-xl font-semibold tracking-tight text-foreground">
        {resolvedTitle}
      </h1>

      <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
        {resolvedDescription}
      </p>

      {onRetry && (
        <Button onClick={onRetry} className="mt-6 gap-2">
          <HugeiconsIcon
            icon={Refresh01Icon}
            aria-hidden="true"
            className="size-4"
          />
          {resolvedRetryLabel}
        </Button>
      )}
    </section>
  )
}
