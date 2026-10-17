import { ChevronRight } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { generatePostRowIcon, htmlToPlainText } from "../utils"
import Link from "next/link"
import { Post } from "@/lib/generated/prisma/client"
import { getI18n } from "@/lib/i18n/server"

const RecentPost = async ({ postRow }: { postRow: Post }) => {
  const { t } = await getI18n()

  return (
    <Link
      href={`/app/write/${postRow.id}`}
      className="group flex w-full items-center gap-3 rounded-lg p-2.5 transition-colors hover:bg-muted/50 sm:gap-4 sm:p-3"
    >
      {/* Icon (Hidden on small mobile, visible on sm+) */}
      <div className="flex-center hidden size-9 shrink-0 rounded-lg border border-border p-2 transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground sm:flex">
        {generatePostRowIcon(postRow.contentType)}
      </div>

      {/* Content Block */}
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <h6 className="truncate text-sm font-medium text-foreground sm:text-base">
          {postRow.idea}
        </h6>
        <p className="line-clamp-1 text-xs text-muted-foreground sm:line-clamp-2">
          {htmlToPlainText(postRow.content)}
        </p>
      </div>

      {/* Meta Data & Action Arrow */}
      <div className="flex shrink-0 items-center gap-2 sm:gap-4">
        <div className="flex flex-col items-end text-end sm:items-center">
          <span className="text-xs font-medium text-foreground">
            {postRow.platform}
          </span>
          <span className="text-[10px] text-muted-foreground sm:text-xs">
            {t("app.dashboard.recentWork.twoHoursAgo")}
          </span>
        </div>

        <HugeiconsIcon
          icon={ChevronRight}
          className="size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-foreground rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
        />
      </div>
    </Link>
  )
}

export default RecentPost
