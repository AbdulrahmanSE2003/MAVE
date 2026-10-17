import type { History } from "../en/history"

export const history: History = {
  header: {
    eyebrow: "Tu espacio de trabajo / Historial",
    title: "Historial",
    description: "Cada idea que convertiste en contenido, en un solo lugar.",
    itemsOne: "elemento",
    itemsOther: "elementos",
  },
  showMore: "Mostrar más",
  loadingMore: "Cargando más...",
  deleteSuccess: "Publicación eliminada correctamente.",

  errors: {
    fetchFailed: "No se pudo cargar el historial. Inténtalo de nuevo.",
    deleteFailed: "No se pudo eliminar la publicación. Inténtalo de nuevo",
  },

  filters: {
    all: "Todos",
    posts: "Publicaciones",
    visual: "Imágenes",
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
      "Tu espacio creativo, todo en un solo lugar. Vuelve a tus publicaciones y elementos visuales guardados cuando los necesites.",
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
