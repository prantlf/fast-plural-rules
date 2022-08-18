import { readFile } from 'fs/promises'
import { join } from 'path'
import parsePluralRule from './parse-plural-rule.js'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

function readPluralRulesFromDescription () {
  return readInputFile().then(collectPluralRules)
}

function readInputFile () {
  const fileName = join(__dirname, '../docs/languages.md')
  return readFile(fileName, 'utf8')
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

export default readPluralRulesFromDescription
