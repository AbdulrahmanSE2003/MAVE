"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import WriteHeader from "@/features/write/components/WriteHeader"
import WhatOnYourMind from "@/features/write/components/WhatOnYourMind"
import PlatformSelector from "./PlatformSelector"
import { ContentType } from "@/lib/generated/prisma/enums"
import GenerationSettings from "./GenerationSettings"
import { SparklesIcon } from "@hugeicons/core-free-icons"

export default function WriteLap() {
  const [idea, setIdea] = useState("")
  const [contentType, setContentType] = useState<ContentType>("Linkedin Post")

  return (
    <div>
      <WriteHeader />

      <section className="mt-5 rounded-2xl border bg-card p-5 shadow-sm sm:p-7">
        <WhatOnYourMind idea={idea} setIdea={setIdea} />

        <PlatformSelector
          contentType={contentType}
          setContentType={setContentType}
        />

        <GenerationSettings />

        <div className="mt-6 flex flex-col gap-4 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            Your idea, your voice.
          </p>

          <Button
            type="button"
            size="lg"
            disabled={!idea.trim()}
            className="gap-2"
            onClick={() => {
              // Connect generation to the existing flow later.
            }}
          >
            <HugeiconsIcon icon={SparklesIcon} className="size-4" />
            Generate
          </Button>
        </div>
      </section>
    </div>
  )
}
