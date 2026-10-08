import { StaticImageData } from "next/image"
import { providerEnum } from "./schemas"

export type Steps = 1 | 2 | 3 | 4 | 5

export type ProviderValue = (typeof providerEnum)[number]

export interface Provider {
  id: number
  provider: string
  image: StaticImageData | null
  value: ProviderValue
}
