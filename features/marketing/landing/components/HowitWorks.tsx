import { Badge } from "@/components/ui/badge"
import { getI18n } from "@/lib/i18n/server"

const HowItWorks = async () => {
  const { t, dict } = await getI18n()
  const steps = dict.marketing.howItWorks.steps

  return (
    <div id="howitworks" className={`bg-accent/75 p-10`}>
      {/*Header*/}
      <div
        className={`flex-between items-end max-lg:flex-col max-lg:items-start`}
      >
        <Badge variant={"outline"} className={`p-3 uppercase`}>
          {t("marketing.howItWorks.badge")}
        </Badge>

        <h3
          className={`leading-tighter mt-12 max-w-xl text-5xl md:text-6xl lg:mt-24 lg:leading-tight xl:text-[4.3rem]`}
        >
          {t("marketing.howItWorks.headingLine1")} <br />{" "}
          {t("marketing.howItWorks.headingLine2")}
        </h3>
      </div>

      {/*Steps*/}
      <div
        className={`mt-12 grid gap-8 border-t-border md:mt-24 md:grid-cols-3 md:border-t`}
      >
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex flex-col items-start gap-4 border-border py-8 max-md:border-t max-md:last:border-b md:not-last:border-r`}
          >
            <span
              className={`text-xs font-light tracking-tighter text-muted-foreground`}
            >
              {step.id}
            </span>
            <h4 className={`mt-10 text-xl tracking-tighter`}>{step.title}</h4>
            <p
              className={`max-w-72 text-base text-stone-600/85 dark:text-stone-400/85`}
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowItWorks
