import type { Auth } from "../en/auth"

export const auth: Auth = {
  layout: {
    taglineLine1: "أفكارك،",
    taglineLine2: "صوتك.",
    intro: "مساحة عمل شخصية لمحتوى يبدو كأنك أنت كتبته.",
    copyright: "© {year} MAVE",
  },

  signin: {
    eyebrow: "أهلاً بعودتك",
    title: "سجّل الدخول إلى MAVE.",
    subtitle: "تابع من حيث توقّفت.",
    submit: "تسجيل الدخول",
    submitting: "جارٍ تسجيل الدخول...",
    noAccount: "ليس لديك حساب؟",
    createAccount: "إنشاء حساب",
    forgotPassword: "نسيت كلمة المرور؟",
    fields: {
      email: {
        label: "البريد الإلكتروني",
        placeholder: "البريد الإلكتروني",
      },
      password: {
        label: "كلمة المرور",
        placeholder: "كلمة المرور",
      },
    },
  },

  signup: {
    eyebrow: "أنشئ حسابك",
    title: "ابدأ الإبداع.",
    subtitle: "فكرتك الأولى أقرب مما تظن.",
    submit: "إنشاء حساب",
    submitting: "جارٍ إنشاء الحساب...",
    haveAccount: "لديك حساب بالفعل؟",
    signIn: "تسجيل الدخول",
    fields: {
      name: {
        label: "الاسم",
        placeholder: "اسمك",
      },
      email: {
        label: "البريد الإلكتروني",
        placeholder: "someone@example.com",
      },
      password: {
        label: "كلمة المرور",
        placeholder: "8 أحرف على الأقل",
      },
      passwordConfirm: {
        label: "تأكيد كلمة المرور",
        placeholder: "تأكيد كلمة المرور",
      },
    },
  },

  separator: {
    or: "أو",
  },

  google: {
    continue: "المتابعة عبر Google",
    signingIn: "جارٍ الدخول عبر Google",
    error: "خطأ في الدخول عبر Google: {error}",
  },

  showPassword: "إظهار كلمة المرور",
  hidePassword: "إخفاء كلمة المرور",

  validation: {
    emailInvalid: "يرجى إدخال بريد إلكتروني صالح.",
    passwordTooShort: "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل.",
    nameTooShort: "يجب أن يتكون الاسم من حرفين على الأقل.",
    passwordConfirmTooShort:
      "يجب أن تتكون تأكيدة كلمة المرور من 8 أحرف على الأقل.",
    passwordsDoNotMatch: "كلمتا المرور غير متطابقتين.",
  },

  errors: {
    accountNotLinked: "حسابك في Google غير مرتبط بأي حساب موجود في MAVE.",
    invalidCredentials: "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
    emailExists: "يوجد حساب بهذا البريد الإلكتروني بالفعل.",
    userAlreadyExists: "يوجد حساب بهذا البريد الإلكتروني بالفعل.",
    accessDenied: "تم إلغاء الدخول عبر Google.",
    oauthError: "فشل الدخول عبر Google. حاول مرة أخرى.",
    signInFailed: "حدث خطأ أثناء تسجيل دخولك. حاول مرة أخرى.",
    unexpected: "حدث خطأ ما. حاول مرة أخرى.",
    failedToCreateAccount: "تعذّر إنشاء حسابك.",
  },
}
