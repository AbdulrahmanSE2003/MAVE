"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { providers } from "../constants"
import type { ProviderValue } from "../types"
import ProviderCard from "./ProviderCard"
import StepIntro from "./StepIntro"

interface Step2Props {
  provider: ProviderValue | null
  setProvider: (value: ProviderValue) => void
  apiKey: string
  setApiKey: (value: string) => void
}

const Step2 = ({ provider, setProvider, apiKey, setApiKey }: Step2Props) => {
  return (
    <div className="flex w-full flex-col gap-8">
      <StepIntro
        step="02"
        heading={
          <h2 className={`text-7xl font-medium`}>Connect your AI provider.</h2>
        }
        para="MAVE uses your own provider account to generate content. Your API key is encrypted and securely stored."
      />

      <div className="grid grid-cols-2 gap-4">
        {providers.map((p) => (
          <ProviderCard
            provider={p}
            key={p.id}
            selected={provider === p.value}
            onClick={setProvider}
          />
        ))}
      </div>

      <div className="flex flex-col gap-1">
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
    </div>
  )
}

export default Step2
