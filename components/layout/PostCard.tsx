import { PostContent } from "@/lib/types"
import { cn } from "cn"
import { Button } from "../ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowReloadHorizontalFreeIcons,
  Copy,
  Edit,
} from "@hugeicons/core-free-icons"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface PostCardProps {
  platform: "LinkedIn" | "Instagram"
  content: string | PostContent
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
      <div className="max-w-[65ch]">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            p: ({ children }) => (
              <p className="mb-5 text-[15px] leading-7 text-foreground last:mb-0">
                {children}
              </p>
            ),

            strong: ({ children }) => (
              <strong className="font-semibold text-foreground">
                {children}
              </strong>
            ),

            em: ({ children }) => <em className="italic">{children}</em>,

            blockquote: ({ children }) => (
              <blockquote className="my-6 border-l-2 border-primary pl-4 text-muted-foreground">
                {children}
              </blockquote>
            ),
          }}
        >
          {content.toString().trim()}
        </ReactMarkdown>
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
