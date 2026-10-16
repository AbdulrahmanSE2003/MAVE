import { ImagePlus } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useT } from "@/lib/i18n"

const VisualsHeader = () => {
  const t = useT()

  return (
    <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="space-y-2">
        <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
          {t("visuals.header.eyebrow")}
        </p>

        <h1 className="text-3xl font-semibold tracking-tight">
          {t("visuals.header.title")}
        </h1>

        <p className="max-w-lg text-sm leading-6 text-muted-foreground">
          {t("visuals.header.description")}
        </p>
      </div>

      <button
        type="button"
        disabled
        title={t("visuals.header.createUnavailableTitle")}
        className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground opacity-70"
      >
        <HugeiconsIcon icon={ImagePlus} />
        {t("visuals.header.createVisual")}
        <span className="text-xs opacity-70">
          {t("common.status.comingSoon")}
        </span>
      </button>
    </header>
  )
}

export default VisualsHeader
