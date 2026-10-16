import type { Errors } from "../en/errors"

export const errors: Errors = {
  error: {
    title: "حدث خطأ ما",
    description: "تعذّر تحميل هذه الصفحة. حاول مرة أخرى.",
    retry: "المحاولة مرة أخرى",
  },

  notFound: {
    title: "الصفحة غير موجودة",
    description: "الصفحة التي تبحث عنها غير موجودة، أو ربما تم نقلها.",
    backHome: "العودة إلى الصفحة الرئيسية",
  },

  loading: {
    label: "جاهزون للانطلاق",
    description: "جارٍ تجهيز مساحة عملك…",
  },
}
