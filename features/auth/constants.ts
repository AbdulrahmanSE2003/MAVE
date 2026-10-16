/**
 * Maps URL error codes (e.g. `?error=invalid_credentials`) to translation
 * keys. Rendered with `tm()` so the message lands in the active locale.
 */
export const AUTH_ERRORS: Record<string, string> = {
  account_not_linked: "auth.errors.accountNotLinked",

  invalid_credentials: "auth.errors.invalidCredentials",

  email_exists: "auth.errors.emailExists",

  user_already_exists: "auth.errors.userAlreadyExists",

  access_denied: "auth.errors.accessDenied",

  oauth_error: "auth.errors.oauthError",
}
