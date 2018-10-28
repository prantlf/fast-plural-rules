/* global it, expect */

import { getPluralRuleForCardinalsByLocale } from '../src/index'

it('is exported as a function', () => {
  expect(typeof getPluralRuleForCardinalsByLocale === 'function').toBeTruthy()
})

it('gets the rule for a valid locale', () => {
  expect(typeof getPluralRuleForCardinalsByLocale('en')).toEqual('function')
})

it('normalizes an uppercase locale using underscores', () => {
  expect(typeof getPluralRuleForCardinalsByLocale('PT_BR')).toEqual('function')
})

it('defaults to a language if a specific country is not available', () => {
  expect(typeof getPluralRuleForCardinalsByLocale('en-UK')).toEqual('function')
})

it('throws an error for an unknown locale', () => {
  expect(() => getPluralRuleForCardinalsByLocale('invalied')).toThrow()
})
