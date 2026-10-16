import { z } from "zod"

export const signinSchema = z.object({
  email: z.email("auth.validation.emailInvalid"),
  password: z.string().min(8, "auth.validation.passwordTooShort"),
})

export type SigninFormValues = z.infer<typeof signinSchema>
