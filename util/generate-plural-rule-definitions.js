import { writeFile } from 'fs/promises'
import { join } from 'path'
import readPluralRulesFromDescription from './read-rules-from-description.js'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function writePluralRulesBrowserJavaScript (pluralRules) {
  const fileName = join(__dirname, '../test/plural-rule-definitions.browser.js')
  console.log('Writing plural rule description as browser JavaScript...')
  await writeFile(fileName, `var pluralRuleDefinitions = ${pluralRules}`)
}

async function writePluralRulesJavaScript (pluralRules) {
  const fileName = join(__dirname, '../test/plural-rule-definitions.js')
  console.log('Writing plural rule description as JavaScript...')
  await writeFile(fileName, `export default ${pluralRules}`)
}

console.log('Reading plural rule description as Markdown...')
const pluralRules = await readPluralRulesFromDescription()
const pluralRulesContent = JSON.stringify(pluralRules, undefined, 2)
await writePluralRulesBrowserJavaScript(pluralRulesContent)
await writePluralRulesJavaScript(pluralRulesContent)
