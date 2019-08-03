# Fast Plural Rules
[![NPM version](https://badge.fury.io/js/fast-plural-rules.png)](http://badge.fury.io/js/fast-plural-rules)
[![Build Status](https://travis-ci.org/prantlf/fast-plural-rules.png)](https://travis-ci.org/prantlf/fast-plural-rules)
[![Coverage Status](https://coveralls.io/repos/github/prantlf/fast-plural-rules/badge.svg?branch=master)](https://coveralls.io/github/prantlf/fast-plural-rules?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/94ba20975c8b4feb8b8b280de2ffcb9b)](https://www.codacy.com/app/prantlf/fast-plural-rules?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=prantlf/fast-plural-rules&amp;utm_campaign=Badge_Grade)
[![Dependency Status](https://david-dm.org/prantlf/fast-plural-rules.svg)](https://david-dm.org/prantlf/fast-plural-rules)
[![devDependency Status](https://david-dm.org/prantlf/fast-plural-rules/dev-status.svg)](https://david-dm.org/prantlf/fast-plural-rules#info=devDependencies)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![NPM Downloads](https://nodei.co/npm/fast-plural-rules.png?downloads=true&stars=true)](https://www.npmjs.com/package/fast-plural-rules)

Evaluates locale-specific plural rules to identify the right plural form for a cardinal number, which represents an item count. Internationalization libraries can utilize it to choose the right localized string.

* Focused and complete - [nothing but the rule evaluation](./src/index.d.ts) is included, but still [supporting almost 150 languages](./docs/languages.md#supported-languages).
* Tiny and [fast](./docs/speed.md#plural-form-lookup-speed) - 7.27 kB, 4.8 kB minified, 1.32 kB, gzipped. Using [plain hand-coded functions](./src/cardinals.js) as [plural rules](./docs/design.md#plural-rules) to pick [plural forms](./docs/design.md#plural-forms) using [language locales](./docs/design.md#locales).
* Standard and documented - written using the [Translate Project documentation] and the [Mozilla documentation].
* Reliable and correct - contains the [full test suite] [comparing the actual results with the Mozilla specification], run in both Node.js and the browser.
* Universal and modern - supports both plural form index (0-5) and plural form rules (`zero`, `one`, `two`, `few`, `many` and `other`) and includes declarations for [TypeScript].

If you are looking for a library compiling and executing the declarative [CLDR plural rules], see [plural-rules]. Generated programmatically for better reliability, but bigger and slower.

### Table of Contents

- [Synopsis](#synopsis)
- [Installation and Getting Started](#installation-and-getting-started)
- [Usage Scenarios](./docs/usage.md#usage-scenarios)
- [Design Concepts](./docs/design.md#design-concepts)
- [Supported Languages](./docs/languages.md#supported-languages)
- [API Reference](./docs/API.md#api-reference)
- [Library Integrations](#library-integrations)
- [Contributing](#contributing)
- [Release History](#release-history)
- [License](#license)

## Synopsis

```js
const { getPluralFormForCardinalByLocale } = require('fast-plural-rules')

// Returns index of the plural form for the specified locale and cardinal.
getPluralFormForCardinalByLocale('en', 1) // Returns 0; "1 file"
getPluralFormForCardinalByLocale('en', 2) // Returns 1; "2 files"
getPluralFormForCardinalByLocale('en', 5) // Returns 1; "5 files"
getPluralFormForCardinalByLocale('cs', 1) // Returns 0; "1 soubor"
getPluralFormForCardinalByLocale('cs', 2) // Returns 1; "2 soubory"
getPluralFormForCardinalByLocale('cs', 5) // Returns 2; "5 souborů"

// Returns a localized message for the specified locale and cardinal.
localizeMessage('en', 'fileCount', 3) // Returns "3 files"
localizeMessage('cs', 'fileCount', 3) // Returns "3 soubory"

// Returns a localized message for the specified locale and cardinal.
function localizeMessage (locale, messageKey, cardinal) {
  const pluralForm = getPluralFormForCardinalByLocale(locale, cardinal)
  const messageFormat = messages[locale][messageKey][pluralForm]
  return messageFormat.replace('{0}', cardinal)
}

// A language pack with a testing message.
const messages = {
  en: {
    fileCount: [
      "{0} file", // 0 - singular
      "{0} files" // 1 - plural
    ],
  }
  cs: {
    fileCount: [
      "{0} soubor",  // 0 - singular
      "{0} soubory", // 1 - plural for 2-4 items
      "{0} souborů"  // 2 - plural for 5+ items
    ]
  }
}
```

There is another [full example using plural form names](./docs/design.md#using-form-names) instead of numeric indexes like this:

```js
// Localized messages organized by locales and message keys.
const messages = {
  en: {
    fileCount: {
      one:   '{0} file', // singular
      other: '{0} files' // plural
    }
  },
  cs: {
    fileCount: {
      one:   '{0} soubor',  // singular
      few:   '{0} soubory', // plural for 2-4 items
      other: '{0} souborů'  // plural for 5 and more items
    }
  }
}
```

## Installation and Getting Started

This module can be installed in your project using [NPM] or [Yarn]. Make sure, that you use [Node.js] version 6 or newer.

```sh
$ npm i fast-plural-rules --save
```

```sh
$ yarn add fast-plural-rules
```

Functions are exposed as named exports, for example:

```js
const { getPluralFormForCardinalByLocale } = require('fast-plural-rules')
```

You can read more about the [module loading](./docs/API.md#loading) in other environments, like with ES6 or in web browsers. [Usage scenarios](./docs/usage.md#usage-scenarios) demonstrate applications of this library in typical real-world situations. [Design concepts](./docs/design.md#design-concepts) explain the approach to the correct internationalization of messages with cardinals taken by this library. Translators will read about [plural rules for supported languages](./docs/languages.md#supported-languages) to be able to write the right plural forms to language packs. Finally, the [API reference](./docs/API.md#api-reference) lists all functions with a description of their functionality.

## Library Integrations

* [Extended Day.js] - [relativeTime plugin] formats time durations to the past and to the future.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.  Add unit tests for any new or changed functionality. Lint and test your code using Grunt.

## Release History

* 2019-07-31   v1.0.0   Correct rules for Baltic, Celtic, Semitic, Shuar and Welsh
                        language families to match the latest Mozilla documentation, support CLDR plural form names, complete the test suite
* 2018-10-28   v0.0.1   Initial release

## License

Copyright (c) 2018-2019 Ferdinand Prantl

Licensed under the MIT license.

[Node.js]: http://nodejs.org/
[NPM]: https://www.npmjs.com/
[Yarn]: https://yarnpkg.com/
[TypeScript]: https://www.typescriptlang.org/
[full test suite]: https://travis-ci.org/prantlf/fast-plural-rules
[comparing the actual results with the Mozilla specification]: https://github.com/prantlf/fast-plural-rules/blob/master/test/rules.test.js
[Translate Project documentation]: http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html#pluralforms-list
[Mozilla documentation]: https://developer.mozilla.org/en-US/docs/Mozilla/Localization/Localization_and_Plurals#List_of_Plural_Rules
[Extended Day.js]: https://github.com/prantlf/dayjs
[relativeTime plugin]: https://github.com/prantlf/dayjs/blob/combined/docs/en/Plugin.md#relativetime
[CLDR plural rules]: http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html
[plural-rules]: https://github.com/prantlf/plural-rules
