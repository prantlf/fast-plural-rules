import cardinals from './cardinals.js'

const { rules, rulesByLocale, formsByIndex } = cardinals

function normalizeLocale (locale) {
  return locale.toLowerCase().replace('_', '-')
}

function getLanguage (locale) {
  const separator = locale.indexOf('-')
  return separator > 0 ? locale.substr(0, separator) : locale
}

function getPluralRuleIndexForCardinalsByLocale (locale) {
  locale = normalizeLocale(locale)
  let index = rulesByLocale[locale]
  if (index === undefined) {
    const language = getLanguage(locale)
    index = rulesByLocale[language]
  }
  if (index === undefined) {
    throw new Error(`Unrecognized locale: "${locale}".`)
  }
  return index
}

function adaptPluralRuleForFormName (rule, index) {
  const forms = formsByIndex[index]
  return function (count) {
    return forms[rule(count)]
  }
}

function getPluralRuleForCardinalsByLocale (locale) {
  const index = getPluralRuleIndexForCardinalsByLocale(locale)
  return rules[index]
}

function getPluralRuleForCardinalsByIndex (index) {
  const rule = rules[index]
  if (rule === undefined) {
    throw new Error(`Invalid index: "${index}".`)
  }
  return rule
}

function getPluralRuleForNamedFormsForCardinalsByLocale (locale) {
  const index = getPluralRuleIndexForCardinalsByLocale(locale)
  return adaptPluralRuleForFormName(rules[index], index)
}

function getPluralRuleForNamedFormsForCardinalsByIndex (index) {
  const rule = rules[index]
  if (rule === undefined) {
    throw new Error(`Invalid index: "${index}".`)
  }
  return adaptPluralRuleForFormName(rules[index], index)
}

function getPluralFormForCardinalByLocale (locale, count) {
  const rule = getPluralRuleForCardinalsByLocale(locale)
  return rule(count)
}

function getPluralFormForCardinalByIndex (index, count) {
  const rule = getPluralRuleForCardinalsByIndex(index)
  return rule(count)
}

function getPluralFormNameForCardinalByLocale (locale, count) {
  const rule = getPluralRuleForNamedFormsForCardinalsByLocale(locale)
  return rule(count)
}

function getPluralFormNameForCardinalByIndex (index, count) {
  const rule = getPluralRuleForNamedFormsForCardinalsByIndex(index)
  return rule(count)
}

export {
  getPluralRuleForCardinalsByLocale, getPluralRuleForNamedFormsForCardinalsByLocale,
  getPluralFormForCardinalByLocale, getPluralFormNameForCardinalByLocale,
  getPluralRuleForCardinalsByIndex, getPluralRuleForNamedFormsForCardinalsByIndex,
  getPluralFormForCardinalByIndex, getPluralFormNameForCardinalByIndex
}
