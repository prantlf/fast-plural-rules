/* global it, expect */

import { getPluralFormForCardinalByIndex } from '../src/index'

it('is exported as a function', () => {
  expect(typeof getPluralFormForCardinalByIndex === 'function').toBeTruthy()
})

it('gets the form index for a valid rule index', () => {
  expect(getPluralFormForCardinalByIndex(1, 1)).toEqual(0)
  expect(getPluralFormForCardinalByIndex(1, 2)).toEqual(1)
  expect(getPluralFormForCardinalByIndex(7, 1)).toEqual(0)
  expect(getPluralFormForCardinalByIndex(7, 2)).toEqual(1)
  expect(getPluralFormForCardinalByIndex(7, 5)).toEqual(2)
  expect(getPluralFormForCardinalByIndex(7, 21)).toEqual(0)
})

it('throws an error for an invalid rule index', () => {
  expect(() => getPluralFormForCardinalByIndex(-1, 1)).toThrow()
})
