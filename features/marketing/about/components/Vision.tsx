import React from "react"
import { getI18n } from "@/lib/i18n/server"

const Vision = async () => {
  const { t } = await getI18n()

  return (
    <div className={`relative flex-center gap-8 p-8 py-16 max-md:flex-col`}>
      <span className="w-full space-y-4 self-start text-foreground/75 uppercase md:sticky md:top-48 md:w-1/3">
        {t("marketing.about.beliefs")}
      </span>
      <div
        className={`flex w-full flex-col gap-8 leading-snug tracking-tight md:w-3/5 md:gap-16`}
      >
        {/*First */}
        <p className={`text-2xl md:text-4xl`}>
          {t("marketing.about.visionIntro")}
        </p>
        {/*Second */}
        <div className={`flex flex-col gap-4`}>
          <h4 className={`text-2xl md:text-4xl`}>
            {t("marketing.about.clarityHeading")}{" "}
          </h4>
          <p className={`paragraph`}>{t("marketing.about.clarityBody1")}</p>
          <p className={`paragraph`}>{t("marketing.about.clarityBody2")}</p>
        </div>

        {/*Third */}
        <blockquote className="border-y border-border py-6 text-xl text-foreground sm:text-4xl md:py-10">
          {t("marketing.about.quote")}
        </blockquote>

        {/*Fourth */}
        <div className={`flex flex-col gap-4`}>
          <h4 className={`text-4xl`}>
            {t("marketing.about.howItWorksHeading")}
          </h4>
          <p className="paragraph">{t("marketing.about.howItWorksBody")}</p>
        </div>
      </div>
    </div>
  )
}

export default Vision
