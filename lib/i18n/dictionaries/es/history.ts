import type { History } from "../en/history"

export const history: History = {
  header: {
    eyebrow: "Tu espacio de trabajo / Historial",
    title: "Historial",
    description: "Cada idea que convertiste en contenido, en un solo lugar.",
    itemsOne: "elemento",
    itemsOther: "elementos",
  },

  filters: {
    all: "Todo",
    searchPlaceholder: "Busca en tu contenido...",
    searchAriaLabel: "Buscar en el historial",
    resultsOne: "{count} resultado",
    resultsOther: "{count} resultados",
    recentlyGenerated: "Generado recientemente",
    newestFirst: "Los más recientes primero",
  },

  status: {
    generated: "Generado",
    edited: "Editado",
  },

  card: {
    copyAriaLabel: "Copiar {title}",
    moreActionsAriaLabel: "Más acciones para {title}",
    copyContent: "Copiar contenido",
    removeFromList: "Quitar de la lista",
    removeUnavailableTitle:
      "Podrás quitar elementos cuando se conecte el historial.",
    copiedMessage: "Contenido copiado al portapapeles.",
  },

  empty: {
    title: "No se encontró nada",
    noMatches:
      "Prueba con otra búsqueda o cambia el filtro de plataforma para encontrar lo que buscas.",
    noItems:
      "Tu historial está vacío. El contenido generado aparecerá aquí una vez que se guarde.",
    clearFilters: "Quitar filtros",
  },

  footer: {
    previewNote:
      "Esta es una vista previa de la interfaz con entradas de ejemplo. El historial deberá conectarse a tus generaciones guardadas para conservarse entre sesiones.",
  },

  stubs: {
    page: "página",
  },

  items: {
    consistency: {
      title: "La constancia vence a la motivación",
      excerpt:
        "No necesitas sentir motivación cada día. Necesitas un sistema que te mantenga en marcha, incluso cuando no la tengas.",
      date: "12 oct 2026",
    },
    maveIdea: {
      title: "La idea detrás de MAVE",
      excerpt:
        "Tus ideas merecen sonar como tú. No como otra publicación generada por IA que todos ya han visto.",
      date: "11 oct 2026",
    },
    buildingInPublic: {
      title: "Lo que aprendí construyendo en público",
      excerpt:
        "Construir en público no consiste en compartir cada detalle. Consiste en compartir lo que aprendes por el camino.",
      date: "10 oct 2026",
    },
    lessPlanning: {
      title: "Menos planificación, más construcción",
      excerpt:
        "A veces la forma más rápida de encontrar la respuesta correcta es construir la versión más pequeña y aprender de ella.",
      date: "8 oct 2026",
    },
  },
}
