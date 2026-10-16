import { HugeiconsIcon } from "@hugeicons/react"
import { Search01Icon } from "@hugeicons/core-free-icons"

type HistoryEmptyProps = {
  hasItems: boolean
  onClearFilters: () => void
}

const HistoryEmpty = ({ hasItems, onClearFilters }: HistoryEmptyProps) => {
  return (
    <section className="flex min-h-72 flex-col items-center justify-center rounded-2xl border border-dashed px-6 py-12 text-center">
      <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-muted">
        <HugeiconsIcon
          icon={Search01Icon}
          className="size-5 text-muted-foreground"
        />
      </div>

      <h2 className="text-base font-semibold">Nothing found</h2>

      <p className="mt-1.5 max-w-sm text-sm leading-6 text-muted-foreground">
        {hasItems
          ? "Try another search or switch the platform filter to find what you're looking for."
          : "Your history is clear. Generated content will appear here once it is saved."}
      </p>

      <button
        type="button"
        onClick={onClearFilters}
        className="mt-4 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
      >
        Clear filters
      </button>
    </section>
  )
}

export default HistoryEmpty
