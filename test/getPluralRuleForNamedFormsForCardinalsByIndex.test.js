/* global it, expect */

import { getPluralRuleForNamedFormsForCardinalsByIndex } from '../src/index'

it('is exported as a function', () => {
  expect(typeof getPluralRuleForNamedFormsForCardinalsByIndex === 'function').toBeTruthy()
})

it('gets the rule for a valid rule index', () => {
  expect(typeof getPluralRuleForNamedFormsForCardinalsByIndex(0)).toEqual('function')
})

it('throws an error for an invalid rule index', () => {
  expect(() => getPluralRuleForNamedFormsForCardinalsByIndex(-1)).toThrow()
})
