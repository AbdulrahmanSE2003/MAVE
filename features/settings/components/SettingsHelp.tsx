import { getI18n } from "@/lib/i18n/server"

const SettingsHelp = async () => {
  const { t } = await getI18n()

  return (
    <section className="space-y-4 border-t pt-6">
      <div className="flex-1">
        <h2 className="text-sm font-medium">{t("settings.help.title")}</h2>
        <p className="mt-1 text-xs leading-5 text-muted-foreground">
          {t("settings.help.description")}
        </p>
      </div>
    </section>
  )
}

export default SettingsHelp
