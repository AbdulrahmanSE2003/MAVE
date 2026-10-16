import { getI18n } from "@/lib/i18n/server"

const SettingsHeader = async () => {
  const { t } = await getI18n()

  return (
    <header className="space-y-2">
      <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
        {t("settings.header.eyebrow")}
      </p>

      <h1 className="text-3xl font-semibold tracking-tight">
        {t("settings.header.title")}
      </h1>

      <p className="max-w-lg text-sm leading-6 text-muted-foreground">
        {t("settings.header.description")}
      </p>
    </header>
  )
}

export default SettingsHeader
