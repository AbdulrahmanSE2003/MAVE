import { z } from "zod"

export const signupSchema = z
  .object({
    name: z.string().trim().min(2, "auth.validation.nameTooShort"),
    email: z.email("auth.validation.emailInvalid"),
    password: z.string().min(8, "auth.validation.passwordTooShort"),
    passwordConfirm: z
      .string()
      .min(8, "auth.validation.passwordConfirmTooShort"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "auth.validation.passwordsDoNotMatch",
    path: ["passwordConfirm"],
  })

export type SignupFormValues = z.infer<typeof signupSchema>
