import { Badge } from "@/components/ui/badge"

const steps = [
  {
    id: "01",
    title: "Add your voice",
    description:
      "Add up to five examples of your writing. MAVE learns your rhythm, vocabulary, and point of view.",
  },
  {
    id: "02",
    title: "Bring an idea",
    description:
      "Write whatever you want to talk about. A one sentence is enough to get you started.",
  },
  {
    id: "03",
    title: "Make it yours",
    description:
      "Generate, edit, and create a visual. That's all you need to do. You always have the final word.",
  },
]

const HowItWorks = () => {
  return (
    <div id="howitworks" className={`bg-accent/75 p-10`}>
      {/*Header*/}
      <div
        className={`flex-between items-end max-lg:flex-col max-lg:items-start`}
      >
        <Badge variant={"outline"} className={`p-3 uppercase`}>
          How it works
        </Badge>

        <h3
          className={`leading-tighter mt-12 max-w-xl text-5xl md:text-6xl lg:mt-24 lg:leading-tight xl:text-[4.3rem]`}
        >
          From thought <br /> to something real.
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
