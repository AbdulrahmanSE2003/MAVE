"use client"

import { useState } from "react"

import WriteHeader from "@/features/write/components/WriteHeader"
import WhatOnYourMind from "@/features/write/components/WhatOnYourMind"
import PlatformSelector from "./PlatformSelector"
import { ContentType } from "@/lib/generated/prisma/enums"
import GenerationSettings from "./GenerationSettings"
import { Goal } from "../types"
import { Tones } from "../constants"
import WriteLapFooter from "./WriteLapFooter"

export default function WriteLap() {
  const [idea, setIdea] = useState("")
  const [contentType, setContentType] = useState<ContentType>("Linkedin Post")
  const [goal, setGoal] = useState<Goal["value"]>("educate")
  const [tone, setTone] = useState<(typeof Tones)[number]>("My usual voice")
  const [context, setContext] = useState("")
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

        {/* Footer */}
        {/* TODO */}
        <WriteLapFooter idea={idea} />
      </section>
    </div>
  )
}
