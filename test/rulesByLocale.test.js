/* global it, expect */

import cardinals from '../src/cardinals'

const { rules, rulesByLocale } = cardinals

it('are exported as an object', () => {
  expect(typeof rulesByLocale === 'object').toBeTruthy()
})

it('all locales point to a valid rule index', () => {
  for (const locale in rulesByLocale) {
    const index = rulesByLocale[locale]
    expect(typeof rules[index]).toEqual('function')
  }
})
