'use strict'

const { outputFile } = require('fs-extra')
const { join } = require('path')
const readPluralRulesFromDescription = require('./read-rules-from-description')

async function writePluralRulesJSON (pluralRules) {
  const fileName = join(__dirname, '../test/plural-rule-definitions.json')
  console.log(`Writing plural rule description as JSON...`)
  await outputFile(fileName, pluralRules)
  return pluralRules
}

async function writePluralRulesJavaScript (pluralRules) {
  const fileName = join(__dirname, '../test/plural-rule-definitions.js')
  console.log(`Writing plural rule description as JavaScript...`)
  await outputFile(fileName, 'var pluralRuleDefinitions = ' + pluralRules)
}

console.log(`Reading plural rule description as Markdown...`)
readPluralRulesFromDescription()
  .then(pluralRules => JSON.stringify(pluralRules, undefined, 2))
  .then(writePluralRulesJSON)
  .then(writePluralRulesJavaScript)
  .catch(error => {
    console.error(error)
    process.exitCode = 1
  })
