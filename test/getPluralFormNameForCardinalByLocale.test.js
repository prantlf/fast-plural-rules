/* global it, expect */

import { getPluralFormNameForCardinalByLocale } from '../src/index'

it('is exported as a function', () => {
  expect(typeof getPluralFormNameForCardinalByLocale === 'function').toBeTruthy()
})

it('gets the form index for a valid locale', () => {
  expect(getPluralFormNameForCardinalByLocale('en', 1)).toEqual('one')
  expect(getPluralFormNameForCardinalByLocale('en', 2)).toEqual('other')
  expect(getPluralFormNameForCardinalByLocale('ru', 1)).toEqual('one')
  expect(getPluralFormNameForCardinalByLocale('ru', 2)).toEqual('few')
  expect(getPluralFormNameForCardinalByLocale('ru', 5)).toEqual('other')
  expect(getPluralFormNameForCardinalByLocale('ru', 21)).toEqual('one')
})

it('throws an error for an unknown locale', () => {
  expect(() => getPluralFormNameForCardinalByLocale('invalid', 1)).toThrow()
})
