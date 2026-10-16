import type { Common } from "../en/common"

export const common: Common = {
  brand: "MAVE",
  tagline: "Tus ideas, tu voz.",

  actions: {
    save: "Guardar",
    cancel: "Cancelar",
    close: "Cerrar",
    back: "Volver",
    retry: "Intentar de nuevo",
    copy: "Copiar",
    copied: "Copiado",
    dismiss: "Descartar",
  },

  status: {
    loading: "Cargando…",
    saving: "Guardando…",
    comingSoon: "Próximamente",
  },

  /** Display labels for ContentType values (shared by dashboard + write). */
  contentTypes: {
    LINKEDIN_POST: "Publicación de LinkedIn",
    INSTAGRAM_CAPTION: "Pie de foto de Instagram",
    INSTAGRAM_CAROUSEL: "Carrusel de Instagram",
  },

  metadata: {
    titleDefault: "MAVE — Tus ideas, tu voz.",
    titleTemplate: "%s — MAVE",
    description:
      "MAVE convierte tus ideas en contenido que suena como tú — escrito para las plataformas donde creas.",
    ogDescription: "Convierte tus ideas en contenido que suena como tú.",
  },
}
