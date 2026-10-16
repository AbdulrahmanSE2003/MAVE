import { goalValues, Tones } from "./constants"

export type EditorState = {
  canUndo: boolean
  canRedo: boolean
} | null

export type Tone = (typeof Tones)[number]

export type GoalValue = "educate" | "experience" | "story" | "discussion"

export interface Goal {
  value: GoalValue
  label: string
}
