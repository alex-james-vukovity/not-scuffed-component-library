export const __DEV__ = process.env.NODE_ENV !== "production"

export const isDefined = (value: unknown): boolean =>
  typeof value !== "undefined" && value !== undefined

export const isUndefined = (value: unknown): boolean =>
  typeof value === "undefined" || value === undefined

export const isArray = (value: unknown): boolean => Array.isArray(value)

export const isEmptyArray = (value: unknown): boolean =>
  Array.isArray(value) && value.length === 0
