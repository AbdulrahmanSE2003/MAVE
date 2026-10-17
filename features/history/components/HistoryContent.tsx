"use client"

import { useMemo, useState } from "react"
import { useT } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { Loading03Icon } from "@hugeicons/core-free-icons"
import { toast } from "sonner"

import HistoryEmpty from "./HistoryEmpty"
import HistoryFilters from "./HistoryFilters"
import HistoryList from "./HistoryList"
import { getHistory } from "../actions"
import { HistoryCardData, HistoryCursor, HistoryFilter } from "../types"
import { htmlToPlainText } from "@/features/app/utils"

type Props = {
  history: HistoryCardData[]
  hasMore: boolean
  nextCursor?: HistoryCursor
}

const HistoryContent = ({
  history,
  hasMore: initialHasMore,
  nextCursor: initialCursor,
}: Props) => {
  const t = useT()

  const [items, setItems] = useState(history)
  const [hasMore, setHasMore] = useState(initialHasMore)
  const [cursor, setCursor] = useState<HistoryCursor | undefined>(initialCursor)
  const [search, setSearch] = useState("")
  const [activeFilter, setActiveFilter] = useState<HistoryFilter>("all")
  const [isGettingMore, setIsGettingMore] = useState(false)

  const handleShowMore = async () => {
    if (isGettingMore || !hasMore) return

    setIsGettingMore(true)

    try {
      const result = await getHistory(cursor)

      if (!result.success) {
        toast.error(result.error)
        return
      }

      setItems((current) => {
        const existing = new Set(
          current.map((item) => `${item.historyType}:${item.id}`)
        )

        const newItems = result.data.filter(
          (item) => !existing.has(`${item.historyType}:${item.id}`)
        )

        return [...current, ...newItems].sort((a, b) => {
          const dateDifference = b.createdAt.getTime() - a.createdAt.getTime()

          return dateDifference || b.id.localeCompare(a.id)
        })
      })

      setCursor(result.nextCursor)
      setHasMore(result.hasMore)
    } catch {
      toast.error(t("history.errors.fetchFailed"))
    } finally {
      setIsGettingMore(false)
    }
  }

  const filteredHistory = useMemo(() => {
    const query = search.trim().toLowerCase()

    return items.filter((item) => {
      const matchesType =
        activeFilter === "all" ||
        (activeFilter === "posts" && item.historyType === "post") ||
        (activeFilter === "images" && item.historyType === "visual")

      if (!matchesType) return false
      if (!query) return true

      const ideaMatches = item.idea.toLowerCase().includes(query)
      const contentMatches =
        item.historyType === "post" &&
        htmlToPlainText(item.content).toLowerCase().includes(query)

      return ideaMatches || contentMatches
    })
  }, [items, activeFilter, search])

  const isFiltering = activeFilter !== "all" || search.trim() !== ""

  return (
    <>
      <HistoryFilters
        search={search}
        onSearchChange={setSearch}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        resultCount={filteredHistory.length}
        isFiltering={isFiltering}
      />

      {filteredHistory.length > 0 ? (
        <HistoryList items={filteredHistory} />
      ) : (
        <HistoryEmpty
          hasItems={items.length > 0}
          onClearFilters={() => {
            setSearch("")
            setActiveFilter("all")
          }}
        />
      )}

      {hasMore && !isFiltering && (
        <Button
          variant="outline"
          size="lg"
          className="mt-5 self-center px-4.5 py-5"
          disabled={isGettingMore}
          onClick={handleShowMore}
        >
          {isGettingMore ? t("history.loadingMore") : t("history.showMore")}

          {isGettingMore && (
            <HugeiconsIcon icon={Loading03Icon} className="animate-spin" />
          )}
        </Button>
      )}
    </>
  )
}

export default HistoryContent
