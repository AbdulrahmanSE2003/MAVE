import { z } from "zod"

export const signupSchema = z
  .object({
    name: z.string().trim().min(2, "Name must be at least 2 characters."),
    email: z.email("Please enter a valid email address."),
    password: z.string().min(8, "Password must be at least 8 characters."),
    passwordConfirm: z
      .string()
      .min(8, "Password confirmation must be at least 8 characters."),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords do not match.",
    path: ["passwordConfirm"],
  })

export type SignupFormValues = z.infer<typeof signupSchema>
