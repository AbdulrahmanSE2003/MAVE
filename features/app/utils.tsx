import { ReactNode } from "react"
import { ContentType, Platform } from "@/lib/generated/prisma/enums"
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

    case "INSTAGRAM_CAPTION":
      return <HugeiconsIcon className={`size-5`} icon={Instagram} />

    case "INSTAGRAM_CAROUSEL":
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

export const getRandomItem = (arr: string[]) =>
  arr[Math.floor(Math.random() * arr.length)]

export const getGreetingMessage = () => {
  const hour = new Date().getHours()
  if (hour < 12) return getRandomItem(greetings.morning)
  if (hour < 18) return getRandomItem(greetings.afternoon)
  return getRandomItem(greetings.evening)
}
