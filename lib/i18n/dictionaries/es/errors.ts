import type { Errors } from "../en/errors"

export const errors: Errors = {
  error: {
    title: "Algo salió mal",
    description: "No pudimos cargar esta página. Inténtalo de nuevo.",
    retry: "Intentar de nuevo",
  },

  notFound: {
    title: "Página no encontrada",
    description: "La página que buscas no existe o puede haberse movido.",
    backHome: "Volver al inicio",
  },

  loading: {
    label: "Preparando todo",
    description: "Estamos preparando tu espacio de trabajo…",
  },

  languageChange: {
    failed: "No pudimos cambiar el idioma. Inténtalo de nuevo.",
  },
}
