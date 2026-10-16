import type { Write } from "../en/write"

export const write: Write = {
  header: {
    breadcrumb: "مساحة عملك / الكتابة",
    title: "لنصنع شيئًا رائعًا.",
    subtitle: "ابدأ بفكرة، وسنساعدك على إيجاد الكلمات المناسبة.",
  },

  idea: {
    label: "بماذا تفكر اليوم؟",
    hint: "فكرة، أو مشكلة، أو تجربة، أو شيء ترغب في مشاركته.",
    placeholder: "مثال: لماذا لا يحتاج كل مشروع إلى الخدمات الدقيقة...",
  },

  platform: {
    label: "أنشئ محتوى لـ",
    description: "محتوى اجتماعي",
  },

  settings: {
    title: "إعدادات الإنشاء",
    description: "خصّص اتجاه منشورك (اختياري)",
    goalLabel: "ما الهدف؟",
    toneLabel: "نبرة الصوت",
    tonePlaceholder: "اختر نبرة",
    toneGroup: "النبرات",
    contextLabel: "سياق إضافي",
    contextPlaceholder: "أي تفاصيل يجب أن يذكرها المنشور أو يتجنّبها...",
    goals: {
      educate: "تثقيف",
      experience: "مشاركة تجربة",
      story: "رواية قصة",
      discussion: "بدء نقاش",
    },
    tones: {
      usualVoice: "صوتي المعتاد",
      friendlyConversational: "ودّي وحواري",
      professionalClear: "احترافي وواضح",
      boldOpinionated: "جريء وصاحب رأي",
      educationalPractical: "تعليمي وعملي",
    },
  },

  footer: {
    tagline: "فكرتك، صوتك.",
    generate: "إنشاء",
    generating: "جارٍ الإنشاء...",
  },

  workspace: {
    saveChanges: "حفظ التغييرات",
    generateImage: "إنشاء صورة لهذا المنشور",
    lastSaved: "آخر حفظ: {time}",
    notSavedYet: "لم يتم الحفظ بعد",
    saveShortcut: "⌘ + S للحفظ",
  },

  topBar: {
    home: "الرئيسية",
    write: "الكتابة",
    newIdea: "فكرة جديدة",
  },

  editor: {
    menus: {
      edit: "تحرير",
      format: "تنسيق",
      lists: "قوائم",
      insert: "إدراج",
      actions: "إجراءات",
    },
    undo: "تراجع",
    redo: "إعادة",
    bold: "عريض",
    italic: "مائل",
    strikethrough: "يتوسطه خط",
    paragraph: "فقرة",
    heading: "عنوان {level}",
    inlineCode: "كود مضمّن",
    bulletList: "قائمة نقطية",
    orderedList: "قائمة مرقّمة",
    blockquote: "اقتباس",
    horizontalDivider: "خط فاصل أفقي",
    lineBreak: "فاصل أسطر",
    copyPlainText: "نسخ كنص عادي",
    copyHtml: "نسخ بصيغة HTML",
    copySuccess: "تم نسخ المنشور بنجاح.",
    copyFailed: "تعذّر نسخ المنشور.",
    copyFormattedSuccess: "تم نسخ المنشور المنسّق بنجاح.",
  },

  toasts: {
    contentReady: "محتواك جاهز.",
    changesSaved: "تم حفظ التغييرات.",
    saveFailed: "تعذّر حفظ التغييرات.",
  },

  errors: {
    somethingWentWrong: "حدث خطأ ما. حاول مرة أخرى.",
    invalidInput: "إدخال غير صالح.",
    signInGenerate: "يجب أن تسجّل الدخول لإنشاء المحتوى.",
    signInSave: "يجب أن تسجّل الدخول لحفظ التغييرات.",
  },

  notFound: {
    title: "المنشور غير موجود",
    description: "هذا المنشور غير موجود أو لم يعد متاحًا.",
    backToPosts: "العودة إلى المنشورات",
  },

  validation: {
    ideaRequired: "الرجاء إدخال فكرة.",
    carouselMinSlides: "يجب أن يتكون الكاروسيل من شريحة واحدة على الأقل.",
    carouselMaxSlides: "لا يمكن أن يتجاوز الكاروسيل 10 شرائح.",
    contentEmpty: "لا يمكن أن يكون المحتوى فارغًا.",
  },

  generation: {
    noProvider:
      "لا يوجد مزوّد ذكاء اصطناعي متصل بعد. أضف مزوّدًا لتبدأ الكتابة.",
    multipleProviders:
      "لديك أكثر من مزوّد محفوظ. اختر المزوّد الذي تريد استخدامه.",
    noApiKey: "لا يوجد مفتاح API محفوظ لهذا المزوّد. أعد ربطه أولًا.",
    apiKeyUnreadable: "تعذّر قراءة مفتاح API المحفوظ. أعد ربطه من فضلك.",
    providerNotConfigured: "لم يتم إعداد هذا المزوّد على الخادم بعد.",
    providerEmpty: "أعاد المزوّد استجابة فارغة. حاول مرة أخرى.",
    geminiHighDemand:
      "Gemini غير متاح مؤقتًا بسبب كثافة الطلب. حاول مرة أخرى بعد قليل.",
    providerUnreachable:
      "تعذّر الوصول إلى مزوّد الذكاء الاصطناعي. تحقق من اتصالك وحاول مرة أخرى.",
    carouselMalformed: "عاد الكاروسيل بتنسيق غير صالح. حاول مرة أخرى.",
    carouselInvalidFormat: "لم يطابق الكاروسيل التنسيق المتوقع. حاول مرة أخرى.",
    postNotFound: "تعذّر العثور على هذا المنشور.",
    noPermission: "لا تملك صلاحية تعديل هذا المنشور.",
    networkError:
      "تعذّر الاتصال بمزوّد الذكاء الاصطناعي. تحقق من اتصالك وحاول مرة أخرى.",
    temporarilyUnavailable: "Gemini غير متاح مؤقتًا. حاول مرة أخرى بعد قليل.",
    rateLimited:
      "يتلقى Gemini طلبات كثيرة جدًا. انتظر قليلًا ثم حاول مرة أخرى.",
    invalidApiKey: "مفتاح Gemini API غير صالح. يرجى مراجعة إعدادات المزوّد.",
    permissionDenied:
      "رفض Gemini هذا الطلب. تحقق من صلاحيات مفتاح API والوصول إلى النموذج.",
    emptyResponse: "أعاد الذكاء الاصطناعي استجابة فارغة. حاول مرة أخرى.",
  },
}
