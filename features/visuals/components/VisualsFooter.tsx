import { Sparkles } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useT } from "@/lib/i18n"

const VisualsFooter = () => {
  const t = useT()

  return (
    <div className="flex items-center gap-2 border-t pt-5 text-xs text-muted-foreground">
      <HugeiconsIcon icon={Sparkles} className="size-4 text-muted-foreground" />
      <span>{t("visuals.footer.note")}</span>
    </div>
  )
}

export default VisualsFooter
