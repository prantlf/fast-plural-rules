const {
  getPluralFormForCardinalByLocale, getPluralRuleForCardinalsByLocale,
  getPluralFormNameForCardinalByLocale, getPluralRuleForNamedFormsForCardinalsByLocale,
  getPluralFormForCardinalByIndex, getPluralRuleForCardinalsByIndex,
  getPluralFormNameForCardinalByIndex, getPluralRuleForNamedFormsForCardinalsByIndex
} = require('fast-plural-rules')

let _rule
let _formIndex
let _formName
_rule = getPluralRuleForCardinalsByIndex(0)
_rule = getPluralRuleForNamedFormsForCardinalsByIndex(0)
_rule = getPluralRuleForCardinalsByLocale('en')
_rule = getPluralRuleForNamedFormsForCardinalsByLocale('en')
_formIndex = getPluralFormForCardinalByIndex(7, 2)
_formName = getPluralFormNameForCardinalByIndex(7, 2)
_formIndex = getPluralFormForCardinalByLocale('cs', 3)
_formName = getPluralFormNameForCardinalByLocale('cs', 3)
