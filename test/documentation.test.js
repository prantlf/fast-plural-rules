/* global it, expect */

import { readPluralRulesFromDescription } from '../util/read-rules-from-description'
import { readPluralRulesFromComments } from '../util/read-rules-from-comments'

const descriptions = readPluralRulesFromDescription()
const comments = readPluralRulesFromComments()

it('markdown description matches code comments', () => {
  return Promise.all([descriptions, comments]).then(([descriptions, comments]) => {
    comparePluralRules(descriptions, comments)
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
