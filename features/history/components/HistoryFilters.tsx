import { HugeiconsIcon } from "@hugeicons/react"
import { FilterHorizontalIcon, Search01Icon } from "@hugeicons/core-free-icons"
import { filters } from "../constants"
import { Filter } from "../types"

type HistoryFiltersProps = {
  search: string
  onSearchChange: (value: string) => void
  activeFilter: Filter
  onFilterChange: (value: Filter) => void
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
  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative min-w-0 flex-1">
          <HugeiconsIcon
            icon={Search01Icon}
            className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground"
          />

          <input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search your content..."
            aria-label="Search history"
            className="h-11 w-full rounded-xl border bg-background pr-4 pl-10 text-sm transition-colors outline-none placeholder:text-muted-foreground focus:border-primary"
          />
        </div>

        <div className="flex items-center gap-1.5 self-start rounded-xl border bg-card p-1 sm:self-auto">
          <HugeiconsIcon
            icon={FilterHorizontalIcon}
            className="ml-2 size-4 text-muted-foreground"
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
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          {isFiltering ? `${resultCount} results` : "Recently generated"}
        </p>

        <span className="text-xs text-muted-foreground">Newest first</span>
      </div>
    </section>
  )
}

export default HistoryFilters
