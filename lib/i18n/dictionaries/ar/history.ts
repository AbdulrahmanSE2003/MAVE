import type { History } from "../en/history"

export const history: History = {
  header: {
    eyebrow: "مساحة عملك / السجل",
    title: "السجل",
    description: "كل فكرة حولتها إلى محتوى، في مكان واحد.",
    itemsOne: "عنصر",
    itemsOther: "عناصر",
  },
  showMore: "عرض المزيد",
  loadingMore: "جاري تحميل المزيد...",
  deleteSuccess: "تم حذف المنشور بنجاح.",

  errors: {
    fetchFailed: "تعذّر تحميل السجل. يرجى المحاولة مرة أخرى.",
    deleteFailed: "فشل حذف المنشور. حاول مرة تانية.",
  },

  filters: {
    all: "الكل",
    posts: "المنشورات",
    visual: "المرئيات",
    searchPlaceholder: "ابحث في محتواك...",
    searchAriaLabel: "البحث في السجل",
    resultsOne: "{count} نتيجة",
    resultsOther: "{count} نتائج",
    recentlyGenerated: "المُولَّد مؤخرًا",
    newestFirst: "الأحدث أولًا",
  },

  status: {
    generated: "مُولَّد",
    edited: "مُعدَّل",
  },

  card: {
    copyAriaLabel: "نسخ {title}",
    moreActionsAriaLabel: "إجراءات إضافية لـ {title}",
    copyContent: "نسخ المحتوى",
    removeFromList: "إزالة من القائمة",
    removeUnavailableTitle: "ستتوفر إزالة العناصر عند ربط السجل.",
    copiedMessage: "تم نسخ المحتوى إلى الحافظة.",
  },

  empty: {
    title: "لا توجد نتائج",
    noMatches: "جرّب بحثًا آخر أو بدّل فلتر المنصة للعثور على ما تبحث عنه.",
    noItems: "سجلك فارغ. سيظهر المحتوى المُولَّد هنا فور حفظه.",
    clearFilters: "مسح الفلاتر",
  },

  footer: {
    previewNote:
      "مساحتك الإبداعية في مكان واحد. ارجع لمنشوراتك وتصميماتك المحفوظة وقت ما تحتاجها.",
  },

  stubs: {
    page: "صفحة",
  },

  items: {
    consistency: {
      title: "الاستمرارية أهم من الحافز",
      excerpt:
        "لا تحتاج إلى أن تشعر بالحافز كل يوم. تحتاج إلى نظام يحملك على التقدم حتى حين لا تشعر بذلك.",
      date: "12 أكتوبر 2026",
    },
    maveIdea: {
      title: "الفكرة وراء MAVE",
      excerpt:
        "أفكارك تستحق أن تبدو بصوتك أنت. لا كمنشور آخر مُولَّد بالذكاء الاصطناعي رآه الجميع.",
      date: "11 أكتوبر 2026",
    },
    buildingInPublic: {
      title: "ما تعلمته من البناء العلني",
      excerpt:
        "البناء العلني ليس أن تشارك كل شيء صغير. بل أن تشارك ما تتعلمه على الطريق.",
      date: "10 أكتوبر 2026",
    },
    lessPlanning: {
      title: "تخطيط أقل، وبناء أكثر",
      excerpt:
        "أحيانًا يكون أسرع طريق للوصول إلى الإجابة الصحيحة أن تبني أصغر نسخة وتتعلم منها.",
      date: "8 أكتوبر 2026",
    },
  },
}
