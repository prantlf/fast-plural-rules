/* global it, expect */

import cardinals from '../src/cardinals.js'
import descriptions from './plural-rule-definitions.js'

const { formsByIndex } = cardinals

it('are exported as an array', () => {
  expect(Array.isArray(formsByIndex)).toBeTruthy()
})

it('all rules have form names assigned', () => {
  expect(formsByIndex.length).toEqual(descriptions.length)
  formsByIndex.forEach((forms, index) =>
    expect(Array.isArray(forms), `Forms at ${index}.`).toBeTruthy())
})

it('rules have their form names assigned as documented', () => {
  descriptions.forEach((description, index) => {
    const namedForms = formsByIndex[index]
    const indexedForms = Object.keys(description.forms)
    expect(namedForms.length, `${description.name} - forms`).toEqual(indexedForms.length)
    expect(namedForms.length, `${description.name} - namedForms`).toEqual(description.namedForms.length)
    namedForms.forEach((namedForm, index) =>
      expect(namedForm, `Form at ${index}.`).toEqual(description.namedForms[index]))
  })
})
