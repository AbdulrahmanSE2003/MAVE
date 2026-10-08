"use client"

import { useEffect, useRef } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { toast } from "sonner"

const AUTH_ERRORS: Record<string, string> = {
  account_not_linked:
    "This Google account is not linked to an existing MAVE account.",

  invalid_credentials: "The email or password is incorrect.",

  email_exists: "An account with this email already exists.",

  user_already_exists: "An account with this email already exists.",

  access_denied: "Google sign-in was cancelled.",

  oauth_error: "Google sign-in failed. Please try again.",
}

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
