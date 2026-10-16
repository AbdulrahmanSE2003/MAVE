import { ContentType } from "./generated/prisma/enums"

export { cn } from "cn"

export function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false
  }

  return (
    target.isContentEditable ||
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.tagName === "SELECT"
  )
}

export const formatTypeName = (type: ContentType) => {
  return type.split("_").join(" ").toLowerCase()
}
