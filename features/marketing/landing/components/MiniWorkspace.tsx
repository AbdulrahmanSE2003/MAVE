import FakeWorkSpace from "./FakeWorkSpace"
import { getI18n } from "@/lib/i18n/server"

const MiniWorkspace = async () => {
  const { t } = await getI18n()

  return (
    <div
      id="miniworkspace"
      className={`flex min-h-svh w-full flex-col gap-6 bg-black p-7 py-7 md:p-10`}
    >
      <div
        className={`flex-between text-xs tracking-widest text-muted-foreground uppercase`}
      >
        <span>{t("marketing.workspace.insideMave")}</span>
        <span>{t("marketing.workspace.title")}</span>
      </div>
      <FakeWorkSpace />
    </div>
  )
}

export default MiniWorkspace
