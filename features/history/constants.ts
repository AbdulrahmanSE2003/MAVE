import { Filter, HistoryItem } from "./types"

/** Filter ids — labels are resolved at render time through the dictionary. */
export const filters: Filter[] = ["All", "LinkedIn", "Instagram"]

export const initialHistory: HistoryItem[] = [
  {
    id: 1,
    title: "history.items.consistency.title",
    excerpt: "history.items.consistency.excerpt",
    platform: "LinkedIn",
    date: "history.items.consistency.date",
    status: "Edited",
    color: "bg-[#E9E9F8]",
  },
  {
    id: 2,
    title: "history.items.maveIdea.title",
    excerpt: "history.items.maveIdea.excerpt",
    platform: "Instagram",
    date: "history.items.maveIdea.date",
    status: "Generated",
    color: "bg-[#F0E8D9]",
  },
  {
    id: 3,
    title: "history.items.buildingInPublic.title",
    excerpt: "history.items.buildingInPublic.excerpt",
    platform: "LinkedIn",
    date: "history.items.buildingInPublic.date",
    status: "Generated",
    color: "bg-[#E5EDE4]",
  },
  {
    id: 4,
    title: "history.items.lessPlanning.title",
    excerpt: "history.items.lessPlanning.excerpt",
    platform: "Instagram",
    date: "history.items.lessPlanning.date",
    status: "Edited",
    color: "bg-[#F1E5E5]",
  },
]
