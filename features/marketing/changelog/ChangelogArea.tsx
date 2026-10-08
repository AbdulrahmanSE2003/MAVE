import { changelogs } from "@/lib/constants"
import { CheckIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { cn } from "cn"

const ChangelogTimeline = () => {
  return (
    <div className="max-w-5xl">
      {changelogs.map((entry, i) => (
        <article
          key={entry.id}
          className="relative grid grid-cols-[auto_1fr] gap-5 pb-14 last:pb-0 sm:gap-8 md:grid-cols-[1fr_2fr] md:gap-12"
        >
          {/* Timeline rail */}
          <div className="md:pr-8">
            {i !== changelogs.length && (
              <div className="absolute top-3 left-72 h-full w-px bg-border" />
            )}

            <div className="relative flex gap-5">
              <div
                className={cn(
                  "relative left-70 mt-1.5 size-4.5 shrink-0 rounded-full bg-primary ring-2 ring-background",
                  entry !== changelogs[0] ? "grayscale-100" : "animate-pulse"
                )}
              >
                <div
                  className={cn(
                    "absolute top-1/2 left-1/2 size-1.5 shrink-0 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-foreground ring-3 ring-background"
                  )}
                />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-base font-medium text-foreground">
                  {entry.version}
                </span>

                <time className="text-xs tracking-wider text-muted-foreground uppercase">
                  {entry.date}
                </time>
              </div>
            </div>
          </div>

          {/* Changelog content */}
          <div className="space-y-6">
            <div className="space-y-3 border-b border-border">
              <h2 className="text-4xl tracking-tight">{entry.title}</h2>

              <p className="mb-5 paragraph">{entry.description}</p>
            </div>

            <ul className="space-y-3">
              {entry.change.map((change) => (
                <li
                  key={change}
                  className="flex items-center gap-1.5 text-sm text-foreground/80"
                >
                  <HugeiconsIcon icon={CheckIcon} className={`size-4`} />
                  <span>{change}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  )
}

export default ChangelogTimeline
