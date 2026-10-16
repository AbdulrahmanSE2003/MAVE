import type { App } from "../en/app"

export const app: App = {
  dashboard: {
    title: "¿Qué vas a crear hoy?",
    badge: "¡Tu voz está lista!",

    generate: {
      ideaAriaLabel: "La idea de tu publicación",
      generatedAriaLabel: "Contenido generado",
      ideaPlaceholder: "Empieza con una idea, un pensamiento o una pregunta...",
      generatedPlaceholder: "Escribe algo nuevo…",
      unsavedChanges: "Cambios sin guardar",
      newIdea: "Nueva idea",
      saveChanges: "Guardar cambios",
      saving: "Guardando...",
      generate: "Generar",
      generating: "Generando...",
      toasts: {
        draftGenerated:
          "Borrador generado y guardado en tu espacio de trabajo.",
        changesSaved: "Cambios guardados.",
        somethingWentWrong: "Algo salió mal. Inténtalo de nuevo.",
        enterIdeaFirst: "Primero escribe tu idea.",
      },
    },

    recentWork: {
      heading: "Trabajos recientes",
      viewAll: "Ver todo",
      twoHoursAgo: "hace 2 horas",
    },

    emptyState: {
      title: "Aún no hay publicaciones",
      description: "Crea tu primera publicación o idea para empezar.",
    },
  },

  contentTypeSelect: {
    ariaLabel: "Tipo de contenido",
    placeholder: "Tipo de contenido",
  },

  nav: {
    home: "Inicio",
    createPost: "Crear una publicación",
    generateVisual: "Generar un visual",
    history: "Historial",
    settings: "Ajustes",
  },

  commandMenu: {
    title: "Menú de comandos",
    description: "Busca y navega por MAVE.",
    placeholder: "Busca páginas y acciones...",
    empty: "No se encontraron resultados.",
    groups: {
      navigation: "Navegación",
      create: "Crear",
      appearance: "Apariencia",
    },
    actions: {
      createLinkedinPost: "Crear una publicación de LinkedIn",
      createInstagramCaption: "Crear un caption de Instagram",
      generateVisual: "Generar un visual",
      switchToLightTheme: "Cambiar al tema claro",
      switchToDarkTheme: "Cambiar al tema oscuro",
      useSystemTheme: "Usar el tema del sistema",
    },
  },

  /** Título y descripción predeterminados del CommandDialog compartido. */
  commandDialog: {
    title: "Paleta de comandos",
    description: "Busca un comando para ejecutar...",
  },

  shortcuts: {
    title: "Atajos de teclado",
    description: "Agiliza tu flujo de trabajo en MAVE.",
    editorHint: "Los atajos de escritura funcionan dentro del editor",
    groups: {
      navigation: {
        category: "Navegación",
        toggleSidebar: "Alternar la barra lateral",
        toggleTheme: "Cambiar tema",
        commandCenter: "Centro de comandos",
        keyboardShortcuts: "Atajos de teclado",
        closeDialog: "Cerrar diálogo",
      },
      editing: {
        category: "Edición",
        saveDraft: "Guardar borrador",
        undo: "Deshacer",
        redo: "Rehacer",
      },
      formatting: {
        category: "Formato",
        bold: "Negrita",
        italic: "Cursiva",
        strikethrough: "Tachado",
        heading1: "Título 1",
        heading2: "Título 2",
        heading3: "Título 3",
        paragraph: "Párrafo",
      },
      lists: {
        category: "Listas y bloques",
        bulletList: "Lista con viñetas",
        numberedList: "Lista numerada",
      },
    },
  },

  sidebar: {
    toggleSidebar: "Alternar la barra lateral",
    nav: {
      home: "Inicio",
      write: "Escribir",
      visuals: "Visuales",
      history: "Historial",
      settings: "Ajustes",
    },
    footer: {
      betaUser: "Usuario beta",
      profile: "Perfil",
      keyboardShortcuts: "Atajos de teclado",
      toggleTheme: "Cambiar tema",
      logOut: "Cerrar sesión",
    },
  },

  theme: {
    toggle: "Cambiar tema",
    switchToLightMode: "Cambiar al modo claro",
    switchToDarkMode: "Cambiar al modo oscuro",
  },

  greetings: {
    morning: [
      "Buenos días",
      "Amanece un día nuevo",
      "¿Listo para crear algo genial?",
      "Un comienzo nuevo para nuevas ideas",
      "Empecemos algo bueno",
      "Tu próxima idea empieza aquí",
      "Un nuevo día, un lienzo nuevo",
      "¿Listo para aprovechar el día?",
      "Demos vida a algunas ideas",
      "Hora de crear algo con significado",
      "¡Por un día creativo!",
      "Pongamos esas ideas a fluir",
      "Hoy tiene potencial",
      "Deja espacio para nuevas ideas",
      "Transformemos la inspiración en acción",
    ],

    afternoon: [
      "Buenas tardes",
      "¿Listo para seguir avanzando?",
      "Hagamos que esta tarde cuente",
      "Mantén el ritmo",
      "Hora de darle vida a una idea",
      "Aún hay tiempo para crear algo genial",
      "Pongámonos creativos",
      "¿En qué trabajamos hoy?",
      "Una idea puede llegar lejos",
      "Creemos algo que valga la pena compartir",
      "Hora de convertir ideas en palabras",
      "Logremos un poco de avance",
      "Tu próxima idea te espera",
      "Mantengamos fluyendo la creatividad",
      "Haz que este momento cuente",
    ],

    evening: [
      "Buenas noches",
      "¿Sigues creando?",
      "¿Preparado para un poco de inspiración?",
      "Terminemos el día bien",
      "Un momento tranquilo para nuevas ideas",
      "¿Tienes algo en mente?",
      "Capturemos esa idea",
      "Hora de poner tus ideas en palabras",
      "¿Una idea más para hoy?",
      "Creamos a tu propio ritmo",
      "Un pequeño espacio para pensar y crear",
      "Tus ideas siempre son bienvenidas aquí",
      "Transformemos los pensamientos de hoy en algo",
      "Respira y crea",
      "Haz tuyo este momento",
    ],
  },

  actions: {
    errors: {
      signedOut: "Debes iniciar sesión.",
      postNotFound: "Publicación no encontrada.",
    },
  },
}
