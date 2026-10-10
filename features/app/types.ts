export interface ShortcutGroup {
  category: string
  items: { label: string; keys: string[] }[]
}

export enum Platform {
  LINKEDIN = "Linkedin",
  INSTAGRAM = "Instagram",
}
