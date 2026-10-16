import { HugeiconsIcon } from "@hugeicons/react"
import { File02Icon } from "@hugeicons/core-free-icons"
import { getI18n } from "@/lib/i18n/server"
import { initialHistory } from "../constants"

const HistoryHeader = async () => {
  const { t } = await getI18n()
  const count = initialHistory.length

  return (
    <header className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
      <div className="space-y-2">
        <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
          {t("history.header.eyebrow")}
        </p>

        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {t("history.header.title")}
          <span className="text-primary">.</span>
        </h1>

        <p className="max-w-lg text-sm leading-6 text-muted-foreground">
          {t("history.header.description")}
        </p>
      </div>

      <div className="flex items-center gap-2 self-start rounded-xl border bg-card px-3.5 py-2.5 text-sm sm:self-auto">
        <HugeiconsIcon
          icon={File02Icon}
          className="size-4 text-muted-foreground"
        />
        <span className="font-medium">{count}</span>
        <span className="text-muted-foreground">
          {count === 1
            ? t("history.header.itemsOne", { count })
            : t("history.header.itemsOther", { count })}
        </span>
      </div>
    </header>
  )
}

export default HistoryHeader
