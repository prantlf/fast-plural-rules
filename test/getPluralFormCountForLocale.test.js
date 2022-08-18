/* global it, expect */

import { getPluralFormCountForLocale } from '../src/index.js'

it('is exported as a function', () => {
  expect(typeof getPluralFormCountForLocale === 'function').toBeTruthy()
})

it('returns a plural form count for a supported locale', () => {
  expect(getPluralFormCountForLocale('cs')).toEqual(3)
})

it('returns an undefined for an unsupported locale', () => {
  expect(getPluralFormCountForLocale('dummy')).toEqual(undefined)
})
