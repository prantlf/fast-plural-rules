'use strict'

const { readFile } = require('fs-extra')
const { join } = require('path')
const parsePluralRule = require('./parse-plural-rule')

function readPluralRulesFromComments () {
  return readInputFile().then(collectPluralRules)
}

function readInputFile () {
  const fileName = join(__dirname, '../src/cardinals.js')
  return readFile(fileName, { encoding: 'utf-8' })
    .then(content => content.split(/\r?\n/))
}

function collectPluralRules (lines) {
  const pluralRules = []
  let currentPluralRuleName
  let currentPluralRule
  lines.forEach(line => {
    if (!line.startsWith('    // ')) {
      if (currentPluralRuleName) {
        pluralRules.push(parsePluralRule(currentPluralRuleName, currentPluralRule))
      }
      currentPluralRuleName = undefined
      return
    }
    line = line.substr(7).trim()
    if (currentPluralRuleName) {
      currentPluralRule.push(line)
    } else {
      currentPluralRuleName = line
      currentPluralRule = []
    }
  })
  return pluralRules
}

module.exports = readPluralRulesFromComments
