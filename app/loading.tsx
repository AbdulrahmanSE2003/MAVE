import { Loading03Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { getI18n } from "@/lib/i18n/server"

type LoadingStateProps = {
  label?: string
  description?: string
}

export default async function Loading({
  label,
  description,
}: LoadingStateProps) {
  const { t } = await getI18n()

  const resolvedLabel = label ?? t("errors.loading.label")
  const resolvedDescription = description ?? t("errors.loading.description")

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
        {resolvedLabel}
      </h1>

      <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
        {resolvedDescription}
      </p>
    </section>
  )
}
