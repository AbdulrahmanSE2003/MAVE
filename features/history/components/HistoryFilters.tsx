import { HugeiconsIcon } from "@hugeicons/react"
import { FilterHorizontalIcon, Search01Icon } from "@hugeicons/core-free-icons"
import { useT } from "@/lib/i18n"
import { HistoryFilter } from "../types"
import { filters } from "../constants"
import { Input } from "@/components/ui/input"

type HistoryFiltersProps = {
  search: string
  onSearchChange: (value: string) => void
  activeFilter: HistoryFilter
  onFilterChange: (value: HistoryFilter) => void
  resultCount: number
  isFiltering: boolean
}

const HistoryFilters = ({
  search,
  onSearchChange,
  activeFilter,
  onFilterChange,
  resultCount,
  isFiltering,
}: HistoryFiltersProps) => {
  const t = useT()

  return (
    <section className="mb-3 w-full space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative min-w-0 flex-1">
          <HugeiconsIcon
            icon={Search01Icon}
            className="pointer-events-none absolute inset-e-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          />

          <Input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder={t("history.filters.searchPlaceholder")}
            aria-label={t("history.filters.searchAriaLabel")}
          />
        </div>

        <div className="flex items-center gap-1.5 self-start rounded-xl border bg-card p-1 sm:self-auto">
          <HugeiconsIcon
            icon={FilterHorizontalIcon}
            className="ms-2 size-4 text-muted-foreground"
          />

          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => onFilterChange(filter)}
              aria-pressed={activeFilter === filter}
              className={`rounded-lg px-3 py-2 text-xs font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {t(
                `history.filters.${filter === "images" ? "visual" : filter}`
              )}{" "}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          {isFiltering
            ? resultCount === 1
              ? t("history.filters.resultsOne", { count: resultCount })
              : t("history.filters.resultsOther", { count: resultCount })
            : t("history.filters.recentlyGenerated")}
        </p>

        <span className="text-xs text-muted-foreground">
          {t("history.filters.newestFirst")}
        </span>
      </div>
    </section>
  )
}

export default HistoryFilters
