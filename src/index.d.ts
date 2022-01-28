declare type getPluralFormForCardinal = (count: number) => number

declare function getPluralFormForCardinalByLocale (locale: string, count: number): number
declare function getPluralFormNameForCardinalByLocale (locale: string, count: number): string

declare function getPluralFormForCardinalByIndex (index: number, count: number): number
declare function getPluralFormNameForCardinalByIndex (index: number, count: number): string

declare function getPluralRuleForCardinalsByLocale (locale: string): getPluralFormForCardinal
declare function getPluralRuleForNamedFormsForCardinalsByLocale (locale: string): getPluralFormForCardinal

declare function getPluralRuleForCardinalsByIndex (index: number): getPluralFormForCardinal
declare function getPluralRuleForNamedFormsForCardinalsByIndex (index: number): getPluralFormForCardinal

export {
  getPluralFormForCardinalByLocale, getPluralRuleForCardinalsByLocale,
  getPluralFormNameForCardinalByLocale, getPluralRuleForNamedFormsForCardinalsByLocale,
  getPluralFormForCardinalByIndex, getPluralRuleForCardinalsByIndex,
  getPluralFormNameForCardinalByIndex, getPluralRuleForNamedFormsForCardinalsByIndex,
  getPluralFormForCardinal
}

export as namespace fastPluralRules
