"use client"

import {
  ArrowUpRight,
  MoreHorizontal,
  Search,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useMemo, useState } from "react"
import { useT } from "@/lib/i18n"
import { filters, visuals } from "../constants"

const VisualContent = () => {
  const t = useT()
  const [query, setQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("All visuals")

  const filteredVisuals = useMemo(() => {
    return visuals.filter((visual) => {
      const matchesQuery =
        `${t(visual.title)} ${visual.platform} ${t(visual.category)}`
          .toLowerCase()
          .includes(query.toLowerCase())

      const matchesFilter =
        activeFilter === "All visuals" ||
        activeFilter === "Saved" ||
        visual.platform === activeFilter

      return matchesQuery && matchesFilter
    })
  }, [query, activeFilter, t])

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-lg px-3 py-2 text-sm transition-colors ${
              activeFilter === filter
                ? "bg-foreground text-background"
                : "border border-border text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            {filter === "All visuals"
              ? t("visuals.filters.allVisuals")
              : filter === "Saved"
                ? t("visuals.filters.saved")
                : filter}
          </button>
        ))}
      </div>

      {filteredVisuals.length > 0 ? (
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredVisuals.map((visual) => (
            <article key={visual.id} className="group min-w-0">
              <div
                className="relative aspect-4/5 overflow-hidden rounded-xl border border-border/60 p-5 transition-transform duration-200 group-hover:-translate-y-1 sm:p-6"
                style={{
                  backgroundColor: visual.background,
                  color: visual.foreground,
                }}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-semibold tracking-[0.16em]">
                    {t(visual.eyebrow)}
                  </span>
                  <span
                    className="size-3 shrink-0 rounded-full"
                    style={{ backgroundColor: visual.accent }}
                  />
                </div>

                <div className="absolute inset-x-5 top-[35%] space-y-4 sm:inset-x-6">
                  <h2 className="text-3xl leading-[1.12] font-semibold tracking-tight whitespace-pre-line sm:text-4xl">
                    {t(visual.headline)}
                  </h2>

                  <div
                    className="h-1 w-12 rounded-full"
                    style={{ backgroundColor: visual.accent }}
                  />
                </div>

                <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-2 sm:inset-x-6 sm:bottom-6">
                  <span className="truncate text-[10px] font-medium tracking-wide">
                    {t(visual.footer)}
                  </span>
                  <HugeiconsIcon
                    icon={ArrowUpRight}
                    className="size-4 shrink-0"
                  />
                </div>

                <button
                  type="button"
                  disabled
                  aria-label={t("visuals.card.moreOptionsAriaLabel", {
                    title: t(visual.title),
                  })}
                  className="absolute end-3 top-3 flex size-8 items-center justify-center rounded-lg bg-background/70 text-foreground opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <HugeiconsIcon icon={MoreHorizontal} className="size-4" />
                </button>
              </div>

              <div className="flex items-start justify-between gap-3 pt-3">
                <div className="min-w-0 space-y-1">
                  <h3 className="truncate text-sm font-medium">
                    {t(visual.title)}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {visual.platform} · {visual.format}
                  </p>
                </div>

                <span className="shrink-0 rounded-md border px-2 py-1 text-[10px] text-muted-foreground">
                  {t(visual.category)}
                </span>
              </div>
            </article>
          ))}
        </section>
      ) : (
        <div className="flex min-h-64 flex-col items-center justify-center rounded-xl border border-dashed px-6 text-center">
          <div className="mb-3 flex size-11 items-center justify-center rounded-xl bg-muted">
            <HugeiconsIcon
              icon={Search}
              className="size-4 text-muted-foreground"
            />
          </div>
          <h2 className="font-medium">{t("visuals.empty.title")}</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {t("visuals.empty.description")}
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("")
              setActiveFilter("All visuals")
            }}
            className="mt-4 text-sm font-medium underline underline-offset-4"
          >
            {t("visuals.empty.clearFilters")}
          </button>
        </div>
      )}
    </>
  )
}

export default VisualContent
