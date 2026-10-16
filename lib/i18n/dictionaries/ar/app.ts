import type { App } from "../en/app"

export const app: App = {
  dashboard: {
    title: "ماذا ستبدئ اليوم؟",
    badge: "صوتك جاهز!",

    generate: {
      ideaAriaLabel: "فكرة منشورك",
      generatedAriaLabel: "المحتوى المُولَّد",
      ideaPlaceholder: "ابدأ بفكرة، أو خاطرة، أو سؤال...",
      generatedPlaceholder: "اكتب شيئًا جديدًا…",
      unsavedChanges: "تغييرات غير محفوظة",
      newIdea: "فكرة جديدة",
      saveChanges: "حفظ التغييرات",
      saving: "جارٍ الحفظ...",
      generate: "توليد",
      generating: "جارٍ التوليد...",
      toasts: {
        draftGenerated: "تم إنشاء المسودة وحفظها في مساحة عملك.",
        changesSaved: "تم حفظ التغييرات.",
        somethingWentWrong: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
        enterIdeaFirst: "يرجى إدخال فكرتك أولًا.",
      },
    },

    recentWork: {
      heading: "الأعمال الأخيرة",
      viewAll: "عرض الكل",
      twoHoursAgo: "قبل ساعتين",
    },

    emptyState: {
      title: "لا توجد منشورات بعد",
      description: "أنشئ أول منشور أو فكرة للبدء.",
    },
  },

  contentTypeSelect: {
    ariaLabel: "نوع المحتوى",
    placeholder: "نوع المحتوى",
  },

  nav: {
    home: "الرئيسية",
    createPost: "إنشاء منشور",
    generateVisual: "توليد تصميم",
    history: "السجل",
    settings: "الإعدادات",
  },

  commandMenu: {
    title: "قائمة الأوامر",
    description: "ابحث وتنقل بين أقسام MAVE.",
    placeholder: "ابحث في الصفحات والإجراءات...",
    empty: "لا توجد نتائج.",
    groups: {
      navigation: "التنقل",
      create: "إنشاء",
      appearance: "المظهر",
    },
    actions: {
      createLinkedinPost: "إنشاء منشور على LinkedIn",
      createInstagramCaption: "إنشاء كابشن على Instagram",
      generateVisual: "توليد تصميم",
      switchToLightTheme: "التبديل إلى المظهر الفاتح",
      switchToDarkTheme: "التبديل إلى المظهر الداكن",
      useSystemTheme: "استخدام مظهر النظام",
    },
  },

  /** العنوان والوصف الافتراضيان لنافذة الأوامر المشتركة. */
  commandDialog: {
    title: "لوحة الأوامر",
    description: "ابحث عن أمر لتنفيذه...",
  },

  shortcuts: {
    title: "اختصارات لوحة المفاتيح",
    description: "سرّع سير عملك داخل MAVE.",
    editorHint: "اختصارات الكتابة تعمل داخل المحرر",
    groups: {
      navigation: {
        category: "التنقل",
        toggleSidebar: "تبديل الشريط الجانبي",
        toggleTheme: "تبديل المظهر",
        commandCenter: "مركز الأوامر",
        keyboardShortcuts: "اختصارات لوحة المفاتيح",
        closeDialog: "إغلاق النافذة",
      },
      editing: {
        category: "التحرير",
        saveDraft: "حفظ المسودة",
        undo: "تراجع",
        redo: "إعادة",
      },
      formatting: {
        category: "التنسيق",
        bold: "عريض",
        italic: "مائل",
        strikethrough: "يتوسطه خط",
        heading1: "عنوان 1",
        heading2: "عنوان 2",
        heading3: "عنوان 3",
        paragraph: "فقرة",
      },
      lists: {
        category: "القوائم والكتل",
        bulletList: "قائمة نقطية",
        numberedList: "قائمة مرقّمة",
      },
    },
  },

  sidebar: {
    toggleSidebar: "تبديل الشريط الجانبي",
    nav: {
      home: "الرئيسية",
      write: "كتابة",
      visuals: "المرئيات",
      history: "السجل",
      settings: "الإعدادات",
    },
    footer: {
      betaUser: "مستخدم تجريبي",
      profile: "الملف الشخصي",
      keyboardShortcuts: "اختصارات لوحة المفاتيح",
      toggleTheme: "تبديل المظهر",
      logOut: "تسجيل الخروج",
    },
  },

  theme: {
    toggle: "تبديل المظهر",
    switchToLightMode: "التبديل إلى الوضع الفاتح",
    switchToDarkMode: "التبديل إلى الوضع الداكن",
  },

  greetings: {
    morning: [
      "صباح الخير",
      "أشرق وابدأ يومك",
      "هل أنت مستعد لصناعة شيء رائع؟",
      "بداية منعشة للأفكار الجديدة",
      "لنبدأ شيئًا جميلًا",
      "فكرتك التالية تبدأ من هنا",
      "يوم جديد ولوحة جديدة",
      "هل أنت مستعد لتستفيد من يومك؟",
      "لنحوّل بعض الأفكار إلى واقع",
      "حان الوقت لصناعة شيء ذي معنى",
      "إلى يوم مليء بالإبداع",
      "لنطلق العنان للأفكار",
      "يومك مليء بالإمكانات",
      "افتح مساحة للأفكار الجديدة",
      "لنحوّل الإلهام إلى فعل",
    ],

    afternoon: [
      "طاب عصرك",
      "هل أنت مستعد لمواصلة التقدم؟",
      "لنجعل هذا العصر مثمرًا",
      "حافظ على الإيقاع",
      "حان وقت تحويل فكرة إلى واقع",
      "ما زال لدينا وقت لصناعة شيء رائع",
      "هيا نبدع",
      "على ماذا نعمل اليوم؟",
      "فكرة واحدة قد تصنع فرقًا كبيرًا",
      "لنصنع شيئًا يستحق المشاركة",
      "حان وقت تحويل الأفكار إلى كلمات",
      "لنحقق تقدمًا ولو بسيطًا",
      "فكرتك التالية في انتظارك",
      "لنحافظ على جريان الإبداع",
      "اجعل هذه اللحظة مثمرة",
    ],

    evening: [
      "مساء الخير",
      "ما زلت تبدع؟",
      "مستعد لقليل من الإلهام؟",
      "لنختم يومًا بنهاية جميلة",
      "لحظة هادئة للأفكار الجديدة",
      "يدور في ذهنك شيء ما؟",
      "لنوثق تلك الفكرة",
      "حان وقت صياغة أفكارك بالكلمات",
      "فكرة أخيرة لليوم؟",
      "لنبدع بإيقاعك الخاص",
      "مساحة صغيرة للتفكير والإبداع",
      "أفكارك مرحب بها دائمًا هنا",
      "لنحوّل أفكار اليوم إلى شيء حقيقي",
      "خذ نفسًا عميقًا ثم ابدع",
      "اجعل هذه اللحظة تخصك",
    ],
  },

  actions: {
    errors: {
      signedOut: "يجب تسجيل الدخول.",
      postNotFound: "لم يتم العثور على المنشور.",
    },
  },
}
