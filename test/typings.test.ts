import {
  getPluralRuleForCardinalsByIndex, getPluralRuleForCardinalsByLocale,
  getPluralFormForCardinalByIndex, getPluralFormForCardinalByLocale
} from '..'

declare function test (label: string, callback: Function)

test('Type declarations for TypeScript', () => {
  getPluralRuleForCardinalsByIndex(0)
  getPluralRuleForCardinalsByLocale('en')
  getPluralFormForCardinalByIndex(7, 2)
  getPluralFormForCardinalByLocale('cs', 3)
})
