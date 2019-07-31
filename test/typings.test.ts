import {
  getPluralFormForCardinalByLocale, getPluralRuleForCardinalsByLocale,
  getPluralFormNameForCardinalByLocale, getPluralRuleForNamedFormsForCardinalsByLocale,
  getPluralFormForCardinalByIndex, getPluralRuleForCardinalsByIndex,
  getPluralFormNameForCardinalByIndex, getPluralRuleForNamedFormsForCardinalsByIndex
} from '..'

declare function test (label: string, callback: Function)

test('Type declarations for TypeScript', () => {
  let rule: Function
  let formIndex: number
  let formName: string
  rule = getPluralRuleForCardinalsByIndex(0)
  rule = getPluralRuleForNamedFormsForCardinalsByIndex(0)
  rule = getPluralRuleForCardinalsByLocale('en')
  rule = getPluralRuleForNamedFormsForCardinalsByLocale('en')
  formIndex = getPluralFormForCardinalByIndex(7, 2)
  formName = getPluralFormNameForCardinalByIndex(7, 2)
  formIndex = getPluralFormForCardinalByLocale('cs', 3)
  formName = getPluralFormNameForCardinalByLocale('cs', 3)
})
