"use client"

import { Button } from "@/components/ui/button"
import { authClient } from "@/lib/auth/client"
import { GoogleIcon, Loading03Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useState } from "react"
import { toast } from "sonner"

const GoogleButton = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleGoogleSignIn = async () => {
    try {
      setIsSubmitting(true)

      await authClient.signIn.social({
        provider: "google",
        callbackURL: `${window.location.origin}/signin`,
      })
    } catch (error) {
      toast.error(`Google sign-in error: ${error}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Button
      onClick={handleGoogleSignIn}
      variant="outline"
      size="lg"
      className="flex w-full items-center justify-center gap-3"
      type="button"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <HugeiconsIcon icon={Loading03Icon} className="size-5 animate-spin" />
      ) : (
        <HugeiconsIcon size={20} icon={GoogleIcon} />
      )}
      {isSubmitting ? "Signing in with Google" : "Continue with Google"}
    </Button>
  )
}

export default GoogleButton
