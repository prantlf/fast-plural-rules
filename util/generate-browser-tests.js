import { mkdir, readFile, rm, writeFile } from 'fs/promises'
import { join } from 'path'
import glob from 'fast-glob'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const tests = join(__dirname, '../test')
const browserTests = join(tests, 'browser')
const nonBrowserTests = [
  'browser.test.js', 'documentation.test.js', 'typings.test.js'
]
const importModuleExpression = /import ((?:{[^}]+})|(?:\w+)) from '..\/src\/([^']+)'/
const importDataExpression = /import descriptions from '.\/plural-rule-definitions.js'/

function readTemplate () {
  console.log('Reading browser test template...')
  return readFile(join(tests, 'browser.html'), 'utf8')
    .then(template => template.split('\n'))
}

function readTest (file) {
  return readFile(join(tests, file), 'utf8')
    .then(content => {
      content = content.split('\n')
      return content.slice(2, content.length - 1)
    })
}

let counter = 0

function formatModuleImport (input) {
  const match = importModuleExpression.exec(input)
  let functionCodeLine
  let functionScriptElement
  if (match) {
    let varName, scriptName
    if (match[1] === 'cardinals') {
      varName = 'fastPluralData'
      scriptName = '../cardinals.umd.js'
    } else {
      varName = 'fastPluralRules'
      scriptName = counter++ % 2 === 0 ? '../../dist/index.umd.min.js' : '../../dist/index.umd.js'
    }
    functionCodeLine = input.replace(importModuleExpression, `const $1 = window.${varName}`)
    functionScriptElement = [`<script src="${scriptName}"></script>`]
  }
  return { functionCodeLine, functionScriptElement }
}

function formatMainModuleImport (input) {
  const { functionCodeLine, functionScriptElement } = formatModuleImport(input)
  if (!functionCodeLine) {
    throw new Error('Statement requiring the code module not found.')
  }
  return { functionCodeLine, functionScriptElement }
}

function formatDataImport (input) {
  const match = importDataExpression.exec(input)
  let dataCodeLine
  let dataScriptElement
  if (match) {
    dataCodeLine = input.replace(importDataExpression, 'const descriptions = window[\'pluralRuleDefinitions\']')
    dataScriptElement = ['<script src="../plural-rule-definitions.browser.js"></script>']
  } else {
    ({ functionCodeLine: dataCodeLine, functionScriptElement: dataScriptElement } = formatModuleImport(input))
  }
  return { dataCodeLine, dataScriptElement }
}

function formatPage (template, contentIndex, content) {
  const { functionCodeLine, functionScriptElement } = formatMainModuleImport(content[0])
  const { dataCodeLine, dataScriptElement } = formatDataImport(content[1])
  content[0] = functionCodeLine
  if (dataCodeLine) {
    content[1] = dataCodeLine
  }
  return template.slice(0, contentIndex)
    .concat('')
    .concat(functionScriptElement)
    .concat(dataScriptElement || [])
    .concat('')
    .concat('<script>', '(function () {', content, '})()', '</script>')
    .concat(template.slice(contentIndex))
}

console.log('Deleting existing browser tests...')
await rm(browserTests, { recursive: true, force: true })
await mkdir(browserTests, { recursive: true })
const template = await readTemplate()
const files = await glob('*.test.js', { cwd: tests })
const scriptIndex = template.indexOf('</head>')
await Promise.all(files
  .filter(file => !nonBrowserTests.includes(file))
  .map(async file => {
    console.log(`Processing test ${file}...`)
    let content = await readTest(file)
    content = formatPage(template, scriptIndex, content)
    file = join(browserTests, `${file.substring(0, file.length - 2)}html`)
    await writeFile(file, content.join('\n'))
  }))
