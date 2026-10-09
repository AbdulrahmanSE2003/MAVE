"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { providers } from "../constants"
import type { ProviderValue } from "../types"
import ProviderCard from "./ProviderCard"
import StepIntro from "./StepIntro"
import { motion } from "framer-motion"

interface Step2Props {
  provider: ProviderValue | null
  setProvider: (value: ProviderValue) => void
  apiKey: string
  setApiKey: (value: string) => void
}

const Step2 = ({ provider, setProvider, apiKey, setApiKey }: Step2Props) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="flex w-full flex-col gap-8"
    >
      <StepIntro
        step="02"
        heading={
          <h2 className={`text-5xl font-medium md:text-7xl`}>
            Connect your AI provider.
          </h2>
        }
        para="MAVE uses your own provider account to generate content. Your API key is encrypted and securely stored."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {providers.map((p) => (
          <ProviderCard
            provider={p}
            key={p.id}
            selected={provider === p.value}
            onClick={setProvider}
          />
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <Label htmlFor="api-key">API Key</Label>

        <Input
          id="api-key"
          type="password"
          value={apiKey}
          onChange={(event) => setApiKey(event.target.value)}
          placeholder="sk-proj••••••••••••••••••••"
        />

        <p className="paragraph text-xs">
          Your key belongs to you. MAVE never uses it for anything outside your
          workspace.
        </p>
      </div>
    </motion.div>
  )
}

export default Step2
