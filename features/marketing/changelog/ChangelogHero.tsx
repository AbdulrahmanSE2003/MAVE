import { Badge } from "@/components/ui/badge"
import { getI18n } from "@/lib/i18n/server"

const ChangelogHero = async () => {
  const { t } = await getI18n()

  return (
    <div
      id="hero"
      className="relative flex min-h-[80svh] w-full items-center justify-start p-6"
    >
      {/*Hero Intro*/}
      <div
        className={`flex-col gap-1 [&_h1]:text-6xl sm:[&_h1]:text-8xl [&_h2]:text-6xl sm:[&_h2]:text-8xl`}
      >
        <Badge className={`mb-2 p-3 uppercase`} variant={"outline"}>
          {t("marketing.changelog.badge")}{" "}
        </Badge>
        <h1 className={`max-w-xl`}>{t("marketing.changelog.heading")}</h1>
        <p className={`mt-6 max-w-lg paragraph text-base`}>
          {t("marketing.changelog.description")}
        </p>
      </div>
    </div>
  )
}

export default ChangelogHero
