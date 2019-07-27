'use strict'

const { readFile } = require('fs-extra')
const { join } = require('path')
const { parsePluralRule } = require('./parse-plural-rule')

function readPluralRulesFromDescription () {
  return readInputFile().then(collectPluralRules)
}

function readInputFile () {
  const inputFile = join(__dirname, '../docs/languages.md')
  return readFile(inputFile, { encoding: 'utf-8' })
    .then(content => content.split(/\r?\n/))
}

function collectPluralRules (lines) {
  const pluralRules = []
  let currentPluralRuleName
  let currentPluralRule
  let insidePluralRuleDescription
  lines.forEach(line => {
    if (line === '```txt') {
      currentPluralRule = []
      insidePluralRuleDescription = true
      return
    }
    if (line === '```') {
      pluralRules.push(parsePluralRule(currentPluralRuleName, currentPluralRule))
      insidePluralRuleDescription = false
      return
    }
    if (insidePluralRuleDescription) {
      currentPluralRule.push(line.trim())
      return
    }
    if (line.startsWith('## ')) {
      currentPluralRuleName = line.substr(3).trim()
    }
  })
  return pluralRules
}

module.exports = { readPluralRulesFromDescription }
