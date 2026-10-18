import { getI18n } from "@/lib/i18n/server"
import { Field, inputClass, SectionHeading } from "./SettingsPrimitives"
import { getCurrentSessionUser } from "@/lib/users/current-user"
import { formatUserName } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import AccountForm from "./AccountForm"

export default async function AccountSection() {
  const { t } = await getI18n()
  const user = await getCurrentSessionUser()

  return (
    <section id="account" className="space-y-5">
      <SectionHeading
        title={t("settings.account.title")}
        description={t("settings.account.description")}
      />

      <AccountForm name={user?.name ?? ""} email={user?.email ?? ""} />
    </section>
  )
}
