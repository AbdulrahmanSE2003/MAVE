import { Separator } from "@/components/ui/separator"
import { ChevronRight } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { generatePostRowIcon, htmlToPlainText } from "../utils"
import Link from "next/link"
import { Post } from "@/lib/generated/prisma/client"

const RecentPost = ({ postRow }: { postRow: Post }) => {
  return (
    <Link
      href={`/app/write/${postRow.id}`}
      key={postRow.id}
      className={`group flex w-full flex-col items-center gap-3`}
    >
      <div
        key={postRow.id}
        className={`group flex w-full items-center justify-start gap-5 py-3`}
      >
        {/* Icon */}
        <div
          className={`flex-center rounded-lg border border-muted-foreground/50 p-1.5 transition-colors duration-300 group-hover:bg-primary group-hover:text-black`}
        >
          {generatePostRowIcon(postRow.contentType)}
        </div>

        {/* Content */}
        <div className={`me-2 flex w-full flex-col gap-0.5`}>
          <h6 className={`font-medium`}>{postRow.idea}</h6>
          <p
            className={`line-clamp-2 w-full truncate paragraph text-xs whitespace-normal`}
          >
            {htmlToPlainText(postRow.content)}
          </p>
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
    </Link>
  )
}

export default RecentPost
