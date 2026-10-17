import type { Dictionary } from "./dictionaries/en"

/**
 * Dotted paths to every string leaf of the dictionary. Arrays (lists of
 * options rendered with `.map()`) are excluded — they are read from `dict`
 * directly instead of through `t`.
 */
type PathsOf<T> = T extends string
  ? never
  : T extends readonly unknown[]
    ? never
    : {
        [K in keyof T & string]: T[K] extends string
          ? K
          : T[K] extends readonly unknown[]
            ? never
            : `${K}.${PathsOf<T[K]>}`
      }[keyof T & string]

export type TranslationKey = PathsOf<Dictionary>

export type TranslationParams = Record<string, string | number>

export type Translator = (
  key: TranslationKey,
  params?: TranslationParams
) => string

/** Resolves a dotted path against a dictionary, e.g. `settings.title`. */
export function resolveTranslation(
  dict: Dictionary,
  key: string
): string | undefined {
  let node: unknown = dict

  for (const part of key.split(".")) {
    if (typeof node !== "object" || node === null) return undefined
    node = (node as Record<string, unknown>)[part]
  }

  return typeof node === "string" ? node : undefined
}

function interpolate(message: string, params?: TranslationParams): string {
  if (!params) return message

  return message.replace(/\{(\w+)\}/g, (placeholder, name: string) => {
    const value = params[name]
    return value === undefined ? placeholder : String(value)
  })
}

/**
 * Builds a translator for one locale. Unknown keys (which the type system
 * should make impossible) fall back to English, then to the key itself, so a
 * missing string degrades instead of crashing.
 */
export function createTranslator(
  dict: Dictionary,
  fallback: Dictionary = dict
): Translator {
  return (key, params) => {
    const message = resolveTranslation(dict, key)

    if (message !== undefined) return interpolate(message, params)

    const fallbackMessage = resolveTranslation(fallback, key)
    if (fallbackMessage !== undefined) return interpolate(fallbackMessage, params)

    return key
  }
}

/**
 * Translates runtime strings that may or may not be translation keys —
 * e.g. zod issue messages, which are keys when defined in a schema but plain
 * text coming from a library otherwise. Known keys are translated; anything
 * else passes through unchanged.
 */
export type MessageTranslator = (message: string) => string

export function createMessageTranslator(
  dict: Dictionary,
  fallback: Dictionary = dict
): MessageTranslator {
  return (message) => {
    const resolved =
      resolveTranslation(dict, message) ?? resolveTranslation(fallback, message)
    return resolved ?? message
  }
}
