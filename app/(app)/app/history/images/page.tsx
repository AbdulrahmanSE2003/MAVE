import { getI18n } from "@/lib/i18n/server"

const page = async () => {
  const { t } = await getI18n()

  return <div>{t("history.stubs.page")}</div>
}

export default page
