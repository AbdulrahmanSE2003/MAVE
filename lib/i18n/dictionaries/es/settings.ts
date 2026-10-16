import type { Settings } from "../en/settings"

export const settings: Settings = {
  appearance: {
    title: "Apariencia",
    description: "Personaliza el aspecto y la sensación de MAVE.",

    theme: {
      label: "Tema de la interfaz",
      hint: "Elige claro, oscuro o seguir la preferencia de tu sistema.",
      options: {
        light: "Claro",
        dark: "Oscuro",
        system: "Sistema",
      },
    },

    font: {
      label: "Familia tipográfica",
      hint: "Cambia la tipografía en todo tu espacio de trabajo. Tu elección se guarda en este dispositivo.",
      options: {
        sans: "Sans-serif",
        serif: "Serif",
      },
    },

    language: {
      label: "Idioma de la interfaz",
      hint: "Elige el idioma que se usa en toda MAVE.",
    },
  },

  header: {
    eyebrow: "Tu espacio de trabajo / Ajustes",
    title: "Ajustes",
    description:
      "Todo lo que necesitas para personalizar tu espacio de trabajo MAVE y tu experiencia de escritura.",
  },

  sectionsNavLabel: "Secciones de ajustes",

  sections: {
    account: "Cuenta",
    ai: "Proveedor de IA",
    writing: "Preferencias de escritura",
    appearance: "Apariencia",
  },

  account: {
    title: "Cuenta",
    description: "Tu perfil y la información de tu cuenta.",
    profileName: "Usuario de MAVE",
    profileSubtitle: "El perfil de tu espacio de trabajo",
    previewBadge: "Vista previa",
    displayName: {
      label: "Nombre para mostrar",
      placeholder: "Tu nombre",
    },
    email: {
      label: "Correo electrónico",
      placeholder: "Tu correo electrónico",
    },
    note: "La información de la cuenta se conectará a tu perfil de autenticación más adelante.",
  },

  ai: {
    title: "Proveedor de IA",
    description: "Elige cómo generará MAVE tu contenido.",
    plannedBadge: "Planificado",
    openaiDescription: "Usa tu propia clave API para generar contenido.",
    provider: {
      label: "Proveedor",
      hint: "Se podrán añadir más proveedores en una versión posterior.",
    },
    apiKey: {
      label: "Clave API",
      hint: "La gestión de claves API no está disponible en esta vista previa. No se guarda ninguna clave.",
      placeholder: "Añade tu clave API más adelante",
    },
    securityNote:
      "Las credenciales de API deben gestionarse de forma segura y nunca exponerse en el código del cliente.",
  },

  writing: {
    title: "Preferencias de escritura",
    description: "Elige la configuración predeterminada de tu contenido.",
    language: {
      label: "Idioma predeterminado",
      hint: "Se usa como idioma preferido al crear contenido nuevo.",
      options: {
        en: "Inglés",
        ar: "Árabe",
        es: "Español",
      },
    },
    platform: {
      label: "Plataforma predeterminada",
      hint: "La plataforma preseleccionada al iniciar una publicación nueva.",
    },
    styleReferences: {
      title: "Referencias de estilo de escritura",
      description:
        "Añade publicaciones de ejemplo para ayudar a MAVE a entender tu voz.",
    },
  },

  help: {
    title: "¿Necesitas ayuda?",
    description:
      "Los ajustes de cuenta y del proveedor de IA son vistas previas por ahora. Las preferencias de fuente, tema e idioma de la interfaz se guardan localmente cuando corresponde.",
  },
}
