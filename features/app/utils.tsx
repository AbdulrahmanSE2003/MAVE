import { ReactNode } from "react"
import { Platform } from "@/lib/generated/prisma/enums"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Instagram,
  Linkedin02Icon,
  Paperclip,
} from "@hugeicons/core-free-icons"
import { greetings } from "./constants"

export function generatePostRowIcon(platform: Platform): ReactNode {
  switch (platform) {
    case Platform.LINKEDIN:
      return <HugeiconsIcon className={`size-5`} icon={Linkedin02Icon} />

    case Platform.INSTAGRAM:
      return <HugeiconsIcon className={`size-5`} icon={Instagram} />

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
