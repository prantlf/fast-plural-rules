import { readFile } from 'fs/promises'
import { join } from 'path'
import parsePluralRule from './parse-plural-rule.js'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

function readPluralRulesFromComments () {
  return readInputFile().then(collectPluralRules)
}

function readInputFile () {
  const fileName = join(__dirname, '../src/cardinals.js')
  return readFile(fileName, 'utf8')
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

export default readPluralRulesFromComments
