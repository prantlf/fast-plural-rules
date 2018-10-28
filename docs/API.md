# API Reference

This library contains pure, immutable functions to get [plural forms](./docs/design.md#plural-forms) and [plural rules](./docs/design.md#plural-rules) for a [supported locale](./languages.md#supported-languages).

### Table of Contents

- [Loading](#loading)
- [Functions](#functions)
  - [getPluralFormForCardinalByIndex](#getpluralformforcardinalbyindex)
  - [getPluralFormForCardinalByLocale](#getpluralformforcardinalbylocale)
  - [getPluralRuleForCardinalsByLocale](#getpluralruleforcardinalsbylocale)
  - [getPluralRuleForCardinalsByIndex](#getpluralruleforcardinalsbyindex)

## Loading

Load the main module in an application using CommonJS modules:

```js
const { getPluralFormForCardinalByLocale } = require('fast-plural-rules')
```

Load the main module in an application using ES6 modules:

```js
import {
  getPluralFormForCardinalByLocale
} from './node_modules/fast-plural-rules/src/index.js'
```

Load the main module in the browser with plain JavaScript:

```html
<script src="./node_modules/fast-plural-rules/dist/index.umd.js"></script>
<script>
  (() => {
    const { getPluralFormForCardinalByLocale } = window['fastPluralRules']
  })()
</script>
```

You can also load a specific version from CDN, for example: https://unpkg.com/fast-plural-rules@0.0.1/dist/index.umd.js.

## Functions

Functions return either a [plural form](./docs/design.md#plural-forms) index or a [plural rule](./docs/design.md#plural-rules) and they accept either a locale, or a rule index from the [list of supported locales and plural rule indexes](./languages.md#supported-languages).

The locale is normalized for the plural rule lookup. It is always converted to lower-case and if it consists of two parts - language and country - separated by an underscore, the separator is replaced by a hyphen. For example: `pt_BR ==> pt-br`.

### getPluralFormForCardinalByIndex

```
getPluralFormForCardinalByIndex(index: number, count: number): number
```

Returns an index of the plural form using the specified plural rule `index` and the specified cardinal - `count`.

* `index` - one of [supported plural rule indexes](./languages.md#supported-languages)
* `count` - a cardinal representing an item count; an integer >= 0

```js
const { getPluralFormForCardinalByIndex } = require('fast-plural-rules')

getPluralFormForCardinalByIndex(1, 5)
// Returns 1, which is a second plural form (plural) in Germanic languages.
```

### getPluralFormForCardinalByLocale

```
getPluralFormForCardinalByIndex(locale: string, count: number): number
```

Returns an index of the plural form using the specified `locale` and the specified cardinal - `count`.

* `locale` - one of [supported language locales](./languages.md#supported-languages)
* `count` - a cardinal representing an item count; an integer >= 0

```js
const { getPluralFormForCardinalByLocale } = require('fast-plural-rules')

getPluralFormForCardinalByIndex('en', 5)
// Returns 1, which is a second plural form (plural) in Germanic languages.
```

The locale is normalized for the plural rule lookup by converting it to lower-case and using a hyphen as a separator, if the country is present and separated by an underscore.

### getPluralRuleForCardinalsByIndex

```
getPluralRuleForCardinalsByIndex(index: number): Function
```

Returns an plural form rule function for the specified plural rule `index`. The function can be called later with a cardinal (item count) to return the right index plural form index for the cardinal.

* `index` - one of [supported plural rule indexes](./languages.md#supported-languages)

```js
const { getPluralRuleForCardinalsByIndex } = require('fast-plural-rules')

const pluralRule = getPluralRuleForCardinalsByIndex(1)
// Returns plural rule #1 - function handling Germanic languages.

pluralRule(5)
// Returns 1, which is a second plural form (plural) in Germanic languages.
```

### getPluralRuleForCardinalsByLocale

```
getPluralRuleForCardinalsByLocale(locale: string): Function
```

Returns an plural form rule function for the specified `locale`. The function can be called later with a cardinal (item count) to return the right index plural form index for the cardinal.

* `locale` - one of [supported language locales](./languages.md#supported-languages)

```js
const { getPluralRuleForCardinalsByLocale } = require('fast-plural-rules')

const pluralRule = getPluralRuleForCardinalsByLocale('en')
// Returns plural rule #1 - function handling Germanic languages.

pluralRule(5)
// Returns 1, which is a second plural form (plural) in Germanic languages.
```

The locale is normalized for the plural rule lookup by converting it to lower-case and using a hyphen as a separator, if the country is present and separated by an underscore.
