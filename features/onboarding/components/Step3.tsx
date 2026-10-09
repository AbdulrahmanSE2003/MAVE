"use client"

import Highlight from "@/components/layout/Highlight"
import StepIntro from "./StepIntro"
import PostExample from "./PostExample"
import { Dispatch, SetStateAction } from "react"
import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { PlusSignCircleFreeIcons } from "@hugeicons/core-free-icons"
import { motion } from "framer-motion"

const Step3 = ({
  examples,
  setExamples,
}: {
  examples: string[]
  setExamples: Dispatch<SetStateAction<string[]>>
}) => {
  const updateExample = (index: number, value: string) => {
    setExamples((prev) => {
      const next = [...prev]
      next[index] = value
      return next
    })
  }

  const addExample = () => {
    if (examples.length < 5) {
      setExamples((prev) => [...prev, ""])
    }
  }

  const removeExample = (index: number) => {
    if (examples.length > 1) {
      setExamples((prev) => prev.filter((_, i) => i !== index))
    }
  }

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={`flex w-full flex-col gap-8`}
    >
      <StepIntro
        step="03"
        heading={
          <h2 className={`relative z-10 text-5xl font-medium md:text-7xl`}>
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

      {/* Examples */}
      <div className={`flex flex-col gap-3`}>
        {/* Example Header */}
        <div className={`flex-between`}>
          <span className={`text-sm`}>
            Writing examples{" "}
            <span className={`text-xs text-primary-foreground`}>
              (optional)
            </span>
          </span>
          <span className={`font-medium`}> {examples.length}/5 examples</span>
        </div>
        {/* Textarea */}
        {examples.map((content, i) => (
          <PostExample
            onDelete={removeExample}
            isDisabled={examples.length === 1}
            key={i}
            num={i + 1}
            value={content}
            onChange={(value) => updateExample(i, value)}
          />
        ))}
      </div>
      {/* Add More */}
      {examples.length < 5 && (
        <Button
          type="button"
          variant="outline"
          className={`w-fit`}
          onClick={addExample}
        >
          Add another example
          <HugeiconsIcon icon={PlusSignCircleFreeIcons} />
        </Button>
      )}
    </motion.div>
  )
}

export default Step3
