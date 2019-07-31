/* global it, expect */

import cardinals from '../src/cardinals'
import descriptions from './plural-rule-definitions.json'

const { rules } = cardinals

it('are exported as an array', () => {
  expect(Array.isArray(rules)).toBeTruthy()
})

it('all of them are functions', () => {
  rules.forEach((rule, index) => {
    expect(typeof rule, `Rule at ${index}.`).toEqual('function')
  })
})

it('compute sample cardinals from each form', () => {
  expect(rules.length).toEqual(descriptions.length)
  descriptions.forEach((description, ruleIndex) => {
    const rule = rules[ruleIndex]
    const forms = description.forms
    const formNames = Object.keys(forms)
    formNames.forEach((formName, formIndex) =>
      forms[formName]
        .split(', ')
        .map(cardinal => +cardinal)
        .filter(cardinal => !isNaN(cardinal))
        .forEach(cardinal =>
          expect(rule(cardinal),
            `${description.name} - the rule "${formName}" with ${cardinal}.`)
            .toEqual(formIndex))
    )
  })
})
