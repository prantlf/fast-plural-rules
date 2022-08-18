/* global it, expect */

import { getSupportedLocales } from '../src/index.js'
import cardinals from '../src/cardinals.js'

const { rulesByLocale } = cardinals

it('is exported as a function', () => {
  expect(typeof getSupportedLocales === 'function').toBeTruthy()
})

it('returns all supported locales', () => {
  expect(getSupportedLocales()).toEqual(Object.keys(rulesByLocale))
})

it('returns all supported locales when called once more', () => {
  expect(getSupportedLocales()).toEqual(Object.keys(rulesByLocale))
})
