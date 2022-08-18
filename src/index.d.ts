declare type getPluralFormForCardinal = (count: number) => number

export function getPluralFormForCardinalByLocale (locale: string, count: number): number
export function getPluralFormNameForCardinalByLocale (locale: string, count: number): string

export function getPluralFormForCardinalByIndex (index: number, count: number): number
export function getPluralFormNameForCardinalByIndex (index: number, count: number): string

export function getPluralRuleForCardinalsByLocale (locale: string): getPluralFormForCardinal
export function getPluralRuleForNamedFormsForCardinalsByLocale (locale: string): getPluralFormForCardinal

export function getPluralRuleForCardinalsByIndex (index: number): getPluralFormForCardinal
export function getPluralRuleForNamedFormsForCardinalsByIndex (index: number): getPluralFormForCardinal

export as namespace fastPluralRules
