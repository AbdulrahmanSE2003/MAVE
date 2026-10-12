import { Skeleton } from "@/components/ui/skeleton"

const TextEditorSkeleton = () => {
  const lineWidths = [
    "w-3/4",
    "w-11/12",
    "w-4/5",
    "w-1/2",
    "w-full",
    "w-5/6",
    "w-2/3",
    "w-11/12",
    "w-4/5",
    "w-3/5",
  ]

  return (
    <div className="flex h-svh flex-col rounded-lg border border-border bg-background shadow-sm">
      {/* Editor Toolbar Header */}
      <div className="flex items-center gap-2 border-b border-border bg-muted/30 p-2">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-6 w-14" />
      </div>

      {/* Document Lines Area */}
      <div className="flex flex-1 flex-col gap-3.5 p-6">
        {lineWidths.map((widthClass, i) => (
          <Skeleton key={i} className={`h-3 ${widthClass}`} />
        ))}
      </div>
    </div>
  )
}

export default TextEditorSkeleton
