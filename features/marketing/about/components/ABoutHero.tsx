import Highlight from "@/components/layout/Highlight"
import { cn } from "cn"
import { getI18n } from "@/lib/i18n/server"

const AboutHero = async () => {
  const { t } = await getI18n()

  return (
    <div className="relative flex min-h-[70svh] w-full flex-col items-start justify-end gap-10 p-8 md:py-16">
      <span className={cn(`text-xs font-medium tracking-widest uppercase`)}>
        {t("marketing.about.label")}
      </span>

      <h1 className={`max-w-4xl text-5xl leading-none md:text-[5.5rem]`}>
        {t("marketing.about.heroLine1")}
        <br />{" "}
        <span className={`relative inline-block w-fit`}>
          <Highlight />
          {t("marketing.about.heroHighlight")}
        </span>{" "}
        {t("marketing.about.heroLine2")}
      </h1>
    </div>
  )
}

export default AboutHero
