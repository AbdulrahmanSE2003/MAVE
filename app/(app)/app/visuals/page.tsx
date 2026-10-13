"use client"

import {
  ArrowUpRight,
  ImagePlus,
  MoreHorizontal,
  Search,
  Sparkles,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useMemo, useState } from "react"

type Visual = {
  id: number
  title: string
  platform: "Instagram" | "LinkedIn"
  format: string
  category: string
  background: string
  foreground: string
  accent: string
  eyebrow: string
  headline: string
  footer: string
}

const visuals: Visual[] = [
  {
    id: 1,
    title: "Less noise, more clarity",
    platform: "Instagram",
    format: "4:5",
    category: "Minimal",
    background: "#F3EFE5",
    foreground: "#111111",
    accent: "#A1FF00",
    eyebrow: "A NOTE ON CREATIVITY",
    headline: "Less noise.\nMore clarity.",
    footer: "Your ideas, your voice.",
  },
  {
    id: 2,
    title: "Build things that matter",
    platform: "LinkedIn",
    format: "4:5",
    category: "Typography",
    background: "#111111",
    foreground: "#F3EFE5",
    accent: "#A1FF00",
    eyebrow: "BUILD IN PUBLIC / 001",
    headline: "Build things\nthat actually\nmatter.",
    footer: "MAVE / CREATOR NOTES",
  },
  {
    id: 3,
    title: "Ideas need a voice",
    platform: "Instagram",
    format: "1:1",
    category: "Minimal",
    background: "#EAE6DC",
    foreground: "#111111",
    accent: "#A1FF00",
    eyebrow: "CREATIVE PROCESS",
    headline: "Good ideas\ndeserve to be\nheard.",
    footer: "MAVE STUDIO",
  },
  {
    id: 4,
    title: "Stop chasing trends",
    platform: "LinkedIn",
    format: "4:5",
    category: "Typography",
    background: "#DCE8D0",
    foreground: "#111111",
    accent: "#A1FF00",
    eyebrow: "A DIFFERENT PERSPECTIVE",
    headline: "Stop chasing\ntrends.\nStart thinking.",
    footer: "MAVE / NOTES",
  },
]

const filters = ["All visuals", "Instagram", "LinkedIn", "Saved"]

export default function VisualsPage() {
  const [query, setQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("All visuals")

  const filteredVisuals = useMemo(() => {
    return visuals.filter((visual) => {
      const matchesQuery =
        `${visual.title} ${visual.platform} ${visual.category}`
          .toLowerCase()
          .includes(query.toLowerCase())

      const matchesFilter =
        activeFilter === "All visuals" ||
        activeFilter === "Saved" ||
        visual.platform === activeFilter

      return matchesQuery && matchesFilter
    })
  }, [query, activeFilter])

  return (
    <main className="mx-auto w-full max-w-7xl space-y-8 p-5 md:p-8">
      <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            Your workspace / Visual
          </p>

          <h1 className="text-3xl font-semibold tracking-tight">Visuals</h1>

          <p className="max-w-lg text-sm leading-6 text-muted-foreground">
            A home for the visuals behind your ideas. Explore concepts and keep
            your creative direction in one place.
          </p>
        </div>

        <button
          type="button"
          disabled
          title="Visual creation will be available in a future version."
          className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground opacity-70"
        >
          <HugeiconsIcon icon={ImagePlus} />
          Create visual
          <span className="text-xs opacity-70">Soon</span>
        </button>
      </header>

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
            {filter}
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
                    {visual.eyebrow}
                  </span>
                  <span
                    className="size-3 shrink-0 rounded-full"
                    style={{ backgroundColor: visual.accent }}
                  />
                </div>

                <div className="absolute inset-x-5 top-[35%] space-y-4 sm:inset-x-6">
                  <h2 className="text-3xl leading-[1.12] font-semibold tracking-tight whitespace-pre-line sm:text-4xl">
                    {visual.headline}
                  </h2>

                  <div
                    className="h-1 w-12 rounded-full"
                    style={{ backgroundColor: visual.accent }}
                  />
                </div>

                <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-2 sm:inset-x-6 sm:bottom-6">
                  <span className="truncate text-[10px] font-medium tracking-wide">
                    {visual.footer}
                  </span>
                  <HugeiconsIcon
                    icon={ArrowUpRight}
                    className="size-4 shrink-0"
                  />
                </div>

                <button
                  type="button"
                  disabled
                  aria-label={`More options for ${visual.title}`}
                  className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-lg bg-background/70 text-foreground opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <HugeiconsIcon icon={MoreHorizontal} className="size-4" />
                </button>
              </div>

              <div className="flex items-start justify-between gap-3 pt-3">
                <div className="min-w-0 space-y-1">
                  <h3 className="truncate text-sm font-medium">
                    {visual.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {visual.platform} · {visual.format}
                  </p>
                </div>

                <span className="shrink-0 rounded-md border px-2 py-1 text-[10px] text-muted-foreground">
                  {visual.category}
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
          <h2 className="font-medium">No visuals found</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Try another search or choose a different filter.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("")
              setActiveFilter("All visuals")
            }}
            className="mt-4 text-sm font-medium underline underline-offset-4"
          >
            Clear filters
          </button>
        </div>
      )}

      <footer className="flex items-center gap-2 border-t pt-5 text-xs text-muted-foreground">
        <HugeiconsIcon
          icon={Sparkles}
          className="size-4 text-muted-foreground"
        />
        <span>Sample concepts for your future visual workspace.</span>
      </footer>
    </main>
  )
}
