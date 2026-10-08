"use client"

import Highlight from "@/components/layout/Highlight"
import StepIntro from "./StepIntro"

const Step3 = () => {
  return (
    <div className={`flex w-full flex-col gap-8`}>
      <StepIntro
        step="03"
        heading={
          <h2 className={`relative z-10 text-7xl font-medium`}>
            Teach{" "}
            <span className={`relative inline-block w-fit`}>
              <Highlight />
              MAVE.
            </span>
            <br /> your voice.{" "}
          </h2>
        }
        para="Add a few pieces of writing that feel like you, Posts or even long
        messages all work."
      />

      {/*  */}
    </div>
  )
}

export default Step3
