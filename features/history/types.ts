export type Platform = "LinkedIn" | "Instagram"
export type Filter = "All" | Platform

export type HistoryItem = {
  id: number
  title: string
  excerpt: string
  platform: Platform
  date: string
  status: "Generated" | "Edited"
  color: string
}
