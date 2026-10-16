export { I18nProvider, useI18n, useT, useLocale } from "./provider"
export {
  LOCALES,
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  HTML_DIR,
  isLocale,
  type Locale,
} from "./config"
export type {
  TranslationKey,
  TranslationParams,
  Translator,
  MessageTranslator,
} from "./translator"
export { isTranslationKey } from "./translator"
export type { Dictionary } from "./dictionaries"
