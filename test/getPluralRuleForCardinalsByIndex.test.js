/* global it, expect */

import { getPluralRuleForCardinalsByIndex } from '../src/index'

it('is exported as a function', () => {
  expect(typeof getPluralRuleForCardinalsByIndex === 'function').toBeTruthy()
})

it('gets the rule for a valid rule index', () => {
  expect(typeof getPluralRuleForCardinalsByIndex(0)).toEqual('function')
})

it('throws an error for an invalid rule index', () => {
  expect(() => getPluralRuleForCardinalsByIndex(-1)).toThrow()
})
