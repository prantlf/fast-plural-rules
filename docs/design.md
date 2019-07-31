# Design Concepts

The purpose of this library is to offer an efficient support for localizing messages with placeholders for cardinals representing item count, for example.

### Table of Contents

- [Introduction](#introduction)
- [Plural Forms](#plural-forms)
- [Plural Rules](#plural-rules)
- [Locales](#locales)
- [Language Packs](#language-packs)
- [Internationalization Libraries](#internationalization-libraries)

## Introduction

Messages with cardinals cannot be localized by a single string, like this:

```js
"{fileCount} invalid files"
```

Different languages have different rules for creating plurals with different cardinals. It involves applying different declensions to nouns and adjectives, which occur in the message together with the cardinal. For example, English nouns need "s" or "es" appended in plural:

```js
"1 invalid file"  // singular
"5 invalid files" // plural
```

Instead of writing grammar engines for formulating correct sequences, the problem has been simplified for internationalization purposes by listing all possibilities for cardinals in [a particular language](#locales) - [*plural forms*](#plural-forms). The right plural form is selected by conditions depending on the language and on the cardinal itself - [*plural rules*](#plural-rules). For example, English has two plural forms using the following plural rule:

```txt
Form 0: singular, for cardinal === 1
Form 1: plural,   for cardinals !== 1
```

Have a look at the [list of plural rules and number of plural forms for locales supported by this library](./languages.md#supported-languages).

## Plural Forms

*Plural form* is a type of plural expression, which is valid for a specific range of cardinals used in that expression. Different languages need different count of plural forms to allow grammatically correct localizations. For example, English needs two plural forms and Czech three ones:

```txt
English expressions with the related plural form:
  "1 invalid file"  // 0 (one):   singular
  "2 invalid files" // 1 (other): plural
  "5 invalid files" // 1 (other): plural

Czech expressions with the related plural form:
  "1 vadný soubor"    // 0 (one):   singular
  "2 vadné soubory"   // 1 (few):   plural for 2-4 items
  "5 vadných souborů" // 2 (other): plural for 5 and more items
```

Plural forms are indexed by integers. Zero is assigned to singular or zero (for item count 1 or zero) and indexes from one to five to other plural forms. The maximum index depends on the [language](./languages.md#supported-languages). All plural forms of an expression are usually stored with a lookup key [*language packs*](#language-packs).

Alternatively to the numeric index, the plural form can be referred to by one of the six [CLDR plural forms]: `zero`, `one`, `two`, `few`, `many` and `other`.

## Plural Rules

*Plural rule* is a function, which expects a cardinal representing an item count and which returns a valid plural form index/name for a particular language. For example:

```js
// English - 2 plural forms; 0/one for 1 item and 1/other for 2+ items:
n => n === 1 ? 0     : 1
n => n === 1 ? 'one' : 'other'

// Czech   - 3 plural forms; 0/one for 1 item, 1/few for 2-4 items and
//                           2/other for 5+ items:
n => n === 1 ? 0     : n >= 2 && n <= 4 ? 1     : 2
n => n === 1 ? 'one' : n >= 2 && n <= 4 ? 'few' : 'other'
```

Plural rules are specific to the [language](./languages.md#supported-languages) and typically organized by [locales](#locales). They are evaluated by [internationalization libraries](#internationalization-libraries) to pick a message in the right plural form from [*language packs*](#language-packs).

## Locales

The locale is an identifier referring to a *language* and if there is a dialect used by a whole country, than also to that *country*. For example:

| Locale | Country              |
|--------|----------------------|
| pt     | Portuguese           |
| pt-BR  | Brazilian Portuguese |

Tha language is specified using a two-letter code from [ISO 369](https://en.wikipedia.org/wiki/ISO_639). The optional country is specified using a two-letter code from [ISO 3166](https://cs.wikipedia.org/wiki/ISO_3166-1). If there is no two-letter code available, three letter codes may be used.

The locale is handled case-insensitively. Before it is used for the plural rule lookup, it isd "normalized". It is converted to lower-case and if it consists of both language and country paths separated by an underscore, the separator is replaced by a hyphen. For example: `pt_BR ==> pt-br`.

## Language Packs

The result of a plural rule evaluation is an index of the plural form - a number 0-5, depending on the specified [locale](#locales) and on the item count. The plural form index can be used to identify the right localizable message in the language pack. The localizable message is supposed to be entered as an array with one item for every plural index defined for the [language locale](#locales). The cardinal is usually placed to a placeholder like "{0}" or "%d". For example:

```js
// English language pack
const messages = {
  validationFailed: 'File validation failed.',   // Simple message
  invalidFileCount: [   // Message consisting of more plural forms
    '{0} invalid file', // 0: singular
    '{0} invalid files' // 1: plural
  ]
}

// Czech language pack
const messages = {
  validationFailed: 'Kontrola souborů selhala.',   // Simple message
  invalidFileCount: [     // Message consisting of more plural forms
    '{0} vadný soubor',   // 0: singular
    '{0} vadné soubory',  // 1: plural for 2-4 items
    '{0} vadných souborů' // 2: plural for 5 and more items
  ]
}
```

Functions [`getPluralFormForCardinalByLocale`](./API.md#getpluralformforcardinalbylocale) or [`getPluralRuleForCardinalByLocale`](./API.md#getpluralruleforcardinalbylocale) can be used to get the numeric index of the right plural form for a specific locale and cardinal.

### Plural Form Index or Name

Alternatively to the number 0-5, it is possible to obtain the plural form as a name according to [CLDR plural forms]: `zero`, `one`, `two`, `few`, `many` and `other`. The plural form name can be used to identify the right localizable message in the language pack. The localizable message is supposed to be entered as an object with one key for every plural form defined for the [language locale](#locales). The cardinal is usually placed to a placeholder like "{0}" or "%d". For example:

```js
// English language pack
const messages = {
  validationFailed: 'File validation failed.',   // Simple message
  invalidFileCount: [ // Message consisting of more plural forms
    one:   '{0} invalid file', // singular
    other: '{0} invalid files' // plural
  ]
}

// Czech language pack
const messages = {
  validationFailed: 'Kontrola souborů selhala.',   // Simple message
  invalidFileCount: { // Message consisting of more plural forms
    one:   '{0} vadný soubor',   // singular
    few:   '{0} vadné soubory',  // plural for 2-4 items
    other: '{0} vadných souborů' // plural for 5 and more items
  }
}
```

Functions [`getPluralFormNameForCardinalByLocale`](./API.md#getpluralformnameforcardinalbylocale) or [`getPluralRuleForNamedFormsForCardinalsByLocale`](./API.md#getpluralrulefornamedformsforcardinalsbylocale) can be used to get the textual name of the right plural form for a specific locale and cardinal.

## Internationalization Libraries

Software engineers need to pick the right localized message without dealing with peculiarities of [each target language](./languages.md#supported-languages), which may not even be known during the development. They need a function expecting just the [language locale](#locales) and the item count, for which the localized message should be displayed, for example:

```js
const locale = getUserLocale() // Receives "en" for English or "cs" for Czech.
const failureCount = copyFiles() // Receives 5.
const message = localizePluralMessage(locale, 'invalidFileCount', failureCount)
// Receives "5 invalid files" in English or "5 vadných souborů" in Czech.

// Finds the message with the right plural form using the specified locale,
// message key and item count.
function localizePluralMessage(locale, messageKey, itemCount) {
  const messagePluralForms = localizedMessages[locale][messageKey]
  const pluralForm = getPluralFormForCardinalByLocale(locale, itemCount)
  return messagePluralForms[pluralForm].replace('{0}', itemCount)
}

// Localized messages organized by locales and message keys.
const localizedMessages = {
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

### Using form names

And another example with plural form names instead of numbers, including a performance optimisation for a globally selected locale:

```js
const failureCount = copyFiles() // Receives 5.
const message = localizePluralMessage('invalidFileCount', failureCount)
// Receives "5 invalid files" in English or "5 vadných souborů" in Czech.

// Maintains the locale selected by the user for the whole application.
let locale = 'cs'
let getPluralForm = getPluralRuleForNamedFormsForCardinalsByLocale(locale)

// Finds the message with the right plural form using the global plural
// form rule and the specified message key and item count.
function localizePluralMessage(locale, messageKey, itemCount) {
  const messagePluralForms = localizedMessages[locale][messageKey]
  const pluralForm = getPluralForm(itemCount)
  return messagePluralForms[pluralForm].replace('{0}', itemCount)
}

// Localized messages organized by locales and message keys.
const localizedMessages = {
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

CLDR plural forms: http://cldr.unicode.org/index/cldr-spec/plural-rules
