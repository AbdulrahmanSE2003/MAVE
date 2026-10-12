import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"

export default function RecentWorkSkeleton() {
  return (
    <div className="flex min-h-64 w-full flex-col gap-3">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-36" />
        <Skeleton className="h-9 w-20" />
      </div>

      <Separator />

      {/* List Items Skeleton */}
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex w-full flex-col gap-3">
          <div className="flex w-full items-center justify-start gap-5 py-3">
            {/* Icon Skeleton */}
            <Skeleton className="size-9 shrink-0 rounded-lg" />

            {/* Content Skeleton */}
            <div className="me-2 flex w-full flex-col gap-2">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-3 w-4/5" />
            </div>

            {/* Meta Skeleton */}
            <div className="ml-auto flex items-center gap-3">
              <div className="flex flex-col items-center gap-1.5">
                <Skeleton className="h-3 w-12" />
                <Skeleton className="h-2.5 w-14" />
              </div>
              <Skeleton className="size-4 rounded-full" />
            </div>
          </div>
          <Separator />
        </div>
      ))}
    </div>
  )
}
