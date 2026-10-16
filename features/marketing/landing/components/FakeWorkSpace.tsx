import Logo from "@/components/layout/Logo"
import { Badge } from "@/components/ui/badge"
import PostCard from "@/components/layout/PostCard"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight02Icon, Picture } from "@hugeicons/core-free-icons"
import { getI18n } from "@/lib/i18n/server"

const FakeContentArea = async () => {
  const { t, dict } = await getI18n()

  return (
    <div
      className={`flex h-full w-full flex-col gap-5 rounded-lg border border-border bg-muted p-4 shadow-xl max-md:flex-1 md:p-10`}
    >
      {/*Header*/}
      <div className={`flex-between border-b border-border pb-5`}>
        <span className={`font-semibold`}>
          {t("marketing.workspace.title")}
        </span>
        <Badge variant={"outline"} className={`p-3`}>
          <span
            className={`h-2 w-2 animate-pulse rounded-full bg-primary shadow-primary`}
          ></span>
          {t("marketing.workspace.generated")}
        </Badge>
      </div>

      {/*Content Area*/}
      <div className={`grid w-full gap-4 xl:grid-cols-2`}>
        <PostCard
          isCommercial
          platform={"LinkedIn"}
          content={dict.marketing.workspace.demoLinkedin}
        />
        <PostCard
          isCommercial
          className={`max-xl:hidden`}
          platform={"Instagram"}
          content={dict.marketing.workspace.demoInstagram}
        />
      </div>
      <Button
        disabled
        className={`flex items-center justify-between p-6 px-4 disabled:opacity-100`}
      >
        <div className={`flex-center gap-2 text-xs font-light`}>
          <HugeiconsIcon icon={Picture} />
          <span>{t("marketing.workspace.turnIntoVisual")}</span>
        </div>
        <div className={`flex-center gap-2`}>
          <span>{t("marketing.workspace.continue")}</span>
          <HugeiconsIcon icon={ArrowRight02Icon} />
        </div>
      </Button>
    </div>
  )
}

const FakeWorkSpace = () => {
  return (
    <div
      className={`flex h-full w-full items-center justify-start gap-4 rounded-lg bg-card md:p-2`}
    >
      {/*Fake Sidebar*/}
      <div
        className={`mb-auto flex h-full min-w-36 flex-col justify-start gap-4 px-3 py-1.5 max-md:hidden`}
      >
        {/*Fake Logo*/}
        <Logo />
        {/*Fake Tabs*/}
        <div className={`mt-12 flex flex-col gap-6`}>
          <span
            className={`h-2 w-full animate-pulse rounded-full bg-primary`}
          />
          <span className={`h-2 w-full animate-pulse rounded-full bg-ring`} />
          <span className={`h-2 w-full animate-pulse rounded-full bg-ring`} />
        </div>
      </div>
      <FakeContentArea />
    </div>
  )
}

export default FakeWorkSpace
