import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons"
import { getI18n } from "@/lib/i18n/server"

const HistoryFooter = async () => {
  const { t } = await getI18n()

  return (
    <footer className="flex items-start gap-2 border-t pt-5 text-xs leading-5 text-muted-foreground">
      <HugeiconsIcon
        icon={ArrowUpRight01Icon}
        className="mt-0.5 size-4 shrink-0"
      />
      <p>{t("history.footer.previewNote")}</p>
    </footer>
  )
}

export default HistoryFooter
