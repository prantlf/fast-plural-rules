declare function getPluralFormForCardinalByLocale (locale: string, count: number): number
declare function getPluralFormNameForCardinalByLocale (locale: string, count: number): string

declare function getPluralFormForCardinalByIndex (index: number, count: number): number
declare function getPluralFormNameForCardinalByIndex (index: number, count: number): string

declare function getPluralRuleForCardinalsByLocale (locale: string): Function
declare function getPluralRuleForNamedFormsForCardinalsByLocale (locale: string): Function

declare function getPluralRuleForCardinalsByIndex (index: number): Function
declare function getPluralRuleForNamedFormsForCardinalsByIndex (index: number): Function

export {
  getPluralFormForCardinalByLocale, getPluralRuleForCardinalsByLocale,
  getPluralFormNameForCardinalByLocale, getPluralRuleForNamedFormsForCardinalsByLocale,
  getPluralFormForCardinalByIndex, getPluralRuleForCardinalsByIndex,
  getPluralFormNameForCardinalByIndex, getPluralRuleForNamedFormsForCardinalsByIndex
}

export as namespace fastPluralRules
