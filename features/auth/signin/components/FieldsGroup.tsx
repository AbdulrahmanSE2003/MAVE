import { Field, FieldError, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { EyeIcon, EyeOffIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useState } from "react"
import { Control, Controller } from "react-hook-form"

const fields = [
  {
    name: "email",
    type: "email",
    placeholder: "Email",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
  },
] as const

const GroupField = ({
  control,
  isSubmitting,
}: {
  isSubmitting: boolean
  control: Control<{
    email: string
    password: string
  }>
}) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <FieldGroup className="gap-3">
      {fields.map((fieldConfig) => (
        <Controller
          key={fieldConfig.name}
          name={fieldConfig.name}
          control={control}
          render={({ field, fieldState }) => {
            const isPassword = fieldConfig.name === "password"
            return (
              <Field
                data-invalid={fieldState.invalid}
                className="gap-0 space-y-1.5"
              >
                <Label className={`text-sm capitalize`}>
                  {fieldConfig.name}
                </Label>
                <div className="relative">
                  <Input
                    {...field}
                    id={fieldConfig.name}
                    type={
                      isPassword && showPassword ? "text" : fieldConfig.type
                    }
                    placeholder={fieldConfig.placeholder}
                    className=""
                    aria-invalid={fieldState.invalid}
                    disabled={isSubmitting}
                  />

                  {isPassword && (
                    <button
                      type="button"
                      onClick={() => setShowPassword((current) => !current)}
                      className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
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
                        ? [{ message: fieldState.error.message }]
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
