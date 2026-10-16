import { Filter, HistoryItem } from "./types"

export const filters: Filter[] = ["All", "LinkedIn", "Instagram"]

export const initialHistory: HistoryItem[] = [
  {
    id: 1,
    title: "Consistency beats motivation",
    excerpt:
      "You don't need to feel motivated every day. You need a system that keeps you moving, even when you don't.",
    platform: "LinkedIn",
    date: "Oct 12, 2026",
    status: "Edited",
    color: "bg-[#E9E9F8]",
  },
  {
    id: 2,
    title: "The idea behind MAVE",
    excerpt:
      "Your ideas deserve to sound like you. Not like another AI-generated post that everyone has already seen.",
    platform: "Instagram",
    date: "Oct 11, 2026",
    status: "Generated",
    color: "bg-[#F0E8D9]",
  },
  {
    id: 3,
    title: "What I learned building in public",
    excerpt:
      "Building in public isn't about sharing every little thing. It's about sharing what you learn along the way.",
    platform: "LinkedIn",
    date: "Oct 10, 2026",
    status: "Generated",
    color: "bg-[#E5EDE4]",
  },
  {
    id: 4,
    title: "Less planning, more building",
    excerpt:
      "Sometimes the fastest way to find the right answer is to build the smallest version and learn from it.",
    platform: "Instagram",
    date: "Oct 8, 2026",
    status: "Edited",
    color: "bg-[#F1E5E5]",
  },
]
