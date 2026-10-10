import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Platform } from "@/features/app/types"
import { generatePostRowIcon } from "@/features/app/utils"
import { ChevronRight } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"

const posts: {
  id: string
  platform: Platform
  idea: string
  content: string
}[] = [
  {
    id: "1",
    platform: Platform.LINKEDIN,
    idea: "Good ideas are always funny.",
    content:
      "I used to think good ideas always arrived fully formed. But actually, they don't.",
  },
  {
    id: "2",
    platform: Platform.LINKEDIN,
    idea: "Good ideas are always funny.",
    content:
      "I used to think good ideas always arrived fully formed. But actually, they don't.",
  },
  {
    id: "3",
    platform: Platform.INSTAGRAM,
    idea: "Good ideas are always funny.",
    content:
      "I used to think good ideas always arrived fully formed. But actually, they don't.",
  },
]

const RecentWork = () => {
  return (
    <div className={`flex min-h-56 flex-col gap-3`}>
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

      {posts.map((postRow) => (
        <Link
          href={"#"}
          key={postRow.id}
          className={`flex w-full flex-col gap-3`}
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
              <HugeiconsIcon icon={ChevronRight} className={`size-4`} />
            </div>
          </div>
          <Separator />
        </Link>
      ))}
    </div>
  )
}

export default RecentWork
