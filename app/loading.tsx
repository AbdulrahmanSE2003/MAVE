import { Loading03Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

type LoadingStateProps = {
  label?: string
  description?: string
}

export default function Loading({
  label = "Getting things ready",
  description = "Preparing your workspace...",
}: LoadingStateProps) {
  return (
    <section
      role="status"
      aria-live="polite"
      className="flex min-h-screen flex-col items-center justify-center px-6 py-12 text-center"
    >
      <HugeiconsIcon
        icon={Loading03Icon}
        aria-hidden="true"
        className="mb-5 size-8 animate-spin text-foreground motion-reduce:animate-none"
      />

      <h1 className="text-lg font-semibold tracking-tight text-foreground">
        {label}
      </h1>

      <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </section>
  )
}
