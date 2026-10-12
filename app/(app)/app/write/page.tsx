import RecentWork from "@/features/app/components/RecentWork"
import RecentWorkSkeleton from "@/features/app/components/RecentWorkSkeleton"
import WriteLap from "@/features/write/components/WriteLap"
import { Suspense } from "react"

const page = () => {
  return (
    <main className="h-auto w-full space-y-8 px-4 py-8 sm:px-8">
      <WriteLap />

      <Suspense fallback={<RecentWorkSkeleton/>}>
        <RecentWork />
      </Suspense >
    </main>
  )
}

export default page
