import type { Onboarding } from "../en/onboarding"

export const onboarding: Onboarding = {
  header: {
    timeHint: "Tarda unos 2 minutos",
    setup: "CONFIGURACIÓN ·",
    ofTotal: "DE 5",
  },

  steps: {
    intro: {
      welcomeTo: "Te damos la bienvenida a",
      paragraph:
        "Un espacio creativo diseñado con un solo propósito: que tus ideas suenen más a ti.",
      idea: "Tengo una idea.",
      understandsVoice: "MAVE entiende mi voz.",
      makesMine: "La hago mía.",
    },
    provider: {
      heading: "Conecta tu proveedor de IA.",
      paragraph:
        "MAVE usa tu propia cuenta del proveedor para generar contenido. Tu clave API se cifra y se guarda de forma segura.",
      apiKeyLabel: "Clave API",
      apiKeyHint:
        "Tu clave es tuya. MAVE nunca la usa para nada fuera de tu espacio de trabajo.",
      bringOwnKey: "Usa tu propia clave API",
    },
    examples: {
      teachLead: "Enséñale a",
      teachTail: "tu voz.",
      paragraph:
        "Añade unos textos que suenen a ti: publicaciones o incluso mensajes largos funcionan.",
      label: "Ejemplos de escritura",
      optional: "(opcional)",
      count: "{count}/5 ejemplos",
      addAnother: "Añadir otro ejemplo",
      exampleLabel: "Ejemplo {num}",
      deleteItem: "Eliminar elemento",
      placeholder: "Pega algo que hayas escrito…",
    },
    style: {
      heading: "Elige tu estilo visual.",
      paragraph:
        "Elige el estilo visual que más se parezca a ti. Escoge lo que llame tu atención.",
    },
    done: {
      heading: "Estás listo.",
      paragraph:
        "Tu estudio está listo y tu primera idea te espera, Hagamos algo que suene a ti.",
    },
  },

  buttons: {
    letsBegin: "Comencemos",
    connectContinue: "Conectar y continuar",
    teachMave: "Enseña a MAVE",
    looksLikeMe: "Me representa",
    startCreating: "Empezar a crear",
    skipForNow: "Omitir por ahora",
    skipping: "Omitiendo…",
  },

  taste: {
    mood: "Mood",
    colorPalettes: "Paletas de color",
    density: "Densidad",
    typography: "Tipografía",
    moods: {
      Editorial: "Editorial",
      Bold: "Audaz",
      Minimal: "Minimal",
      Playful: "Lúdico",
    },
    paletteLabels: {
      "Warm neutral": "Neutro cálido",
      Vibrant: "Vibrante",
      "Cool muted": "Frío apagado",
      Monochrome: "Monocromo",
    },
    densityLabels: {
      Spacious: "Espacioso",
      Balanced: "Equilibrado",
      Dense: "Denso",
    },
    typographyOptions: {
      Serif: "Serif",
      Sans: "Sans",
      Bold: "Bold",
    },
    typographySample: "La idea empieza aquí.",
    typographyStyles: {
      Serif: "Serif editorial",
      Sans: "Sans moderna",
      Bold: "Bold display",
    },
  },

  preview: {
    livePreview: "Vista previa en vivo",
    contentStudio: "Estudio de contenido",
    studyInIdeas: "Un estudio sobre ideas",
    headlineMake: "HAZ",
    headlineIt: "QUE",
    headlineMatter: "CUENTE.",
    headlineIdea: "La idea",
    headlineStarts: "empieza",
    headlineHere: "aquí.",
    mavesRead: "LA LECTURA DE MAVE",
    description: "{mood}, {color}, {density} y {feel}.",
    mediums: {
      photography: "fotografía",
      abstract: "abstracto",
      illustration: "ilustración",
      "typography-only": "solo tipografía",
    },
    compositions: {
      "asymmetric-spacious": "asimétrico y espacioso",
      "centered-bold": "centrado y audaz",
      "single-element-minimal": "elemento único minimalista",
      "scattered-playful": "disperso y lúdico",
    },
    moodFeels: {
      Editorial: "refinado",
      Bold: "confiado",
      Minimal: "intencional",
      Playful: "expresivo",
    },
    colorFeels: {
      "Warm neutral": "cálido",
      Vibrant: "vibrante",
      "Cool muted": "frío",
      Monochrome: "monocromo",
    },
    densityFeels: {
      Spacious: "espacioso",
      Balanced: "equilibrado",
      Dense: "denso",
    },
  },

  validation: {
    apiKeyRequired: "La clave API es obligatoria.",
    exampleEmpty: "El ejemplo no puede estar vacío.",
    maxExamples: "Puedes añadir hasta 5 ejemplos de escritura.",
  },

  errors: {
    mustBeSignedIn: "Debes iniciar sesión.",
    invalidInput: "Entrada no válida.",
    invalidPreferences: "Preferencias no válidas.",
    notReadyToComplete: "La configuración aún no está lista para completarse.",
    skipFailed: "No se pudo omitir este paso. Inténtalo de nuevo.",
    connectFailed:
      "No se pudo conectar tu proveedor de IA. Inténtalo de nuevo.",
    saveExamplesFailed:
      "No se pudieron guardar tus ejemplos de escritura. Inténtalo de nuevo.",
    savePreferencesFailed:
      "No se pudieron guardar tus preferencias visuales. Inténtalo de nuevo.",
    completeFailed:
      "No se pudo completar la configuración. Inténtalo de nuevo.",
  },
}
