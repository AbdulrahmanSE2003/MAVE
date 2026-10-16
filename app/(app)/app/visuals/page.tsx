"use client"

import VisualContent from "@/features/visuals/components/VisualContent"
import VisualsFooter from "@/features/visuals/components/VisualsFooter"
import VisualsHeader from "@/features/visuals/components/VisualsHeader"

export default function VisualsPage() {
  return (
    <main className="mx-auto w-full max-w-7xl space-y-8 p-5 md:p-8">
      <VisualsHeader />

      <VisualContent />

      <VisualsFooter />
    </main>
  )
}
