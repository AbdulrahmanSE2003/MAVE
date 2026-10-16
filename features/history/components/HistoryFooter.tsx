import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons"

const HistoryFooter = () => {
  return (
    <footer className="flex items-start gap-2 border-t pt-5 text-xs leading-5 text-muted-foreground">
      <HugeiconsIcon
        icon={ArrowUpRight01Icon}
        className="mt-0.5 size-4 shrink-0"
      />
      <p>
        This is a UI preview using sample entries. History will need to be
        connected to your saved generations to persist between sessions.
      </p>
    </footer>
  )
}

export default HistoryFooter
