"use client"

import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Copy01Icon,
  CopyCheckIcon,
  InstagramIcon,
  Linkedin01Icon,
  MoreHorizontalIcon,
  PencilEdit01FreeIcons,
  Trash2,
} from "@hugeicons/core-free-icons"
import { useT } from "@/lib/i18n"
import type { HistoryCardData } from "../types"
import Image from "next/image"
import { htmlToPlainText } from "@/features/app/utils"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"

type Props = {
  item: HistoryCardData
  imageUrl?: string
}

const HistoryItemCard = ({ item, imageUrl }: Props) => {
  const t = useT()
  const router = useRouter()
  const [openMenu, setOpenMenu] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleClick = () => {
    router.push(`/app/write/${item.id}`)
  }

  async function copyContent() {
    if (item.historyType !== "post") return

    try {
      await navigator.clipboard.writeText(htmlToPlainText(item.content))
      toast.success(t("history.card.copiedMessage"))
      setOpenMenu(false)
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 3000)
    } catch {
      setCopied(false)
    }
  }

  const platformLabel =
    item.historyType === "post" && item.platform === "LINKEDIN"
      ? "LinkedIn"
      : item.historyType === "post" && item.platform === "INSTAGRAM"
        ? "Instagram"
        : null

  return (
    <article className="group relative rounded-2xl border bg-card p-4 transition-colors hover:border-foreground/20 sm:p-5">
      {/* Image */}
      <div className="flex gap-4 sm:gap-5">
        {item.historyType === "visual" && imageUrl && (
          <div className="hidden h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-muted sm:block">
            <Image
              src={imageUrl}
              alt={item.idea}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        {/* Card Header */}
        <div className="min-w-0 flex-1 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            {platformLabel && item.historyType === "post" && (
              <span className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium">
                <HugeiconsIcon
                  icon={
                    item.platform === "LINKEDIN"
                      ? Linkedin01Icon
                      : InstagramIcon
                  }
                  className="size-3.5"
                />
                {platformLabel}
              </span>
            )}

            <span className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
              {item.historyType === "post" ? "Post" : "Image"}
            </span>
          </div>

          <div className="space-y-1.5">
            <h2 className="truncate text-base font-semibold tracking-tight sm:text-lg">
              {item.idea}
            </h2>

            <p className="line-clamp-1 truncate text-sm leading-6 whitespace-pre-wrap text-muted-foreground">
              {item.historyType === "post"
                ? htmlToPlainText(item.content)
                : item.idea}
            </p>
          </div>

          <p className="text-xs text-muted-foreground">
            {new Intl.DateTimeFormat(undefined, {
              dateStyle: "medium",
              timeStyle: "short",
            }).format(item.createdAt)}
          </p>
        </div>

        <div className="relative flex shrink-0 items-start gap-1">
          {item.historyType === "post" && (
            <Button
              variant={"invisible"}
              type="button"
              onClick={copyContent}
              aria-label="Copy content"
              title="Copy content"
            >
              <HugeiconsIcon
                icon={copied ? CopyCheckIcon : Copy01Icon}
                className="size-4"
              />
            </Button>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant={"invisible"}
                type="button"
                aria-label="More actions"
                aria-expanded={openMenu}
              >
                <HugeiconsIcon icon={MoreHorizontalIcon} className="size-5" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-40" align="end">
              <DropdownMenuItem
                className={`cursor-pointer`}
                onClick={handleClick}
              >
                <HugeiconsIcon
                  icon={PencilEdit01FreeIcons}
                  className="size-4"
                />
                Edit Post
              </DropdownMenuItem>
              {item.historyType === "post" && (
                <DropdownMenuItem
                  onClick={copyContent}
                  className={`cursor-pointer`}
                >
                  <HugeiconsIcon icon={Copy01Icon} className="size-4" />
                  Copy content
                </DropdownMenuItem>
              )}
              <DropdownMenuItem
                className={`cursor-pointer`}
                variant="destructive"
              >
                <HugeiconsIcon icon={Trash2} className="size-4" />
                Delete {item.historyType === "post" ? "Post" : "Visual"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </article>
  )
}

export default HistoryItemCard
