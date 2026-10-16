import { ImagePlus } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

const VisualsHeader = () => {
  return (
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
  )
}

export default VisualsHeader
