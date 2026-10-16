import { useT } from "@/lib/i18n"

const GenSettingsHeader = () => {
  const t = useT()

  return (
    <span className="space-y-1">
      <span className="block text-sm font-semibold">
        {t("write.settings.title")}
      </span>
      <span className="block text-xs text-muted-foreground">
        {t("write.settings.description")}
      </span>
    </span>
  )
}

export default GenSettingsHeader
