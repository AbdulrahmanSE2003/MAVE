export type DangerAction = {
  id: string
  titleKey: string
  descriptionKey: string
  buttonKey: string
  variant: "outline" | "destructive"
  confirmationTitleKey: string
  confirmationDescriptionKey: string
  confirmationButtonKey: string
}

export type SelectedAction = DangerAction | null
