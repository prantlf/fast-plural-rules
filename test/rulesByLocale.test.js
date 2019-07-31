/* global it, expect */

import cardinals from '../src/cardinals'
import descriptions from './plural-rule-definitions.json'

const { rules, rulesByLocale } = cardinals
const documentedLocales = getDocumentedLocales()
  .map(locale => locale.toLowerCase())
const recognizedLocales = Object.keys(rulesByLocale)

function getDocumentedLocales () {
  return descriptions
    .filter(description => description.locales)
    .reduce((result, description) => {
      const locales = description.locales
        .replace(/ \([^)]+\)/g, '')
        .split(', ')
      return result.concat(locales)
    }, [])
}

it('are exported as an object', () => {
  expect(typeof rulesByLocale === 'object').toBeTruthy()
})

it('all locales point to a valid rule index', () => {
  for (const locale in rulesByLocale) {
    const index = rulesByLocale[locale]
    expect(typeof rules[index],
      `Locale "${locale}", rule ${index}.`).toEqual('function')
  }
})

it('all recognized locales are documented', () => {
  recognizedLocales.forEach(locale =>
    expect(documentedLocales.includes(locale), locale).toBeTruthy())
})

it('all documented locales are recognized', () => {
  documentedLocales.forEach(locale =>
    expect(recognizedLocales.includes(locale), locale).toBeTruthy())
})

it('locales point to the rules as documented', () => {
  descriptions.forEach((description, ruleIndex) => {
    if (description.locales) {
      description.locales
        .replace(/ \([^)]+\)/g, '')
        .split(', ')
        .forEach(locale => {
          const index = rulesByLocale[locale.toLowerCase()]
          expect(index,
            `${description.name} - locale "${locale}"`).toEqual(ruleIndex)
        })
    }
  })
})
