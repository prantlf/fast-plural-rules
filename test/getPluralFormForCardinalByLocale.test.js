/* global it, expect */

import { getPluralFormForCardinalByLocale } from '../src/index.js'

it('is exported as a function', () => {
  expect(typeof getPluralFormForCardinalByLocale === 'function').toBeTruthy()
})

it('gets the form index for a valid locale', () => {
  expect(getPluralFormForCardinalByLocale('en', 1)).toEqual(0)
  expect(getPluralFormForCardinalByLocale('en', 2)).toEqual(1)
  expect(getPluralFormForCardinalByLocale('ru', 1)).toEqual(0)
  expect(getPluralFormForCardinalByLocale('ru', 2)).toEqual(1)
  expect(getPluralFormForCardinalByLocale('ru', 5)).toEqual(2)
  expect(getPluralFormForCardinalByLocale('ru', 21)).toEqual(0)
})

it('throws an error for an unknown locale', () => {
  expect(() => getPluralFormForCardinalByLocale('invalid', 1)).toThrow()
})
