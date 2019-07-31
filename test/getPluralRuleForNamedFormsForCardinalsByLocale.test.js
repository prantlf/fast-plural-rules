/* global it, expect */

import { getPluralRuleForNamedFormsForCardinalsByLocale } from '../src/index'

it('is exported as a function', () => {
  expect(typeof getPluralRuleForNamedFormsForCardinalsByLocale === 'function').toBeTruthy()
})

it('gets the rule for a valid locale', () => {
  expect(typeof getPluralRuleForNamedFormsForCardinalsByLocale('en')).toEqual('function')
})

it('normalizes an upper-case locale using underscores', () => {
  expect(typeof getPluralRuleForNamedFormsForCardinalsByLocale('PT_BR')).toEqual('function')
})

it('defaults to a language if a specific country is not available', () => {
  expect(typeof getPluralRuleForNamedFormsForCardinalsByLocale('en-UK')).toEqual('function')
})

it('throws an error for an unknown locale', () => {
  expect(() => getPluralRuleForNamedFormsForCardinalsByLocale('invalid')).toThrow()
})
