import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"
import { getI18n } from "@/lib/i18n/server"

const Hero = async () => {
  const { t } = await getI18n()

  return (
    <div
      id="hero"
      className="relative flex min-h-svh w-full items-center justify-start p-6"
    >
      {/*Hero Intro*/}
      <div
        className={`flex-col gap-1 [&_h1]:text-6xl sm:[&_h1]:text-8xl [&_h2]:text-6xl sm:[&_h2]:text-8xl`}
      >
        <Badge className={`mb-2 p-3 uppercase`} variant={"outline"}>
          {t("marketing.hero.badge")}
        </Badge>
        <h1 className={`font-bold`}>{t("marketing.hero.titleLine1")}</h1>
        <h2 className={`font-normal`}>{t("marketing.hero.titleLine2")}</h2>
        <p className={`mt-3 text-muted-foreground sm:max-w-md`}>
          {t("marketing.hero.description")}
        </p>

        {/*Hero Buttons*/}
        <div className={`mt-8 flex gap-4`}>
          <Button asChild size={"lg"}>
            <Link href={"/signup"}>
              {t("marketing.startCreating")}
              <HugeiconsIcon icon={ArrowRight02Icon} />
            </Link>
          </Button>
          <Button asChild size={"lg"} variant="outline">
            <Link href="#howitworks">{t("marketing.hero.seeHowItWorks")}</Link>
          </Button>
        </div>
      </div>

      <div
        className={`absolute right-4 bottom-6 flex items-center gap-2 text-muted-foreground uppercase max-sm:text-xs`}
      >
        <span>{t("marketing.hero.flow.idea")}</span>
        <HugeiconsIcon size={18} icon={ArrowRight02Icon} />
        <span>{t("marketing.hero.flow.writingStyle")}</span>
        <HugeiconsIcon size={18} icon={ArrowRight02Icon} />
        <span>{t("marketing.hero.flow.content")}</span>
        <HugeiconsIcon size={18} icon={ArrowRight02Icon} />
        <span
          className={`rounded-full bg-primary p-3 py-1.5 font-semibold text-black`}
        >
          {t("marketing.hero.flow.visual")}
        </span>
      </div>
    </div>
  )
}

export default Hero
