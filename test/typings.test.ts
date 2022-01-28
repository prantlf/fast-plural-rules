/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  getPluralFormForCardinalByLocale, getPluralRuleForCardinalsByLocale,
  getPluralFormNameForCardinalByLocale, getPluralRuleForNamedFormsForCardinalsByLocale,
  getPluralFormForCardinalByIndex, getPluralRuleForCardinalsByIndex,
  getPluralFormNameForCardinalByIndex, getPluralRuleForNamedFormsForCardinalsByIndex,
  getPluralFormForCardinal
} from '..'

declare type testCallback = () => void
declare function test (label: string, callback: testCallback): void

test('Type declarations for TypeScript', () => {
  let rule: getPluralFormForCardinal
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
