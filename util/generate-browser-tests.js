'use strict'

const { readFile, outputFile } = require('fs-extra')
const { promisify } = require('es6-promisify')
const { join } = require('path')
const glob = require('fast-glob')
let rimraf = require('rimraf')

rimraf = promisify(rimraf)

const tests = join(__dirname, '../test')
const browserTests = join(tests, 'browser')
const nonBrowserTests = [
  'browser.test.js', 'documentation.test.js', 'typings.test.js'
]
const importModuleExpression = /import ((?:{[^}]+})|(?:\w+)) from '..\/src\/([^']+)'/
const importDataExpression = /import descriptions from '.\/plural-rule-definitions.json'/

function readTemplate () {
  console.log(`Reading browser test template...`)
  return readFile(join(tests, 'browser.html'), { encoding: 'utf-8' })
    .then(template => template.split('\n'))
}

function readTest (file) {
  return readFile(join(tests, file), { encoding: 'utf-8' })
    .then(content => {
      content = content.split('\n')
      return content.slice(2, content.length - 1)
    })
}

let counter = 0

function formatModuleImport (input) {
  const match = importModuleExpression.exec(input)
  if (!match) {
    throw new Error('Statement requiring the code module not found.')
  }
  const functionCodeLine = input.replace(importModuleExpression,
    `const $1 = window['fastPluralRules']`)
  let scriptName
  if (match[1] === 'cardinals') {
    scriptName = '../cardinals.umd.js'
  } else {
    scriptName = counter++ % 2 === 0 ? '../../dist/index.umd.min.js'
      : '../../dist/index.umd.js'
  }
  const functionScriptElement = [
    '<script src="' + scriptName + '"></script>'
  ]
  return { functionCodeLine, functionScriptElement }
}

function formatDataImport (input) {
  const match = importDataExpression.exec(input)
  let dataCodeLine
  let dataScriptElement
  if (match) {
    dataCodeLine = input.replace(importDataExpression,
      `const descriptions = window['pluralRuleDefinitions']`)
    dataScriptElement = [
      '<script src="../plural-rule-definitions.js"></script>'
    ]
  }
  return { dataCodeLine, dataScriptElement }
}

function formatPage (template, contentIndex, content) {
  const { functionCodeLine, functionScriptElement } = formatModuleImport(content[0])
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

console.log(`Deleting existing browser tests...`)
let template
rimraf(browserTests)
  .then(() => readTemplate())
  .then(result => {
    template = result
    return glob('*.test.js', { cwd: tests })
  })
  .then(files => {
    const scriptIndex = template.indexOf('</head>')
    files
      .filter(file => !nonBrowserTests.includes(file))
      .reduce((promise, file) => {
        console.log(`Processing test ${file}...`)
        return promise.then(() =>
          readTest(file)
            .then(content => {
              content = formatPage(template, scriptIndex, content)
              file = join(browserTests, file.substr(0, file.length - 2) + 'html')
              return outputFile(file, content.join('\n'))
            })
        )
      }, Promise.resolve())
  })
  .catch(error => {
    console.error(error)
    process.exitCode = 1
  })
