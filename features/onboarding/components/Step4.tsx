import StepIntro from "./StepIntro"
import { cn } from "@/lib/utils"
import TasteLap from "./TasteLap"
const Step5 = () => {
  return (
    <div className={`flex-between gap-6`}>
      <div className={`flex w-2/3 flex-col items-start gap-8`}>
        <StepIntro
          step="04"
          heading={
            <h2 className={cn(`relative z-10 text-7xl`)}>
              Select your visual style.
            </h2>
          }
          para="Show MAVE what feels like you. Pick what catches your eye. "
        />
      </div>
      <TasteLap />
    </div>
  )
}

export default Step5
