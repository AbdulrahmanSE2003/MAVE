import type { Settings } from "../en/settings"

export const settings: Settings = {
  appearance: {
    title: "المظهر",
    description: "خصّص شكل MAVE ومظهره.",

    theme: {
      label: "مظهر الواجهة",
      hint: "اختر الوضع الفاتح أو الداكن، أو اتبع إعدادات نظامك.",
      options: {
        light: "فاتح",
        dark: "داكن",
        system: "النظام",
      },
    },

    font: {
      label: "الخط",
      hint: "يغيّر الخطوط في مساحة عملك بالكامل، ويُحفظ اختيارك على هذا الجهاز.",
      options: {
        // Technical typography terms stay in English — translating them into
        // Arabic would be misleading.
        sans: "Sans-serif",
        serif: "Serif",
      },
    },

    language: {
      label: "لغة الواجهة",
      hint: "اختر اللغة المستخدمة في جميع أنحاء MAVE.",
    },
  },

  header: {
    eyebrow: "مساحة عملك / الإعدادات",
    title: "الإعدادات",
    description: "كل ما تحتاجه لتخصيص مساحة عمل MAVE وتجربة الكتابة الخاصة بك.",
  },

  sectionsNavLabel: "أقسام الإعدادات",

  sections: {
    account: "الحساب",
    ai: "مزود الذكاء الاصطناعي",
    writing: "تفضيلات الكتابة",
    appearance: "المظهر",
  },

  account: {
    title: "الحساب",
    description: "ملفك الشخصي ومعلومات حسابك.",
    profileName: "مستخدم MAVE",
    profileSubtitle: "ملف مساحة عملك",
    previewBadge: "معاينة",
    displayName: {
      label: "اسم العرض",
      placeholder: "اسمك",
    },
    email: {
      label: "البريد الإلكتروني",
      placeholder: "بريدك الإلكتروني",
    },
    note: "ستُربط معلومات الحساب بملف تعريف المصادقة الخاص بك لاحقًا.",
  },

  ai: {
    title: "مزود الذكاء الاصطناعي",
    description: "اختر الطريقة التي ستُنشئ بها MAVE محتواك.",
    plannedBadge: "قيد التخطيط",
    openaiDescription: "استخدم مفتاح API الخاص بك لتوليد المحتوى.",
    provider: {
      label: "المزود",
      hint: "يمكن إضافة مزوّدين آخرين في إصدار لاحق.",
    },
    apiKey: {
      label: "مفتاح API",
      hint: "إدارة مفاتيح API غير متاحة في هذه المعاينة، ولا يُخزَّن أي مفتاح.",
      placeholder: "أضف مفتاح API الخاص بك لاحقًا",
    },
    securityNote:
      "يجب التعامل مع بيانات اعتماد API بأمان وعدم كشفها أبدًا في كود الواجهة.",
  },

  writing: {
    title: "تفضيلات الكتابة",
    description: "اختر الإعدادات الافتراضية لمحتواك.",
    language: {
      label: "اللغة الافتراضية",
      hint: "تُستخدم كلغة مفضّلة عند إنشاء محتوى جديد.",
      options: {
        en: "الإنجليزية",
        ar: "العربية",
        es: "الإسبانية",
      },
    },
    platform: {
      label: "المنصة الافتراضية",
      hint: "المنصة المختارة تلقائيًا عند بدء منشور جديد.",
    },
    styleReferences: {
      title: "مراجع أسلوب الكتابة",
      description: "أضف منشورات نموذجية تساعد MAVE على فهم أسلوبك.",
    },
  },

  help: {
    title: "هل تحتاج إلى مساعدة؟",
    description:
      "إعدادات الحساب ومزود الذكاء الاصطناعي حاليًا نُسخ معاينة. تُحفظ تفضيلات الخط والمظهر ولغة الواجهة محليًا عند الحاجة.",
  },
}
