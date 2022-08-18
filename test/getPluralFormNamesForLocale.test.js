/* global it, expect */

import { getPluralFormNamesForLocale } from '../src/index.js'

it('is exported as a function', () => {
  expect(typeof getPluralFormNamesForLocale === 'function').toBeTruthy()
})

it('returns plural form names for a supported locale', () => {
  expect(getPluralFormNamesForLocale('cs')).toEqual(['one', 'few', 'other'])
})

it('returns an undefined for an unsupported locale', () => {
  expect(getPluralFormNamesForLocale('dummy')).toEqual(undefined)
})
