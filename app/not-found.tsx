"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search01Icon, ArrowLeft01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

type NotFoundProps = {
  title?: string
  description?: string
  homeLabel?: string
  homeHref?: string
}

export default function NotFound({
  title = "Page not found",
  description = "The page you're looking for doesn't exist or may have been moved.",
  homeLabel = "Back to home",
  homeHref = "/",
}: NotFoundProps) {
  return (
    <section
      role="status"
      className="flex min-h-svh flex-col items-center justify-center px-6 py-12 text-center"
    >
      <div className="mb-5 flex size-14 items-center justify-center rounded-2xl border border-border bg-background">
        <HugeiconsIcon
          icon={Search01Icon}
          aria-hidden="true"
          className="size-6 text-muted-foreground"
        />
      </div>

      <p className="mb-2 text-sm font-medium tracking-widest text-muted-foreground">
        404
      </p>

      <h1 className="text-xl font-semibold tracking-tight text-foreground">
        {title}
      </h1>

      <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
        {description}
      </p>

      <Button asChild className="mt-6 gap-2">
        <Link href={homeHref}>
          <HugeiconsIcon
            icon={ArrowLeft01Icon}
            aria-hidden="true"
            className="size-4"
          />
          {homeLabel}
        </Link>
      </Button>
    </section>
  )
}
