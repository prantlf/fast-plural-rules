/* global it, expect */

import cardinals from '../src/cardinals'

const { rules } = cardinals

it('are exported as an array', () => {
  expect(Array.isArray(rules)).toBeTruthy()
})

it('all of them are functions', () => {
  for (const rule of rules) {
    expect(typeof rule).toEqual('function')
  }
})
