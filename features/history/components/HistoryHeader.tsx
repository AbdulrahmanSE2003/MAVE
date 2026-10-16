import { HugeiconsIcon } from "@hugeicons/react"
import { File02Icon } from "@hugeicons/core-free-icons"
import { initialHistory } from "../constants"

const HistoryHeader = () => {
  const count = initialHistory.length

  return (
    <header className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
      <div className="space-y-2">
        <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
          Your workspace / History
        </p>

        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          History<span className="text-primary">.</span>
        </h1>

        <p className="max-w-lg text-sm leading-6 text-muted-foreground">
          Every idea you&apos;ve turned into content, all in one place.
        </p>
      </div>

      <div className="flex items-center gap-2 self-start rounded-xl border bg-card px-3.5 py-2.5 text-sm sm:self-auto">
        <HugeiconsIcon
          icon={File02Icon}
          className="size-4 text-muted-foreground"
        />
        <span className="font-medium">{count}</span>
        <span className="text-muted-foreground">
          {count === 1 ? "item" : "items"}
        </span>
      </div>
    </header>
  )
}

export default HistoryHeader
