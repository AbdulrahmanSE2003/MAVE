import { PencilEdit01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { getI18n } from "@/lib/i18n/server"

const EmptyPostsState = async () => {
  const { t } = await getI18n()

  return (
    <div className="mt-2 flex h-full w-full flex-col items-center justify-center gap-3 rounded-md border border-dashed border-border bg-muted-foreground/5 p-8 text-center">
      <div className="flex size-12 items-center justify-center rounded-full border border-border bg-background shadow-sm">
        <HugeiconsIcon
          icon={PencilEdit01Icon}
          className="size-6 text-muted-foreground"
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-semibold">
          {t("app.dashboard.emptyState.title")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {t("app.dashboard.emptyState.description")}
        </p>
      </div>
    </div>
  )
}

export default EmptyPostsState
