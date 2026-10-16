export const auth = {
  layout: {
    taglineLine1: "Your ideas,",
    taglineLine2: "your voice.",
    intro: "A personal studio for content that sounds like you.",
    copyright: "© {year} MAVE",
  },

  signin: {
    eyebrow: "welcome back",
    title: "Sign in to MAVE.",
    subtitle: "Pick up where you left off.",
    submit: "Sign in",
    submitting: "Signing in...",
    noAccount: "Don't have an account?",
    createAccount: "Create account",
    forgotPassword: "Forgot password?",
    fields: {
      email: {
        label: "email",
        placeholder: "Email",
      },
      password: {
        label: "password",
        placeholder: "Password",
      },
    },
  },

  signup: {
    eyebrow: "CREATE YOUR ACCOUNT",
    title: "Start creating.",
    subtitle: "Your first idea is closer than you think.",
    submit: "Create account",
    submitting: "Creating account...",
    haveAccount: "Already have an account?",
    signIn: "Sign In",
    fields: {
      name: {
        label: "name",
        placeholder: "Your Name",
      },
      email: {
        label: "email",
        placeholder: "someone@example.com",
      },
      password: {
        label: "password",
        placeholder: "At least 8 characters",
      },
      passwordConfirm: {
        label: "passwordConfirm",
        placeholder: "Confirm password",
      },
    },
  },

  separator: {
    or: "OR",
  },

  google: {
    continue: "Continue with Google",
    signingIn: "Signing in with Google",
    error: "Google sign-in error: {error}",
  },

  showPassword: "Show password",
  hidePassword: "Hide password",

  validation: {
    emailInvalid: "Please enter a valid email address.",
    passwordTooShort: "Password must be at least 8 characters.",
    nameTooShort: "Name must be at least 2 characters.",
    passwordConfirmTooShort:
      "Password confirmation must be at least 8 characters.",
    passwordsDoNotMatch: "Passwords do not match.",
  },

  errors: {
    accountNotLinked:
      "This Google account is not linked to an existing MAVE account.",
    invalidCredentials: "The email or password is incorrect.",
    emailExists: "An account with this email already exists.",
    userAlreadyExists: "An account with this email already exists.",
    accessDenied: "Google sign-in was cancelled.",
    oauthError: "Google sign-in failed. Please try again.",
    signInFailed:
      "Something went wrong while signing you in. Please try again.",
    unexpected: "Something went wrong. Please try again.",
    failedToCreateAccount: "Failed to create your account.",
  },
}

export type Auth = typeof auth
