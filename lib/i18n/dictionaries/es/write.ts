import type { Write } from "../en/write"

export const write: Write = {
  header: {
    breadcrumb: "Tu espacio de trabajo / Escribir",
    title: "Vamos a crear algo.",
    subtitle:
      "Empieza con una idea. Nosotros te ayudamos a encontrar las palabras.",
  },

  idea: {
    label: "¿Qué tienes en mente?",
    hint: "Una idea, un problema, una lección o algo que quieras compartir.",
    placeholder:
      "Ej.: por qué no todos los proyectos necesitan microservicios...",
  },

  platform: {
    label: "Crea para",
    description: "Contenido social",
  },

  settings: {
    title: "Ajustes de generación",
    description: "Personaliza la dirección de tu publicación (opcional)",
    goalLabel: "¿Cuál es el objetivo?",
    toneLabel: "Tono de voz",
    tonePlaceholder: "Elige un tono",
    toneGroup: "Tonos",
    contextLabel: "Contexto adicional",
    contextPlaceholder:
      "Algo específico que la publicación deba mencionar o evitar...",
    goals: {
      educate: "Educar",
      experience: "Compartir experiencia",
      story: "Contar una historia",
      discussion: "Iniciar un debate",
    },
    tones: {
      usualVoice: "Mi voz habitual",
      friendlyConversational: "Cercano y conversacional",
      professionalClear: "Profesional y claro",
      boldOpinionated: "Atrevido y con opinión",
      educationalPractical: "Divulgativo y práctico",
    },
  },

  footer: {
    tagline: "Tu idea, tu voz.",
    generate: "Generar",
    generating: "Generando...",
  },

  workspace: {
    saveChanges: "Guardar cambios",
    generateImage: "Generar imagen para esta publicación",
    lastSaved: "Último guardado: {time}",
    notSavedYet: "Sin guardar todavía",
    saveShortcut: "⌘ + S para guardar",
  },

  topBar: {
    home: "Inicio",
    write: "Escribir",
    newIdea: "Nueva idea",
  },

  editor: {
    menus: {
      edit: "Editar",
      format: "Formato",
      lists: "Listas",
      insert: "Insertar",
      actions: "Acciones",
    },
    undo: "Deshacer",
    redo: "Rehacer",
    bold: "Negrita",
    italic: "Cursiva",
    strikethrough: "Tachado",
    paragraph: "Párrafo",
    heading: "Título {level}",
    inlineCode: "Código en línea",
    bulletList: "Lista con viñetas",
    orderedList: "Lista numerada",
    blockquote: "Cita",
    horizontalDivider: "Separador horizontal",
    lineBreak: "Salto de línea",
    copyPlainText: "Copiar como texto plano",
    copyHtml: "Copiar como HTML",
    copySuccess: "Publicación copiada al portapapeles.",
    copyFailed: "No se pudo copiar la publicación.",
    copyFormattedSuccess: "Publicación con formato copiada al portapapeles.",
  },

  toasts: {
    contentReady: "Tu contenido está listo.",
    changesSaved: "Cambios guardados.",
    saveFailed: "No se pudieron guardar los cambios.",
  },

  errors: {
    somethingWentWrong: "Algo salió mal. Inténtalo de nuevo.",
    invalidInput: "Entrada no válida.",
    signInGenerate: "Debes iniciar sesión para generar contenido.",
    signInSave: "Debes iniciar sesión para guardar los cambios.",
  },

  notFound: {
    title: "Publicación no encontrada",
    description: "Esta publicación no existe o ya no está disponible.",
    backToPosts: "Volver a las publicaciones",
  },

  validation: {
    ideaRequired: "Introduce una idea.",
    carouselMinSlides: "El carrusel debe tener al menos una diapositiva.",
    carouselMaxSlides: "El carrusel no puede superar las 10 diapositivas.",
    contentEmpty: "El contenido no puede estar vacío.",
  },

  generation: {
    noProvider:
      "Aún no hay ningún proveedor de IA conectado. Conecta uno para empezar a escribir.",
    multipleProviders: "Tienes más de un proveedor guardado. Elige cuál usar.",
    noApiKey:
      "No hay ninguna clave API guardada para ese proveedor. Vuelve a conectarlo.",
    apiKeyUnreadable:
      "No se puede leer tu clave API guardada. Vuelve a conectarla.",
    providerNotConfigured:
      "Este proveedor aún no está configurado en el servidor.",
    providerEmpty:
      "El proveedor devolvió una respuesta vacía. Inténtalo de nuevo.",
    geminiHighDemand:
      "Gemini no está disponible temporalmente por alta demanda. Inténtalo de nuevo en un momento.",
    providerUnreachable:
      "No se pudo contactar con tu proveedor de IA. Comprueba tu conexión e inténtalo de nuevo.",
    carouselMalformed:
      "El carrusel llegó con un formato incorrecto. Inténtalo de nuevo.",
    carouselInvalidFormat:
      "El carrusel no coincide con el formato esperado. Inténtalo de nuevo.",
    postNotFound: "No se encontró esta publicación.",
    noPermission: "No tienes permiso para editar esta publicación.",
    networkError:
      "No se pudo conectar con el proveedor de IA. Comprueba tu conexión e inténtalo de nuevo.",
    temporarilyUnavailable:
      "Gemini no está disponible temporalmente. Inténtalo de nuevo en un momento.",
    rateLimited:
      "Gemini está recibiendo demasiadas solicitudes. Espera un momento e inténtalo de nuevo.",
    invalidApiKey:
      "Tu clave API de Gemini no es válida. Revisa la configuración de tu proveedor.",
    permissionDenied:
      "Gemini denegó esta solicitud. Revisa los permisos de tu clave API y el acceso al modelo.",
    emptyResponse: "La IA devolvió una respuesta vacía. Inténtalo de nuevo.",
  },
}
