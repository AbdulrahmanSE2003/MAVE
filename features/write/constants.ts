import { Goal } from "./types";

export const goalValues = [
  "educate",
  "experience",
  "story",
  "discussion",
] as const;


export const goals: Goal[] = [
  { value: "educate", label: "Educate" },
  { value: "experience", label: "Share experience" },
  { value: "story", label: "Tell a story" },
  { value: "discussion", label: "Start a discussion" },
];

export const Tones = [
  "My usual voice",
  "Friendly and conversational",
  "Professional and clear",
  "Bold and opinionated",
  "Educational and practical",
] as const;
