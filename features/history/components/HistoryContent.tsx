"use client"

import { useMemo, useState } from "react"
import { initialHistory } from "../constants"
import { Filter } from "../types"
import HistoryEmpty from "./HistoryEmpty"
import HistoryFilters from "./HistoryFilters"
import HistoryList from "./HistoryList"

const HistoryContent = () => {
  const [search, setSearch] = useState("")
  const [activeFilter, setActiveFilter] = useState<Filter>("All")

  const filteredItems = useMemo(() => {
    const query = search.trim().toLowerCase()

    return initialHistory.filter((item) => {
      const matchesFilter =
        activeFilter === "All" || item.platform === activeFilter

      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.excerpt.toLowerCase().includes(query)

      return matchesFilter && matchesSearch
    })
  }, [search, activeFilter])

  const isFiltering = Boolean(search.trim()) || activeFilter !== "All"

  function clearFilters() {
    setSearch("")
    setActiveFilter("All")
  }

  return (
    <>
      <HistoryFilters
        search={search}
        onSearchChange={setSearch}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        resultCount={filteredItems.length}
        isFiltering={isFiltering}
      />

      {filteredItems.length > 0 ? (
        <HistoryList items={filteredItems} />
      ) : (
        <HistoryEmpty
          hasItems={initialHistory.length > 0}
          onClearFilters={clearFilters}
        />
      )}
    </>
  )
}

export default HistoryContent
