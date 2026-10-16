import type { Onboarding } from "../en/onboarding"

export const onboarding: Onboarding = {
  header: {
    timeHint: "يستغرق نحو دقيقتين",
    setup: "الإعداد ·",
    ofTotal: "من 5",
  },

  steps: {
    intro: {
      welcomeTo: "مرحبًا بك في",
      paragraph:
        "مساحة عمل إبداعية صُممت حول فكرة واحدة: مساعدتك على أن تكتب بما يشبه صوتك أنت.",
      idea: "عندي فكرة.",
      understandsVoice: "MAVE يفهم صوتي.",
      makesMine: "أجعلها خاصة بي.",
    },
    provider: {
      heading: "اربط مزوّد الذكاء الاصطناعي الخاص بك.",
      paragraph:
        "يستخدم MAVE حسابك الخاص بالمزوّد لإنشاء المحتوى. يتم تشفير مفتاح الـ API الخاص بك وتخزينه بأمان.",
      apiKeyLabel: "مفتاح الـ API",
      apiKeyHint: "مفتاحك ملك لك، ولا يستخدمه MAVE لأي غرض خارج مساحة عملك.",
      bringOwnKey: "استخدم مفتاح الـ API الخاص بك",
    },
    examples: {
      teachLead: "علّم",
      teachTail: "صوتك.",
      paragraph:
        "أضف عيّنات قليلة من كتابتك تشبهك — المنشورات أو حتى الرسائل الطويلة تصلح تمامًا.",
      label: "عيّنات الكتابة",
      optional: "(اختياري)",
      count: "{count}/5 عيّنات",
      addAnother: "أضف عيّنة أخرى",
      exampleLabel: "العيّنة {num}",
      deleteItem: "حذف العنصر",
      placeholder: "ألصق شيئًا كتبته من قبل…",
    },
    style: {
      heading: "اختر أسلوبك البصري.",
      paragraph: "اختر الأسلوب البصري الأقرب إليك. اختر ما يلفت انتباهك.",
    },
    done: {
      heading: "أنت جاهز.",
      paragraph: "استوديوك جاهز وفكرتك الأولى في الانتظار — لنصنع شيئًا يشبهك.",
    },
  },

  buttons: {
    letsBegin: "هيا نبدأ",
    connectContinue: "اربط وتابع",
    teachMave: "علّم MAVE",
    looksLikeMe: "هذا يشبهني",
    startCreating: "ابدأ الإبداع",
    skipForNow: "تخطَّ الآن",
    skipping: "جارٍ التخطي…",
  },

  taste: {
    mood: "المزاج",
    colorPalettes: "لوحات الألوان",
    density: "الكثافة",
    typography: "الطباعة",
    moods: {
      Editorial: "تحريري",
      Bold: "جريء",
      Minimal: "بسيط",
      Playful: "مرح",
    },
    paletteLabels: {
      "Warm neutral": "محايد دافئ",
      Vibrant: "زاهٍ",
      "Cool muted": "بارد هادئ",
      Monochrome: "أحادي اللون",
    },
    densityLabels: {
      Spacious: "فسيح",
      Balanced: "متوازن",
      Dense: "مضغوط",
    },
    typographyOptions: {
      Serif: "سيرِف",
      Sans: "سِنس",
      Bold: "عريض",
    },
    typographySample: "الفكرة تبدأ من هنا.",
    typographyStyles: {
      Serif: "سيرِف تحريري",
      Sans: "سِنس حديث",
      Bold: "عريض بارز",
    },
  },

  preview: {
    livePreview: "معاينة مباشرة",
    contentStudio: "استوديو المحتوى",
    studyInIdeas: "دراسة في الأفكار",
    headlineMake: "لنجعل",
    headlineIt: "الأفكار",
    headlineMatter: "تُحدث أثرًا.",
    headlineIdea: "الفكرة",
    headlineStarts: "تبدأ",
    headlineHere: "من هنا.",
    mavesRead: "قراءة MAVE",
    description: "{mood}، {color}، {density} و{feel}.",
    mediums: {
      photography: "تصوير",
      abstract: "تجريدي",
      illustration: "رسم توضيحي",
      "typography-only": "طباعة فقط",
    },
    compositions: {
      "asymmetric-spacious": "غير متماثل وفسيح",
      "centered-bold": "مركّز وجريء",
      "single-element-minimal": "عنصر واحد بأسلوب بسيط",
      "scattered-playful": "متناثر ومرح",
    },
    moodFeels: {
      Editorial: "أنيق",
      Bold: "واثق",
      Minimal: "مدروس",
      Playful: "تعبيري",
    },
    colorFeels: {
      "Warm neutral": "دافئ",
      Vibrant: "زاهٍ",
      "Cool muted": "بارد",
      Monochrome: "أحادي اللون",
    },
    densityFeels: {
      Spacious: "فسيح",
      Balanced: "متوازن",
      Dense: "مضغوط",
    },
  },

  validation: {
    apiKeyRequired: "مفتاح الـ API مطلوب.",
    exampleEmpty: "لا يمكن أن تكون العيّنة فارغة.",
    maxExamples: "يمكنك إضافة حتى 5 عيّنات كتابة.",
  },

  errors: {
    mustBeSignedIn: "يجب تسجيل الدخول أولًا.",
    invalidInput: "إدخال غير صالح.",
    invalidPreferences: "تفضيلات غير صالحة.",
    notReadyToComplete: "خطوات الإعداد غير جاهزة للإتمام.",
    skipFailed: "تعذّر تخطي هذه الخطوة. حاول مرة أخرى.",
    connectFailed: "تعذّر ربط مزوّد الذكاء الاصطناعي. حاول مرة أخرى.",
    saveExamplesFailed: "تعذّر حفظ عيّنات الكتابة. حاول مرة أخرى.",
    savePreferencesFailed: "تعذّر حفظ تفضيلاتك البصرية. حاول مرة أخرى.",
    completeFailed: "تعذّر إكمال خطوات الإعداد. حاول مرة أخرى.",
  },
}
