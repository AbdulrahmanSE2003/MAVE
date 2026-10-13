"use client"

import { useMemo, useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Search01Icon,
  Clock01Icon,
  File02Icon,
  ArrowUpRight01Icon,
  MoreHorizontalIcon,
  Copy01Icon,
  Delete02Icon,
  InstagramIcon,
  Linkedin01Icon,
  FilterHorizontalIcon,
} from "@hugeicons/core-free-icons"

type Platform = "LinkedIn" | "Instagram"
type Filter = "All" | Platform

type HistoryItem = {
  id: number
  title: string
  excerpt: string
  platform: Platform
  date: string
  status: "Generated" | "Edited"
  color: string
}

const initialHistory: HistoryItem[] = [
  {
    id: 1,
    title: "Consistency beats motivation",
    excerpt:
      "You don't need to feel motivated every day. You need a system that keeps you moving, even when you don't.",
    platform: "LinkedIn",
    date: "Oct 12, 2026",
    status: "Edited",
    color: "bg-[#E9E9F8]",
  },
  {
    id: 2,
    title: "The idea behind MAVE",
    excerpt:
      "Your ideas deserve to sound like you. Not like another AI-generated post that everyone has already seen.",
    platform: "Instagram",
    date: "Oct 11, 2026",
    status: "Generated",
    color: "bg-[#F0E8D9]",
  },
  {
    id: 3,
    title: "What I learned building in public",
    excerpt:
      "Building in public isn't about sharing every little thing. It's about sharing what you learn along the way.",
    platform: "LinkedIn",
    date: "Oct 10, 2026",
    status: "Generated",
    color: "bg-[#E5EDE4]",
  },
  {
    id: 4,
    title: "Less planning, more building",
    excerpt:
      "Sometimes the fastest way to find the right answer is to build the smallest version and learn from it.",
    platform: "Instagram",
    date: "Oct 8, 2026",
    status: "Edited",
    color: "bg-[#F1E5E5]",
  },
]

const filters: Filter[] = ["All", "LinkedIn", "Instagram"]

export default function HistoryPage() {
  const [items, setItems] = useState(initialHistory)
  const [activeFilter, setActiveFilter] = useState<Filter>("All")
  const [search, setSearch] = useState("")
  const [openMenu, setOpenMenu] = useState<number | null>(null)
  const [copiedId, setCopiedId] = useState<number | null>(null)

  const filteredItems = useMemo(() => {
    const query = search.trim().toLowerCase()

    return items.filter((item) => {
      const matchesFilter =
        activeFilter === "All" || item.platform === activeFilter

      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.excerpt.toLowerCase().includes(query)

      return matchesFilter && matchesSearch
    })
  }, [items, activeFilter, search])

  async function copyContent(item: HistoryItem) {
    try {
      await navigator.clipboard.writeText(`${item.title}\n\n${item.excerpt}`)
      setCopiedId(item.id)
      setOpenMenu(null)
    } catch {
      // Clipboard access may be unavailable in some browser contexts.
    }
  }

  function deleteItem(id: number) {
    setItems((current) => current.filter((item) => item.id !== id))
    setOpenMenu(null)
  }

  return (
    <main className="mx-auto w-full max-w-7xl space-y-8 px-5 py-8 sm:px-8 lg:px-10">
      {/* Page heading */}
      <header className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
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
          <span className="font-medium">{items.length}</span>
          <span className="text-muted-foreground">
            {items.length === 1 ? "item" : "items"}
          </span>
        </div>
      </header>

      {/* Search and filters */}
      <section className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative min-w-0 flex-1">
            <HugeiconsIcon
              icon={Search01Icon}
              className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground"
            />

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
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
                onClick={() => setActiveFilter(filter)}
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
            {search || activeFilter !== "All"
              ? `${filteredItems.length} results`
              : "Recently generated"}
          </p>

          <span className="text-xs text-muted-foreground">Newest first</span>
        </div>
      </section>

      {/* History list */}
      {filteredItems.length > 0 ? (
        <section className="space-y-3">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group relative rounded-2xl border bg-card p-4 transition-colors hover:border-foreground/20 sm:p-5"
            >
              <div className="flex gap-4 sm:gap-5">
                {/* Content preview */}
                <div
                  className={`hidden h-28 w-24 shrink-0 flex-col justify-between overflow-hidden rounded-xl p-3 sm:flex ${item.color}`}
                >
                  <span className="text-[10px] font-semibold tracking-widest text-black/50">
                    MAVE
                  </span>
                  <span className="line-clamp-3 text-xs leading-4 font-semibold text-black">
                    {item.title}
                  </span>
                </div>

                {/* Main content */}
                <div className="min-w-0 flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium">
                      <HugeiconsIcon
                        icon={
                          item.platform === "LinkedIn"
                            ? Linkedin01Icon
                            : InstagramIcon
                        }
                        className="size-3.5"
                      />
                      {item.platform}
                    </span>

                    <span className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
                      {item.status}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h2 className="truncate text-base font-semibold tracking-tight sm:text-lg">
                      {item.title}
                    </h2>

                    <p className="line-clamp-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                      {item.excerpt}
                    </p>
                  </div>

                  <p className="text-xs text-muted-foreground">{item.date}</p>
                </div>

                {/* Actions */}
                <div className="relative flex shrink-0 items-start gap-1">
                  <button
                    onClick={() => copyContent(item)}
                    aria-label={`Copy ${item.title}`}
                    title={copiedId === item.id ? "Copied" : "Copy content"}
                    className="hidden size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:flex"
                  >
                    <HugeiconsIcon icon={Copy01Icon} className="size-4" />
                  </button>

                  <button
                    onClick={() =>
                      setOpenMenu(openMenu === item.id ? null : item.id)
                    }
                    aria-label={`More actions for ${item.title}`}
                    aria-expanded={openMenu === item.id}
                    className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <HugeiconsIcon
                      icon={MoreHorizontalIcon}
                      className="size-5"
                    />
                  </button>

                  {openMenu === item.id && (
                    <div className="absolute top-10 right-0 z-20 w-44 rounded-xl border bg-popover p-1.5 shadow-lg">
                      <button
                        onClick={() => copyContent(item)}
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm hover:bg-muted"
                      >
                        <HugeiconsIcon icon={Copy01Icon} className="size-4" />
                        Copy content
                      </button>

                      <button
                        onClick={() => deleteItem(item.id)}
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm text-destructive hover:bg-destructive/10"
                      >
                        <HugeiconsIcon icon={Delete02Icon} className="size-4" />
                        Remove from list
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {copiedId === item.id && (
                <p className="mt-3 text-xs text-muted-foreground">
                  Content copied to clipboard.
                </p>
              )}
            </article>
          ))}
        </section>
      ) : (
        <section className="flex min-h-72 flex-col items-center justify-center rounded-2xl border border-dashed px-6 py-12 text-center">
          <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-muted">
            <HugeiconsIcon
              icon={Search01Icon}
              className="size-5 text-muted-foreground"
            />
          </div>

          <h2 className="text-base font-semibold">Nothing found</h2>

          <p className="mt-1.5 max-w-sm text-sm leading-6 text-muted-foreground">
            {items.length === 0
              ? "Your history is clear. Generated content will appear here once it is saved."
              : "Try another search or switch the platform filter to find what you're looking for."}
          </p>

          <button
            onClick={() => {
              setSearch("")
              setActiveFilter("All")
            }}
            className="mt-4 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            Clear filters
          </button>
        </section>
      )}

      {/* Footer note */}
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
    </main>
  )
}
