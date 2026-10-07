import { PostContent } from "@/lib/types"
import { cn } from "cn"
import { Button } from "../ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowReloadHorizontalFreeIcons,
  Copy,
  Edit,
} from "@hugeicons/core-free-icons"

interface PostCardProps {
  platform: "LinkedIn" | "Instagram"
  content: PostContent
  className?: string
  isCommercial?: boolean
}

const PostCard = ({
  platform,
  content,
  className,
  isCommercial,
}: PostCardProps) => {
  return (
    <article
      className={cn(
        `flex max-w-full flex-col gap-6 rounded-lg border border-border p-3 md:p-6`,
        className
      )}
    >
      {/*Header*/}
      <span className="text-[12px] font-semibold tracking-wide uppercase">
        {platform}
      </span>

      {/*Content*/}
      <div className="space-y-4">
        {content.blocks.map((block, index) => {
          if (block.type === "paragraph") {
            return (
              <p
                key={index}
                className="text-sm leading-7 font-light text-foreground"
              >
                {block.content}
              </p>
            )
          }

          if (block.type === "heading") {
            return (
              <h3 key={index} className="text-lg font-semibold tracking-tight">
                {block.content}
              </h3>
            )
          }

          return null
        })}
      </div>

      {/*Actions*/}
      <div
        className={`mt-auto grid gap-4 border-t border-border p-4 ps-0 text-xs text-muted-foreground md:grid-cols-3`}
      >
        <Button
          disabled={isCommercial}
          className={`disabled:opacity-100`}
          variant={"outline"}
        >
          Edit
          <HugeiconsIcon icon={Edit} />
        </Button>
        <Button
          disabled={isCommercial}
          className={`disabled:opacity-100`}
          variant={"outline"}
        >
          Copy
          <HugeiconsIcon icon={Copy} />
        </Button>
        <Button
          disabled={isCommercial}
          className={`disabled:opacity-100`}
          variant={"outline"}
        >
          Regenerate
          <HugeiconsIcon icon={ArrowReloadHorizontalFreeIcons} />
        </Button>
      </div>
    </article>
  )
}

export default PostCard
