"use client"

import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import {
  VisualColorPalette,
  VisualDensity,
  VisualMood,
  VisualTypography,
  MOOD_DEFAULTS,
  Lighting,
} from "@/lib/visuals/taste"
import { buildTasteDescription } from "../../utils"

/* ---------- Color systems ---------- */

const PALETTE_THEME: Record<
  VisualColorPalette,
  { bg: string; fg: string; accent: string; sub: string }
> = {
  "Warm neutral": {
    bg: "#F2EEE5",
    fg: "#28251F",
    accent: "#C07B4A",
    sub: "#8A8375",
  },
  Vibrant: {
    bg: "#AD0555",
    fg: "#FFFFFF",
    accent: "#608DDD",
    sub: "#FFCF56",
  },
  "Cool muted": {
    bg: "#ECEFEF",
    fg: "#282D2E",
    accent: "#6E8385",
    sub: "#8A9698",
  },
  Monochrome: {
    bg: "#141414",
    fg: "#F4F4F2",
    accent: "#A8A8A4",
    sub: "#6E6E6A",
  },
}

const DENSITY_SCALE: Record<
  VisualDensity,
  {
    pad: string
    gap: string
    title: string
    eyebrow: string
    detail: string
  }
> = {
  Spacious: {
    pad: "p-8 sm:p-10",
    gap: "gap-7",
    title: "text-3xl leading-snug",
    eyebrow: "text-[10px]",
    detail: "gap-3",
  },
  Balanced: {
    pad: "p-7",
    gap: "gap-5",
    title: "text-4xl leading-tight",
    eyebrow: "text-[10px]",
    detail: "gap-2.5",
  },
  Dense: {
    pad: "p-5",
    gap: "gap-3.5",
    title: "text-5xl leading-tight",
    eyebrow: "text-[9px]",
    detail: "gap-2",
  },
}

const TYPE_CLASS: Record<VisualTypography, string> = {
  serif: "font-serif font-normal tracking-[-0.045em]",
  sans: "font-sans font-medium tracking-[-0.04em]",
  display: "font-sans font-extrabold uppercase tracking-[-0.065em]",
}

const MOOD_LAYOUT: Record<
  VisualMood,
  {
    align: string
    justify: string
    extras: "rules" | "bar" | "none" | "dots"
  }
> = {
  Editorial: {
    align: "items-start text-left",
    justify: "justify-between",
    extras: "rules",
  },
  Bold: {
    align: "items-center text-center",
    justify: "justify-center",
    extras: "bar",
  },
  Minimal: {
    align: "items-start text-left",
    justify: "justify-end",
    extras: "none",
  },
  Playful: {
    align: "items-start text-left",
    justify: "justify-between",
    extras: "dots",
  },
}

const LIGHTING_WASH: Record<Lighting, (bg: string, accent: string) => string> =
  {
    "soft-natural": (bg, accent) =>
      `linear-gradient(135deg, transparent 30%, ${accent}14 100%)`,
    "soft-gradient": (bg, accent) =>
      `linear-gradient(160deg, ${accent}1F 0%, transparent 55%, ${accent}0A 100%)`,
    "flat-clean": () => "none",
    "flat-high-contrast": (bg) =>
      `linear-gradient(180deg, transparent 55%, ${bg} 100%)`,
  }

/* ---------- Component ---------- */

type TastePreviewProps = {
  mood: VisualMood
  colorPalette: VisualColorPalette
  density: VisualDensity
  typography: VisualTypography
  moodProfile: (typeof MOOD_DEFAULTS)[VisualMood]
}

