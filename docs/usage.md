# Usage Scenarios

The minimal, but powerful API of this module provides functionality for finding the right localizable message which includes a cardinal - an item count.

### Table of Contents

- [Author a language pack](#author-a-language-pack)
- [Get a localized message in the right plural form](#get-a-localized-message-in-the-right-plural-form)
- [Get the rule computing the plural form](#get-the-rule-computing-the-plural-form)

## Author a language pack

Translators need to know, how many plural forms the target language needs, to be able to add the proper number of strings to an array representing a localizable message. For example:

```js
// English language pack
{
  "validationFailed": "File validation failed.",  // Simple message
  "invalidFileCount": [  // Message consisting of more plural forms
    "{0} invalid file",  // 0: singular
    "{0} invalid files"  // 1: plural
  ]
}

// Czech language pack
{
  "validationFailed": "Kontrola souborů selhala.", // Simple message
  "invalidFileCount": [   // Message consisting of more plural forms
    "{0} vadný soubor",   // 0: singular
    "{0} vadné soubory",  // 1: plural for 2-4 items
    "{0} vadných souborů" // 2: plural for 5 and more items
  ]
}
```

Have a look at the [list of plural rules and number of plural forms for locales supported by this library](./languages.md#supported-languages).

### Language pack with plural form names

Alternatively, you can use objects with plural form names as localizable messages instead of arrays indexed by the plural form index. For example:

```js
// English language pack
{
  "validationFailed": "File validation failed.",  // Simple message
  "invalidFileCount": {  // Message consisting of more plural forms
    "one":   "{0} invalid file",  // singular
    "other": "{0} invalid files"  // plural
  }
}

// Czech language pack
{
  "validationFailed": "Kontrola souborů selhala.", // Simple message
  "invalidFileCount": {   // Message consisting of more plural forms
    "one":   "{0} vadný soubor",   // singular
    "few":   "{0} vadné soubory",  // plural for 2-4 items
    "other": "{0} vadných souborů" // plural for 5 and more items
  }
}
```

## Get a localized message in the right plural form

Language packs usually contain localized expressions, which are looked up by their keys. If an expression contains a parameter, for example a number placeholder "{fileCount}", only one text message is not enough to cover all grammar rules for different cardinals, which could occur in the parameter value. If expressions, which cover all grammar rules, are stored in an array, the function [`getPluralFormForCardinalByLocale`](./API.md#getpluralformforcardinalbylocale) will return the index of the right expression in the array, provided with the target locale and the cardinal value.

```js
import { getPluralFormForCardinalByLocale } from 'fast-plural-rules'

let locale

localizePluralMessage('en', 'invalidFileCount', 1)
// Returns "1 invalid file".
localizePluralMessage('en', 'invalidFileCount', 2)
// Returns "2 invalid files".
localizePluralMessage('en', 'invalidFileCount', 5)
// Returns "5 invalid files".

localizePluralMessage('cs', 'invalidFileCount', 1)
// Returns "1 vadný soubor".
localizePluralMessage('cs', 'invalidFileCount', 2)
// Returns "2 vadné soubory".
localizePluralMessage('cs', 'invalidFileCount', 5)
// Returns "5 vadných souborů".

// Finds the message with the right plural form using the specified locale,
// message key and item count.
function localizePluralMessage(locale, messageKey, itemCount) {
  // Get all localized messages from the language pack for the specified locale.
  const localizedMessages = languagePacks[locale]
  // Get all plural forms for the specified message.
  const messagePluralForms = localizedMessages[messageKey]
  // Get the index of the plural form for the specified locale and cardinal.
  const pluralForm = getPluralFormForCardinalByLocale(locale, itemCount)
  // Get the localized message in the right plural form.
  const message = messagePluralForms[pluralForm]
  // Replace the parameter placeholder with the cardinal value (item count).
  return message.replace('{0}', itemCount)
}

// Localized messages organized by locales and message keys.
const languagePacks = {
  en: {
    invalidFileCount: [
      '{0} invalid file', // 0: singular
      '{0} invalid files' // 1: plural
    ]
  },
  cs: {
    invalidFileCount: [
      '{0} vadný soubor',   // 0: singular
      '{0} vadné soubory',  // 1: plural for 2-4 items
      '{0} vadných souborů' // 2: plural for 5 and more items
    ]
  }
}
```

See the function [`getPluralFormForCardinalByLocale`](./API.md#getpluralformforcardinalbylocale) for more information.

### Get the message using plural form names

Alternatively, you can use [`getPluralFormNameForCardinalByLocale`](./API.md#getpluralformnameforcardinalbylocale), which returns the right plural form name instead of the plural form index. For example:

```js
import { getPluralFormNameForCardinalByLocale } from 'fast-plural-rules'

let locale

localizePluralMessage('en', 'invalidFileCount', 1)
// Returns "1 invalid file".
localizePluralMessage('en', 'invalidFileCount', 2)
// Returns "2 invalid files".
localizePluralMessage('en', 'invalidFileCount', 5)
// Returns "5 invalid files".

localizePluralMessage('cs', 'invalidFileCount', 1)
// Returns "1 vadný soubor".
localizePluralMessage('cs', 'invalidFileCount', 2)
// Returns "2 vadné soubory".
localizePluralMessage('cs', 'invalidFileCount', 5)
// Returns "5 vadných souborů".

// Finds the message with the right plural form using the specified locale,
// message key and item count.
function localizePluralMessage(locale, messageKey, itemCount) {
  // Get all localized messages from the language pack for the specified locale.
  const localizedMessages = languagePacks[locale]
  // Get all plural forms for the specified message.
  const messagePluralForms = localizedMessages[messageKey]
  // Get the index of the plural form for the specified locale and cardinal.
  const pluralForm = getPluralFormNameForCardinalByLocale(locale, itemCount)
  // Get the localized message in the right plural form.
  const message = messagePluralForms[pluralForm]
  // Replace the parameter placeholder with the cardinal value (item count).
  return message.replace('{0}', itemCount)
}

// Localized messages organized by locales and message keys.
const languagePacks = {
  en: {
    invalidFileCount: {
      one:   '{0} invalid file', // singular
      other: '{0} invalid files' // plural
    }
  },
  cs: {
    invalidFileCount: {
      one:   '{0} vadný soubor',   // singular
      few:   '{0} vadné soubory',  // plural for 2-4 items
      other: '{0} vadných souborů' // plural for 5 and more items
    }
  }
}
```

See the function [`getPluralFormNameForCardinalByLocale`](./API.md#getpluralformnameforcardinalbylocale) for more information.

## Get the rule computing the plural form

This scenario implements a similar interface for the localized message lookup like the previous [getting a localized message in the right plural form](#get-a-localized-message-in-the-right-plural-form). As a difference, it demonstrates how to obtain the plural rule function and use it multiple times without always carrying the locale around.

```js
import { getPluralRuleForCardinalsByLocale } from 'fast-plural-rules'

setLocale('en')

localizePluralMessage('invalidFileCount', 1)
// Returns "1 invalid file".
localizePluralMessage('invalidFileCount', 2)
// Returns "2 invalid files".
localizePluralMessage('invalidFileCount', 5)
// Returns "5 invalid files".

setLocale('cs')

localizePluralMessage('invalidFileCount', 1)
// Returns "1 vadný soubor".
localizePluralMessage('invalidFileCount', 2)
// Returns "2 vadné soubory".
localizePluralMessage('invalidFileCount', 5)
// Returns "5 vadných souborů".

// Control the localization methods, when a locale is set.
let localizedMessages, pluralRule

// Makes the specified locale work globally, with all what is needed for it.
function setLocale (locale) {
  // Find the language pack for future message lookups.
  localizedMessages = languagePacks[locale]
  // Find the plural rule function for future plural form lookups.
  pluralRule = getPluralRuleForCardinalsByLocale(locale)
}

// Finds the message with the right plural form using the global locale
// and the specified message key with the item count.
function localizePluralMessage(messageKey, itemCount) {
  // Get all plural forms for the specified message.
  const messagePluralForms = localizedMessages[messageKey]
  // Get the index of the plural form for the specified cardinal.
  const pluralForm = pluralRule(itemCount)
  // Set the cardinal (item count) parameter to the looked up plural form.
  return messagePluralForms[pluralForm].replace('{0}', itemCount)
}

// Localized messages organized by message keys in language packs by locales.
const languagePacks = {
  en: {
    invalidFileCount: [
      '{0} invalid file', // 0: singular
      '{0} invalid files' // 1: plural
    ]
  },
  cs: {
    invalidFileCount: [
      '{0} vadný soubor',   // 0: singular
      '{0} vadné soubory',  // 1: plural for 2-4 items
      '{0} vadných souborů' // 2: plural for 5 and more items
    ]
  }
}
```

See the function [getPluralRuleForCardinalsByLocale](./API.md#getpluralruleforcardinalsbylocale) for more information.

### The rule computing the plural form name

Alternatively, you can use [`getPluralRuleForNamedFormsForCardinalsByLocale`](./API.md#getpluralrulefornamedformsforcardinalsbylocale), which returns a function for computing plural form names instead of plural form index. For example:

```js
import { getPluralRuleForNamedFormsForCardinalsByLocale } from 'fast-plural-rules'

setLocale('en')

localizePluralMessage('invalidFileCount', 1)
// Returns "1 invalid file".
localizePluralMessage('invalidFileCount', 2)
// Returns "2 invalid files".
localizePluralMessage('invalidFileCount', 5)
// Returns "5 invalid files".

setLocale('cs')

localizePluralMessage('invalidFileCount', 1)
// Returns "1 vadný soubor".
localizePluralMessage('invalidFileCount', 2)
// Returns "2 vadné soubory".
localizePluralMessage('invalidFileCount', 5)
// Returns "5 vadných souborů".

// Control the localization methods, when a locale is set.
let localizedMessages, pluralRule

// Makes the specified locale work globally, with all what is needed for it.
function setLocale (locale) {
  // Find the language pack for future message lookups.
  localizedMessages = languagePacks[locale]
  // Find the plural rule function for future plural form lookups.
  pluralRule = getPluralRuleForNamedFormsForCardinalsByLocale(locale)
}

// Finds the message with the right plural form using the global locale
// and the specified message key with the item count.
function localizePluralMessage(messageKey, itemCount) {
  // Get all plural forms for the specified message.
  const messagePluralForms = localizedMessages[messageKey]
  // Get the index of the plural form for the specified cardinal.
  const pluralForm = pluralRule(itemCount)
  // Set the cardinal (item count) parameter to the looked up plural form.
  return messagePluralForms[pluralForm].replace('{0}', itemCount)
}

// Localized messages organized by message keys in language packs by locales.
const languagePacks = {
  en: {
    invalidFileCount: {
      one:   '{0} invalid file', // singular
      other: '{0} invalid files' // plural
    }
  },
  cs: {
    invalidFileCount: {
      one:   '{0} vadný soubor',   // singular
      few:   '{0} vadné soubory',  // plural for 2-4 items
      other: '{0} vadných souborů' // plural for 5 and more items
    }
  }
}
```

See the function [`getPluralRuleForNamedFormsForCardinalsByLocale`](./API.md#getpluralrulefornamedformsforcardinalsbylocale) for more information.
