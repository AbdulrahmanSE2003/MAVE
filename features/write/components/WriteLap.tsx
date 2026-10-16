"use client"

import { useCallback, useEffect, useState } from "react"
import { toast } from "sonner"

import WriteHeader from "@/features/write/components/WriteHeader"
import WhatOnYourMind from "@/features/write/components/WhatOnYourMind"
import PlatformSelector from "./PlatformSelector"
import GenerationSettings from "./GenerationSettings"
import WriteLapFooter from "./WriteLapFooter"

import { ContentType } from "@/lib/generated/prisma/enums"
import { Goal } from "../types"
import { Tones } from "../constants"
import { generateContent } from "@/features/generation/actions"
import { useRouter } from "next/navigation"

export default function WriteLap() {
  const [idea, setIdea] = useState("")
  const [contentType, setContentType] = useState<ContentType>("LINKEDIN_POST")
  const [goal, setGoal] = useState<Goal["value"]>("educate")
  const [tone, setTone] = useState<(typeof Tones)[number]>("My usual voice")
  const [context, setContext] = useState("")
  const router = useRouter()

  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = useCallback(async () => {
    if (!idea.trim() || isGenerating) return

    setIsGenerating(true)

    try {
      const result = await generateContent({
        idea: idea.trim(),
        contentType,
        goal,
        tone,
        context: context.trim(),
      })

      if (!result.success) {
        toast.error(result.error)
        return
      }

      toast.success("Your content is ready.")
      router.push(`/app/write/${result.data.postId}`)
    } catch {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsGenerating(false)
    }
  }, [idea, isGenerating, contentType, goal, tone, context, router])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Enter" && event.ctrlKey && !event.repeat) {
        event.preventDefault()
        void handleGenerate()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleGenerate])

  return (
    <div>
      <WriteHeader />

      <section className="mt-5 rounded-2xl border bg-card p-5 shadow-sm sm:p-7">
        <WhatOnYourMind idea={idea} setIdea={setIdea} />

        <PlatformSelector
          contentType={contentType}
          setContentType={setContentType}
        />

        <GenerationSettings
          goal={goal}
          setGoal={setGoal}
          tone={tone}
          setTone={setTone}
          context={context}
          setContext={setContext}
        />

        <WriteLapFooter
          idea={idea}
          isGenerating={isGenerating}
          onGenerate={handleGenerate}
        />
      </section>
    </div>
  )
}
