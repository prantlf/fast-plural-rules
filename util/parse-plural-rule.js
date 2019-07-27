'use strict'

function parsePluralRule (name, ruleLines) {
  const { items: families, nextIndex: afterFamilies } = parseNamedList(ruleLines, 'Families')
  const { items: locales, nextIndex: afterLocales } = parseNamedList(ruleLines, 'Locales', afterFamilies)
  const forms = parsePluralForms(ruleLines, afterLocales)
  return { name, families, locales, forms }
}

function parseNamedList (ruleLines, listName, startIndex = 0) {
  const items = []
  let insideNamedList
  const nextIndex = ruleLines.findIndex((line, index) => {
    if (index < startIndex) {
      return
    }
    const match = /^([^:]+):\s*(.+)$/.exec(line)
    if (match) {
      if (!insideNamedList && match[1] === listName) {
        items.push(match[2])
        insideNamedList = true
        return
      }
      return true
    }
    if (insideNamedList) {
      items.push(line)
    }
  })
  return {
    items: items.join(' '), nextIndex
  }
}

function parsePluralForms (ruleLines, startIndex = 0) {
  const ignoredListNames = ['Families', 'Locales']
  const namedLists = {}
  let currentName
  let currentItems
  ruleLines.forEach((line, index) => {
    if (index < startIndex) {
      return
    }
    const match = /^([^:]+):\s*(.+)$/.exec(line)
    if (match) {
      if (currentItems) {
        saveNamedItems()
      }
      currentName = match[1]
      currentItems = ignoredListNames.includes(currentName) ? undefined : [match[2]]
      return
    }
    if (currentItems) {
      currentItems.push(line)
    }
  })
  saveNamedItems()
  return namedLists

  function saveNamedItems () {
    namedLists[currentName] = currentItems.join(' ')
  }
}

module.exports = { parsePluralRule }
