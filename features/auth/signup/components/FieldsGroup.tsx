import { Field, FieldError, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { EyeIcon, EyeOffIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useState } from "react"
import { Control, Controller } from "react-hook-form"
import { useI18n, useT } from "@/lib/i18n"

const fields = [
  {
    name: "name",
    type: "text",
    labelKey: "auth.signup.fields.name.label",
    placeholderKey: "auth.signup.fields.name.placeholder",
  },
  {
    name: "email",
    type: "email",
    labelKey: "auth.signup.fields.email.label",
    placeholderKey: "auth.signup.fields.email.placeholder",
  },
  {
    name: "password",
    type: "password",
    labelKey: "auth.signup.fields.password.label",
    placeholderKey: "auth.signup.fields.password.placeholder",
  },
  {
    name: "passwordConfirm",
    type: "password",
    labelKey: "auth.signup.fields.passwordConfirm.label",
    placeholderKey: "auth.signup.fields.passwordConfirm.placeholder",
  },
] as const

const GroupField = ({
  control,
  isSubmitting,
}: {
  isSubmitting: boolean
  control: Control<{
    name: string
    email: string
    password: string
    passwordConfirm: string
  }>
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const t = useT()
  const { tm } = useI18n()

  return (
    <FieldGroup className="gap-3">
      {fields.map((fieldConfig) => (
        <Controller
          key={fieldConfig.name}
          name={fieldConfig.name}
          control={control}
          render={({ field, fieldState }) => {
            const isPassword =
              fieldConfig.name === "password" ||
              fieldConfig.name === "passwordConfirm"

            return (
              <Field
                data-invalid={fieldState.invalid}
                className="gap-0 space-y-1.5"
              >
                <Label className={`text-sm capitalize`}>
                  {t(fieldConfig.labelKey)}
                </Label>
                <div className="relative">
                  <Input
                    {...field}
                    id={fieldConfig.name}
                    type={
                      isPassword && showPassword ? "text" : fieldConfig.type
                    }
                    placeholder={t(fieldConfig.placeholderKey)}
                    className=""
                    aria-invalid={fieldState.invalid}
                    disabled={isSubmitting}
                  />

                  {isPassword && (
                    <button
                      type="button"
                      onClick={() => setShowPassword((current) => !current)}
                      className="absolute end-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                      aria-label={
                        showPassword
                          ? t("auth.hidePassword")
                          : t("auth.showPassword")
                      }
                    >
                      <HugeiconsIcon
                        icon={showPassword ? EyeOffIcon : EyeIcon}
                        size={18}
                      />
                    </button>
                  )}
                </div>

                {fieldState.invalid && (
                  <FieldError
                    className={`text-xs`}
                    errors={
                      fieldState.error
                        ? [{ message: tm(fieldState.error.message ?? "") }]
                        : []
                    }
                  />
                )}
              </Field>
            )
          }}
        />
      ))}
    </FieldGroup>
  )
}

export default GroupField
