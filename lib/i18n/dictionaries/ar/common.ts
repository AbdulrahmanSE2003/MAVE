import type { Common } from "../en/common"

export const common: Common = {
  brand: "MAVE",
  tagline: "أفكارك، صوتك.",

  actions: {
    save: "حفظ",
    cancel: "إلغاء",
    close: "إغلاق",
    back: "رجوع",
    retry: "المحاولة مرة أخرى",
    copy: "نسخ",
    copied: "تم النسخ",
    dismiss: "تجاهل",
  },

  status: {
    loading: "جارٍ التحميل…",
    saving: "جارٍ الحفظ…",
    comingSoon: "قريبًا",
    changingLanguage: "جارٍ تغيير اللغة…",
  },

  /** Display labels for ContentType values (shared by dashboard + write). */
  contentTypes: {
    LINKEDIN_POST: "منشور LinkedIn",
    INSTAGRAM_CAPTION: "كابشن Instagram",
    INSTAGRAM_CAROUSEL: "كاروسيل Instagram",
  },

  metadata: {
    titleDefault: "MAVE — أفكارك، صوتك.",
    titleTemplate: "%s — MAVE",
    description:
      "MAVE يحوّل أفكارك إلى محتوى يشبهك — مكتوبًا للمنصات التي تنشئ عليها.",
    ogDescription: "حوّل أفكارك إلى محتوى يشبهك.",
  },
}
