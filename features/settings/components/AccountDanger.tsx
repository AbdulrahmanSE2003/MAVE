"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useT } from "@/lib/i18n"
import { SectionHeading } from "./SettingsPrimitives"
import { ConfirmationDialog } from "@/components/ui/confirmation-dialog"
import { SelectedAction } from "../types"
import { DANGER_ACTIONS } from "../constants"

export default function AccountDanger() {
  const t = useT()
  const [selectedAction, setSelectedAction] = useState<SelectedAction>(null)

  const closeDialog = () => setSelectedAction(null)

  return (
    <section id="danger" className="space-y-5">
      <SectionHeading
        title={t("settings.dangerZone.title")}
        description={t("settings.dangerZone.description")}
      />

      <div className="rounded-xl border border-destructive/30 p-5 sm:p-6">
        {DANGER_ACTIONS.map((action, index) => (
          <div key={action.id}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">
                  {t(action.titleKey as Parameters<typeof t>[0])}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t(action.descriptionKey as Parameters<typeof t>[0])}
                </p>
              </div>

              <Button
                type="button"
                variant={action.variant}
                size="sm"
                className="shrink-0"
                onClick={() => setSelectedAction(action)}
              >
                {t(action.buttonKey as Parameters<typeof t>[0])}
              </Button>
            </div>

            {index < DANGER_ACTIONS.length - 1 && (
              <Separator className="my-4 bg-destructive/10" />
            )}
          </div>
        ))}
      </div>

      {selectedAction && (
        <ConfirmationDialog
          open={true}
          onOpenChange={(open) => {
            if (!open) closeDialog()
          }}
          title={t(
            selectedAction.confirmationTitleKey as Parameters<typeof t>[0]
          )}
          description={t(
            selectedAction.confirmationDescriptionKey as Parameters<typeof t>[0]
          )}
          confirmLabel={t(
            selectedAction.confirmationButtonKey as Parameters<typeof t>[0]
          )}
          cancelLabel={t("settings.dangerZone.cancel")}
          onConfirm={closeDialog}
        />
      )}
    </section>
  )
}
