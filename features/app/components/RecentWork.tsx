import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { generatePostRowIcon } from "@/features/app/utils"
import { ChevronRight, PencilEdit01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"
import { getUserPosts } from "../actions"
import Error from "@/app/error"
import EmptyPostsState from "./EmptyPostsState"

const RecentWork = async () => {
  const postsRes = await getUserPosts()
  if (!postsRes.success) return <Error />

  const posts = postsRes.data
  return (
    <div className={`flex min-h-64 w-full flex-col gap-3`}>
      {/* Header */}
      <div className={`flex-between`}>
        <span className={`text-2xl tracking-tighter`}>Recent Work</span>
        <Button
          className={`font-semibold`}
          size={"lg"}
          asChild
          variant={"invisible"}
        >
          <Link href={"/write"}>View all</Link>
        </Button>
      </div>

      <Separator />

      {!posts.length ? (
        <EmptyPostsState />
      ) : (
        posts.map((postRow) => (
          <Link
            href={"#"}
            key={postRow.id}
            className={`group flex w-full flex-col gap-3`}
          >
            <div
              key={postRow.id}
              className={`group flex w-full items-center justify-start gap-5 py-3`}
            >
              {/* Icon */}
              <div
                className={`flex-center rounded-lg border border-muted-foreground/50 p-1.5 transition-colors duration-300 group-hover:bg-primary group-hover:text-black`}
              >
                {generatePostRowIcon(postRow.platform)}
              </div>

              {/* Content */}
              <div className={`flex flex-col gap-0.5`}>
                <h6 className={`font-medium`}>{postRow.idea}</h6>
                <p className={`paragraph text-xs`}>{postRow.content}</p>
              </div>

              {/* Meta Data */}
              <div className={`ml-auto flex items-center gap-3`}>
                <div className={`flex flex-col items-center gap-1`}>
                  <span className={`text-xs`}>{postRow.platform}</span>
                  <span className={`paragraph text-[9px]`}>2 hours ago</span>
                </div>
                <HugeiconsIcon
                  icon={ChevronRight}
                  className={`relative right-1 size-4 transition-all duration-300 group-hover:right-0`}
                />
              </div>
            </div>
            <Separator />
          </Link>
        ))
      )}
    </div>
  )
}

export default RecentWork
