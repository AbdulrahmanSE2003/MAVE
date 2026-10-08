import { ReactNode } from "react"

const StepIntro = ({
  step,
  heading,
  para,
}: {
  step: string
  heading: ReactNode
  para: string
}) => {
  return (
    <>
      <span className={`text-xs font-medium`}>{step}</span>

      {heading}
      <p className={`max-w-md paragraph`}>{para}</p>
    </>
  )
}

export default StepIntro
