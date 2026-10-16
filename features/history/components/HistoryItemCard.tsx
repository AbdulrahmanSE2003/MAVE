"use client"

import { useState } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Copy01Icon,
  Delete02Icon,
  InstagramIcon,
  Linkedin01Icon,
  MoreHorizontalIcon,
} from "@hugeicons/core-free-icons"
import { useT } from "@/lib/i18n"
import type { HistoryItem } from "../types"

const HistoryItemCard = ({ item }: { item: HistoryItem }) => {
  const t = useT()
  const [openMenu, setOpenMenu] = useState(false)
  const [copied, setCopied] = useState(false)

  async function copyContent() {
    try {
      await navigator.clipboard.writeText(
        `${t(item.title)}\n\n${t(item.excerpt)}`
      )
      setCopied(true)
      setOpenMenu(false)
    } catch {
      // Clipboard access may be unavailable in some browser contexts.
    }
  }

  return (
    <article className="group relative rounded-2xl border bg-card p-4 transition-colors hover:border-foreground/20 sm:p-5">
      <div className="flex gap-4 sm:gap-5">
        {/* Content preview */}
        <div
          className={`hidden h-28 w-24 shrink-0 flex-col justify-between overflow-hidden rounded-xl p-3 sm:flex ${item.color}`}
        >
          <span className="text-[10px] font-semibold tracking-widest text-black/50">
            MAVE
          </span>
          <span className="line-clamp-3 text-xs leading-4 font-semibold text-black">
            {t(item.title)}
          </span>
        </div>

        {/* Main content */}
        <div className="min-w-0 flex-1 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium">
              <HugeiconsIcon
                icon={
                  item.platform === "LinkedIn" ? Linkedin01Icon : InstagramIcon
                }
                className="size-3.5"
              />
              {item.platform}
            </span>

            <span className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">
              {item.status === "Generated"
                ? t("history.status.generated")
                : t("history.status.edited")}
            </span>
          </div>

          <div className="space-y-1.5">
            <h2 className="truncate text-base font-semibold tracking-tight sm:text-lg">
              {t(item.title)}
            </h2>

            <p className="line-clamp-2 max-w-3xl text-sm leading-6 text-muted-foreground">
              {t(item.excerpt)}
            </p>
          </div>

          <p className="text-xs text-muted-foreground">{t(item.date)}</p>
        </div>

        {/* Actions */}
        <div className="relative flex shrink-0 items-start gap-1">
          <button
            type="button"
            onClick={copyContent}
            aria-label={t("history.card.copyAriaLabel", {
              title: t(item.title),
            })}
            title={
              copied
                ? t("common.actions.copied")
                : t("history.card.copyContent")
            }
            className="hidden size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:flex"
          >
            <HugeiconsIcon icon={Copy01Icon} className="size-4" />
          </button>

          <button
            type="button"
            onClick={() => setOpenMenu((current) => !current)}
            aria-label={t("history.card.moreActionsAriaLabel", {
              title: t(item.title),
            })}
            aria-expanded={openMenu}
            className="flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <HugeiconsIcon icon={MoreHorizontalIcon} className="size-5" />
          </button>

          {openMenu && (
            <div className="absolute end-0 top-10 z-20 w-44 rounded-xl border bg-popover p-1.5 shadow-lg">
              <button
                type="button"
                onClick={copyContent}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-start text-sm hover:bg-muted"
              >
                <HugeiconsIcon icon={Copy01Icon} className="size-4" />
                {t("history.card.copyContent")}
              </button>

              <button
                type="button"
                disabled
                title={t("history.card.removeUnavailableTitle")}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-start text-sm text-destructive hover:bg-destructive/10 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-transparent"
              >
                <HugeiconsIcon icon={Delete02Icon} className="size-4" />
                {t("history.card.removeFromList")}
              </button>
            </div>
          )}
        </div>
      </div>

      {copied && (
        <p className="mt-3 text-xs text-muted-foreground">
          {t("history.card.copiedMessage")}
        </p>
      )}
    </article>
  )
}

export default HistoryItemCard
