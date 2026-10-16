"use client"

import { cn } from "cn"
import { useT } from "@/lib/i18n"

const Logo = ({
  showSlogan = false,
  className,
}: {
  showSlogan?: boolean
  className?: string
}) => {
  const t = useT()

  return (
    <div className={cn(`flex flex-col gap-2`, className)}>
      <span className="font-black">
        MAVE <span className="text-2xl text-primary">.</span>
      </span>
      {showSlogan && (
        <p className={`text-sm text-muted-foreground`}>{t("common.tagline")}</p>
      )}
    </div>
  )
}

export default Logo
