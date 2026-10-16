export type EditorState = {
  canUndo: boolean
  canRedo: boolean
} | null

export interface Goal {
  value: string
  label: string
}
