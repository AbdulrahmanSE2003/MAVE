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
      hint: "يغيّر الخطوط في مساحة عملك بالكامل، ويُحفظ اختيارك على هذا الجهاز. (لا يعمل مع الواجهة العربية.)",
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
    danger: "منطقة الخطر",
  },

  account: {
    title: "الحساب",
    description: "ملفك الشخصي ومعلومات حسابك.",
    profileName: "مستخدم MAVE",
    profileSubtitle: "ملف مساحة عملك",
    saveFailed: "تعذّر حفظ التغييرات.",
    saveSuccess: "تم تحديث الملف الشخصي بنجاح.",
    saving: "جاري الحفظ...",
    save: "حفظ التغييرات",
    displayName: {
      label: "اسم المستخدم",
      placeholder: "اسمك",
    },
    email: {
      label: "البريد الإلكتروني",
      placeholder: "بريدك الإلكتروني",
    },
    note: "سيظهر هذا الاسم في مساحة العمل الخاصة بك والمحتوى المشارك.",
  },

  dangerZone: {
    title: "منطقة الخطر",
    description: "الإجراءات الحساسة والتي لا يمكن التراجع عنها في حسابك.",
    signOut: "تسجيل الخروج",
    signOutDescription: "تسجيل الخروج من حسابك على هذا الجهاز.",
    deletePosts: "حذف جميع المنشورات",
    deletePostsDescription:
      "حذف جميع المنشورات والمسودات التي قمت بإنشائها نهائيًا.",
    deleteVisuals: "حذف جميع الصور",
    deleteVisualsDescription:
      "حذف جميع الصور والوسائط المرئية التي قمت بإنشائها نهائيًا.",
    deleteAccount: "حذف الحساب",
    deleteDescription: "حذف حسابك وجميع البيانات المرتبطة به نهائيًا.",
    cancel: "إلغاء",
    confirmingLabel: "جاري التنفيذ ...",
    confirmations: {
      signOutTitle: "تسجيل الخروج",
      signOutDescription:
        "هل أنت ألكيد من رغبتك في تسجيل الخروج؟ ستحتاج إلى تسجيل الدخول مرة أخرى للوصول إلى حسابك.",
      deletePostsTitle: "حذف جميع المنشورات",
      deletePostsDescription:
        "هل أنت ألكيد من حذف جميع المنشورات؟ هذا الإجراء نهائي ولا يمكن التراجع عنه.",
      deleteVisualsTitle: "حذف جميع الصور",
      deleteVisualsDescription:
        "هل أنت ألكيد من حذف جميع الصور؟ سيتم إزالة جميع الوسائط المرئية المرتبطة نهائيًا.",
      deleteAccountTitle: "حذف الحساب",
      deleteAccountDescription:
        "هل أنت ألكيد من حذف حسابك؟ سيتم مسح جميع بياناتك ومنشوراتك وإعداداتك نهائيًا.",
    },
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
