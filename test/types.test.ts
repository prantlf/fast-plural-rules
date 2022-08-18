import {
  getPluralFormForCardinalByLocale, getPluralRuleForCardinalsByLocale,
  getPluralFormNameForCardinalByLocale, getPluralRuleForNamedFormsForCardinalsByLocale,
  getPluralFormForCardinalByIndex, getPluralRuleForCardinalsByIndex,
  getPluralFormNameForCardinalByIndex, getPluralRuleForNamedFormsForCardinalsByIndex,
  getSupportedLocales, getPluralFormCountForLocale, getPluralFormNamesForLocale,
  getPluralFormForCardinal
} from 'fast-plural-rules'

declare type testCallback = () => void
declare function test (label: string, callback: testCallback): void

test('Type declarations for TypeScript', () => {
  let _rule: getPluralFormForCardinal
  let _formIndex: number
  let _formName: string
  _rule = getPluralRuleForCardinalsByIndex(0)
  _rule = getPluralRuleForNamedFormsForCardinalsByIndex(0)
  _rule = getPluralRuleForCardinalsByLocale('en')
  _rule = getPluralRuleForNamedFormsForCardinalsByLocale('en')
  _formIndex = getPluralFormForCardinalByIndex(7, 2)
  _formName = getPluralFormNameForCardinalByIndex(7, 2)
  _formIndex = getPluralFormForCardinalByLocale('cs', 3)
  _formName = getPluralFormNameForCardinalByLocale('cs', 3)
  const _locales: string[] = getSupportedLocales()
  const _pluralFormCount: number | undefined = getPluralFormCountForLocale('cs')
  const _pluralFormNames: string[] | undefined = getPluralFormNamesForLocale('cs')
})
