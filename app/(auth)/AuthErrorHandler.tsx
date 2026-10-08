"use client"

import { useEffect, useRef } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { toast } from "sonner"
import { AUTH_ERRORS } from "@/features/auth/constants"



export default function AuthErrorHandler() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const handledError = useRef<string | null>(null)

  useEffect(() => {
    const error = searchParams.get("error")

    if (!error || handledError.current === error) return

    handledError.current = error

    const message =
      AUTH_ERRORS[error] ??
      "Something went wrong while signing you in. Please try again."

    toast.error(message)

    const url = new URL(window.location.href)
    url.searchParams.delete("error")

    router.replace(`${pathname}${url.search}`)
  }, [searchParams, pathname, router])

  return null
}
