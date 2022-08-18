/* global it, expect */

import { getPluralFormNameForCardinalByIndex } from '../src/index.js'

it('is exported as a function', () => {
  expect(typeof getPluralFormNameForCardinalByIndex === 'function').toBeTruthy()
})

it('gets the form index for a valid rule index', () => {
  expect(getPluralFormNameForCardinalByIndex(1, 1)).toEqual('one')
  expect(getPluralFormNameForCardinalByIndex(1, 2)).toEqual('other')
  expect(getPluralFormNameForCardinalByIndex(7, 1)).toEqual('one')
  expect(getPluralFormNameForCardinalByIndex(7, 2)).toEqual('few')
  expect(getPluralFormNameForCardinalByIndex(7, 5)).toEqual('other')
  expect(getPluralFormNameForCardinalByIndex(7, 21)).toEqual('one')
})

it('throws an error for an invalid rule index', () => {
  expect(() => getPluralFormNameForCardinalByIndex(-1, 1)).toThrow()
})
