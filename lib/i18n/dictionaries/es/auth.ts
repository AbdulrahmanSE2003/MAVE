import type { Auth } from "../en/auth"

export const auth: Auth = {
  layout: {
    taglineLine1: "Tus ideas,",
    taglineLine2: "tu voz.",
    intro: "Un estudio personal para contenido que suena a ti.",
    copyright: "© {year} MAVE",
  },

  signin: {
    eyebrow: "Bienvenido de vuelta",
    title: "Inicia sesión en MAVE.",
    subtitle: "Retoma donde lo dejaste.",
    submit: "Iniciar sesión",
    submitting: "Iniciando sesión...",
    noAccount: "¿No tienes una cuenta?",
    createAccount: "Crear cuenta",
    forgotPassword: "¿Olvidaste tu contraseña?",
    fields: {
      email: {
        label: "Correo electrónico",
        placeholder: "Correo electrónico",
      },
      password: {
        label: "Contraseña",
        placeholder: "Contraseña",
      },
    },
  },

  signup: {
    eyebrow: "CREA TU CUENTA",
    title: "Empieza a crear.",
    subtitle: "Tu primera idea está más cerca de lo que crees.",
    submit: "Crear cuenta",
    submitting: "Creando cuenta...",
    haveAccount: "¿Ya tienes una cuenta?",
    signIn: "Iniciar sesión",
    fields: {
      name: {
        label: "Nombre",
        placeholder: "Tu nombre",
      },
      email: {
        label: "Correo electrónico",
        placeholder: "someone@example.com",
      },
      password: {
        label: "Contraseña",
        placeholder: "Mínimo 8 caracteres",
      },
      passwordConfirm: {
        label: "Confirmar contraseña",
        placeholder: "Confirmar contraseña",
      },
    },
  },

  separator: {
    or: "O",
  },

  google: {
    continue: "Continuar con Google",
    signingIn: "Iniciando sesión con Google",
    error: "Error al iniciar sesión con Google: {error}",
  },

  showPassword: "Mostrar contraseña",
  hidePassword: "Ocultar contraseña",

  validation: {
    emailInvalid: "Introduce un correo electrónico válido.",
    passwordTooShort: "La contraseña debe tener al menos 8 caracteres.",
    nameTooShort: "El nombre debe tener al menos 2 caracteres.",
    passwordConfirmTooShort:
      "La confirmación de la contraseña debe tener al menos 8 caracteres.",
    passwordsDoNotMatch: "Las contraseñas no coinciden.",
  },

  errors: {
    accountNotLinked:
      "Esta cuenta de Google no está vinculada a una cuenta de MAVE existente.",
    invalidCredentials: "El correo o la contraseña no son correctos.",
    emailExists: "Ya existe una cuenta con este correo electrónico.",
    userAlreadyExists: "Ya existe una cuenta con este correo electrónico.",
    accessDenied: "Se canceló el inicio de sesión con Google.",
    oauthError: "No se pudo iniciar sesión con Google. Inténtalo de nuevo.",
    signInFailed: "Algo salió mal al iniciar sesión. Inténtalo de nuevo.",
    unexpected: "Algo salió mal. Inténtalo de nuevo.",
    failedToCreateAccount: "No se pudo crear tu cuenta.",
  },
}