const TastePreview = ({
  mood,
  colorPalette,
  density,
  typography,
  moodProfile,
}: TastePreviewProps) => {
  const theme = PALETTE_THEME[colorPalette]
  const scale = DENSITY_SCALE[density]
  const layout = MOOD_LAYOUT[mood]

  const wash = LIGHTING_WASH[moodProfile.lighting](theme.bg, theme.accent)

  return (
    <aside className="sticky top-12 hidden w-2/5 flex-col gap-5 self-start lg:flex">
      {/* Preview header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-foreground" />
          <span className="text-[10px] font-semibold tracking-[0.18em] text-foreground uppercase">
            Live preview
          </span>
        </div>

        <span className="text-[10px] text-muted-foreground tabular-nums">
          01 / 01
        </span>
      </div>

      {/* Art direction canvas */}
      <div
        className="relative isolate min-h-88 overflow-hidden rounded-xl border border-border/70 shadow-[0_2px_4px_rgba(0,0,0,0.02),0_20px_50px_-28px_rgba(0,0,0,0.22)] transition-colors duration-500 sm:min-h-104"
        style={{
          backgroundColor: theme.bg,
          color: theme.fg,
        }}
      >
        {/* Lighting */}
        {wash !== "none" && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 transition-all duration-700"
            style={{ background: wash }}
          />
        )}

        {moodProfile.lighting === "soft-natural" && (
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-20 size-64 rounded-full blur-3xl transition-colors duration-700"
            style={{
              backgroundColor: `${theme.accent}12`,
            }}
          />
        )}

        {/* Fine border inside the canvas */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-3 rounded-lg border"
          style={{ borderColor: `${theme.fg}0D` }}
        />

        {/* Mood-specific decoration */}
        {layout.extras === "dots" && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <span
              className="absolute top-[17%] right-[13%] size-3 rounded-full transition-all duration-500"
              style={{ backgroundColor: theme.accent }}
            />
            <span
              className="absolute top-[25%] right-[25%] size-1.5 rounded-full opacity-60"
              style={{ backgroundColor: theme.sub }}
            />
            <span
              className="absolute right-[10%] bottom-[22%] size-2 rounded-full opacity-80"
              style={{ backgroundColor: theme.accent }}
            />
            <span
              className="absolute top-[43%] right-[8%] h-12 w-px rotate-45 opacity-30"
              style={{ backgroundColor: theme.fg }}
            />
          </div>
        )}

        {layout.extras === "bar" && (
          <div
            aria-hidden
            className="pointer-events-none absolute top-[18%] left-1/2 h-28 w-28 -translate-x-1/2 rounded-full opacity-[0.09] blur-2xl transition-colors duration-500"
            style={{ backgroundColor: theme.accent }}
          />
        )}

        {/* Main composition */}
        <div
          className={cn(
            "relative z-10 flex h-full min-h-[22rem] flex-col sm:min-h-[26rem]",
            scale.pad,
            scale.gap,
            layout.align,
            layout.justify
          )}
        >
          {/* Brand signature */}
          <div className="flex w-full items-center justify-between gap-3">
            <span
              className={cn(
                "font-semibold tracking-[0.17em] uppercase",
                scale.eyebrow
              )}
              style={{ color: theme.sub }}
            >
              MAVE
              <span className="mx-1.5 opacity-50">/</span>
              Content studio
            </span>

            <span
              className="size-2 rounded-full"
              style={{ backgroundColor: theme.accent }}
            />
          </div>

          {/* Editorial metadata */}
          {mood === "Editorial" && (
            <div
              className="flex items-center gap-2"
              style={{ color: theme.sub }}
            >
              <span
                className="h-px w-5"
                style={{ backgroundColor: theme.accent }}
              />
              <span className="text-[9px] font-medium tracking-[0.16em] uppercase">
                A study in ideas
              </span>
            </div>
          )}

          {/* Headline */}
          <div className={cn("flex w-full flex-col", scale.detail)}>
            <h3
              className={cn(
                "max-w-full break-words transition-all duration-500",
                scale.title,
                TYPE_CLASS[typography],
                mood === "Bold" && "max-w-[10ch]",
                mood === "Editorial" && "max-w-[9ch]",
                mood === "Minimal" && "max-w-[11ch]",
                mood === "Playful" && "max-w-[10ch]"
              )}
            >
              {mood === "Bold" ? (
                <>
                  MAKE
                  <br />
                  IT
                  <br />
                  MATTER.
                </>
              ) : (
                <>
                  The idea
                  <br />
                  starts{" "}
                  <span
                    className={cn(
                      typography === "serif" && "italic",
                      mood === "Playful" &&
                        "underline decoration-2 underline-offset-4"
                    )}
                    style={{
                      color: mood === "Minimal" ? theme.fg : theme.accent,
                      textDecorationColor: theme.accent,
                    }}
                  >
                    here.
                  </span>
                </>
              )}
            </h3>

            {layout.extras === "rules" && (
              <div aria-hidden className="mt-2 flex w-20 flex-col gap-1.5">
                {[1, 0.55, 0.25].map((opacity) => (
                  <span
                    key={opacity}
                    className="h-px w-full"
                    style={{
                      backgroundColor: theme.fg,
                      opacity,
                    }}
                  />
                ))}
              </div>
            )}

            {layout.extras === "bar" && (
              <span
                aria-hidden
                className="mt-1 h-1.5 w-12 rounded-full"
                style={{ backgroundColor: theme.accent }}
              />
            )}
          </div>

          {/* Bottom composition */}
          <div className="mt-auto flex w-full items-end justify-between gap-3">
            <div className="flex min-w-0 flex-col gap-1.5">
              <span
                className="text-[9px] font-medium tracking-[0.15em] uppercase"
                style={{ color: theme.sub }}
              >
                {mood}
              </span>

              <span
                className="max-w-[15rem] text-[10px] leading-relaxed"
                style={{ color: theme.sub }}
              >
                {moodProfile.medium}
                <span className="mx-1.5 opacity-50">/</span>
                {moodProfile.composition}
              </span>
            </div>

            {/* Small visual signature */}
            <div
              aria-hidden
              className={cn(
                "flex shrink-0 items-center justify-center border transition-all duration-500",
                mood === "Playful"
                  ? "size-10 rounded-full"
                  : mood === "Bold"
                    ? "size-9 rounded-sm"
                    : "size-9 rounded-full"
              )}
              style={{
                borderColor: `${theme.accent}80`,
                backgroundColor: `${theme.accent}12`,
              }}
            >
              <span
                className={cn(
                  "block transition-all duration-500",
                  mood === "Editorial"
                    ? "h-4 w-4 rotate-45 border"
                    : mood === "Bold"
                      ? "h-3 w-3"
                      : mood === "Minimal"
                        ? "size-2 rounded-full"
                        : "size-3 rounded-full"
                )}
                style={{
                  borderColor: theme.accent,
                  backgroundColor:
                    mood === "Editorial" ? "transparent" : theme.accent,
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom tonal overlay */}
        {moodProfile.lighting === "flat-high-contrast" && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
            style={{
              background: `linear-gradient(to top, ${theme.bg}55, transparent)`,
            }}
          />
        )}
      </div>

      {/* Interpretation */}
      <div className="flex items-start gap-3 px-0.5">
        <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md border border-border bg-background">
          <span className="size-2 rounded-full bg-foreground" />
        </div>

        <div className="min-w-0 flex-1 space-y-1.5">
          <span className="block text-[10px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
            MAVE&apos;S READ
          </span>

          <p className="text-sm leading-6 text-foreground/80">
            {buildTasteDescription(mood, colorPalette, density)}
          </p>
        </div>
      </div>

      <Separator className="opacity-60" />

      {/* Selection summary */}
      <div className="flex flex-wrap items-center gap-2">
        {[mood, colorPalette, density, typography].map((value) => (
          <span
            key={value}
            className="rounded-full border border-border/80 px-2.5 py-1 text-[10px] text-muted-foreground"
          >
            {value}
          </span>
        ))}
      </div>
    </aside>
  )
}

export default TastePreview
