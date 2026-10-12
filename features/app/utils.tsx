import { ReactNode } from "react"
import { ContentType } from "@/lib/generated/prisma/enums"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  CarouselHorizontal02FreeIcons,
  Instagram,
  Linkedin02Icon,
  Paperclip,
} from "@hugeicons/core-free-icons"
import { greetings } from "./constants"

export function generatePostRowIcon(type: ContentType): ReactNode {
  switch (type) {
    case "LINKEDIN_POST":
      return <HugeiconsIcon className={`size-5`} icon={Linkedin02Icon} />

    case "Instagram Caption":
      return <HugeiconsIcon className={`size-5`} icon={Instagram} />

    case "Instagram Carousel":
      return (
        <HugeiconsIcon
          className={`size-5`}
          icon={CarouselHorizontal02FreeIcons}
        />
      )

    default:
      return <HugeiconsIcon className={`size-5`} icon={Paperclip} />
  }
}

export const formatPostType = (type: ContentType) => {
  switch (type) {
    case "LINKEDIN_POST":
      return "Linkedin Post"

    case "Instagram Caption":
      return "Instagram Caption"

    case "Instagram Carousel":
      return "Instagram Carousel"

    default:
      return "Post"
  }
}

export const getRandomItem = (arr: string[]) =>
  arr[Math.floor(Math.random() * arr.length)]

export const getGreetingMessage = () => {
  const hour = new Date().getHours()
  if (hour < 12) return getRandomItem(greetings.morning)
  if (hour < 18) return getRandomItem(greetings.afternoon)
  return getRandomItem(greetings.evening)
}

export function plainTextToHtml(text: string) {
  return text
    .trim()
    .split(/\n{2,}/)
    .map((paragraph) => {
      const escaped = paragraph
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")

      return `<p>${escaped.replace(/\n/g, "<br>")}</p>`
    })
    .join("")
}

export function htmlToPlainText(content: string) {
  return content
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/p\s*>/gi, " ")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/\s+/g, " ")
    .trim()
}

export async function copyPlainTextContent(text: string) {
  await navigator.clipboard.writeText(text)
}

export function postContentToHtml(content: string) {
  const trimmedContent = content.trim()

  if (!trimmedContent) return ""

  // Support existing posts that already contain HTML.
  if (/<\/?[a-z][\s\S]*?>/i.test(trimmedContent)) {
    return trimmedContent
  }

  // Convert legacy plain-text posts to HTML.
  return plainTextToHtml(content)
}

export async function copyFormattedContent(html: string, plainText: string) {
  if (navigator.clipboard?.write && typeof ClipboardItem !== "undefined") {
    await navigator.clipboard.write([
      new ClipboardItem({
        "text/html": new Blob([html], {
          type: "text/html",
        }),
        "text/plain": new Blob([plainText], {
          type: "text/plain",
        }),
      }),
    ])
    return
  }

  await navigator.clipboard.writeText(plainText)
}
