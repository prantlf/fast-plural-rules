/* global it, expect */

import readPluralRulesFromComments from '../util/read-rules-from-comments'
import descriptions from './plural-rule-definitions.json'

it('markdown description matches code comments', () => {
  return readPluralRulesFromComments()
    .then(comments => comparePluralRules(descriptions, comments))
})

it('rules are numbered ascending', () => {
  descriptions.forEach((description, index) => {
    const match = /#(\d+)/.exec(description.name)
    expect(match).toBeTruthy()
    const ruleIndex = +match[1]
    expect(ruleIndex, description.name).toEqual(index)
  })
})

it('form count matches the note in the rule title', () => {
  descriptions.forEach(description => {
    const match = /\((\d+) form(?:s)?\)/.exec(description.name)
    expect(match).toBeTruthy()
    const formCount = +match[1]
    expect(Object.keys(description.forms).length, description.name).toEqual(formCount)
  })
})

it('locales are assigned to distinct rules', () => {
  const referredLocales = {}
  descriptions
    .filter(description => description.locales)
    .forEach(description => {
      description.locales
        .replace(/ \([^)]+\)/g, '')
        .split(', ')
        .forEach(locale => {
          expect(referredLocales[locale],
            `${description.name} - locale "${locale}"`).toBeFalsy()
          referredLocales[locale] = true
        })
    })
})

function comparePluralRules (descriptions, comments) {
  expect(descriptions.length).toEqual(comments.length)
  for (let i = 0; i < descriptions.length; ++i) {
    comparePluralRule(descriptions[i], comments[i])
  }
}

function comparePluralRule (description, comment) {
  expect(description.families).toEqual(comment.families)
  expect(description.locales).toEqual(comment.locales)
  comparePluralForms(description.forms, comment.forms)
}

function comparePluralForms (description, comment) {
  const descriptionNames = Object.keys(description)
  const commentNames = Object.keys(comment)
  expect(descriptionNames.length).toEqual(commentNames.length)
  for (let i = 0; i < descriptionNames.length; ++i) {
    const name = descriptionNames[i]
    expect(name).toEqual(commentNames[i])
    expect(description[name]).toEqual(comment[name])
  }
}
