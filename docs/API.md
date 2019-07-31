# API Reference

This library contains pure functions to get [plural forms](./design.md#plural-forms) and [plural rules](./design.md#plural-rules) for a [supported locale](./languages.md#supported-languages).

### Table of Contents

- [Loading](#loading)
- [Functions](#functions)
  - [getPluralFormForCardinalByIndex](#getpluralformforcardinalbyindex)
  - [getPluralFormNameForCardinalByIndex](#getpluralformnameforcardinalbyindex)
  - [getPluralFormForCardinalByLocale](#getpluralformforcardinalbylocale)
  - [getPluralFormNameForCardinalByLocale](#getpluralformnameforcardinalbylocale)
  - [getPluralRuleForCardinalsByLocale](#getpluralruleforcardinalsbylocale)
  - [getPluralRuleForNamedFormsForCardinalsByLocale](#getpluralrulefornamedformsforcardinalsbylocale)
  - [getPluralRuleForCardinalsByIndex](#getpluralruleforcardinalsbyindex)
  - [getPluralRuleForNamedFormsForCardinalsByIndex](#getpluralrulefornamedformsforcardinalsbyindex)

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
    const { getPluralFormForCardinalByLocale } = window.fastPluralRules
  })()
</script>
```

You can also load a specific version from CDN, for example: https://unpkg.com/fast-plural-rules@0.0.1/dist/index.umd.js.

## Functions

Functions return either a [plural form](./design.md#plural-forms) index or a [plural rule](./design.md#plural-rules) and they accept either a [locale](./design.md#locales), or a rule index from the [list of supported locales and plural rule indexes](./languages.md#supported-languages).

The [locale](./design.md#locales) is normalized for the plural rule lookup. It is always converted to lower-case and if it consists of two parts - language and country - separated by an underscore, the separator is replaced by a hyphen. For example: `pt_BR ==> pt-br`.

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

### getPluralFormNameForCardinalByIndex

```
getPluralFormNameForCardinalByIndex(index: number, count: number): string
```

Returns a name of the plural form using the specified plural rule `index` and the specified cardinal - `count`.

* `index` - one of [supported plural rule indexes](./languages.md#supported-languages)
* `count` - a cardinal representing an item count; an integer >= 0

```js
const { getPluralFormNameForCardinalByIndex } = require('fast-plural-rules')

getPluralFormNameForCardinalByIndex(1, 5)
// Returns "other", which is a second plural form (plural) in Germanic languages.
```

### getPluralFormForCardinalByLocale

```
getPluralFormForCardinalByLocale(locale: string, count: number): number
```

Returns an index of the plural form using the specified `locale` and the specified cardinal - `count`.

* `locale` - one of [supported language locales](./languages.md#supported-languages)
* `count` - a cardinal representing an item count; an integer >= 0

```js
const { getPluralFormForCardinalByLocale } = require('fast-plural-rules')

getPluralFormForCardinalByLocale('en', 5)
// Returns 1, which is a second plural form (plural) in Germanic languages.
```

The [locale](./design.md#locales) is normalized for the plural rule lookup by converting it to lower-case and using a hyphen as a separator, if the country is present and separated by an underscore.

### getPluralFormNameForCardinalByLocale

```
getPluralFormNameForCardinalByLocale(locale: string, count: number): string
```

Returns a name of the plural form using the specified `locale` and the specified cardinal - `count`.

* `locale` - one of [supported language locales](./languages.md#supported-languages)
* `count` - a cardinal representing an item count; an integer >= 0

```js
const { getPluralFormNameForCardinalByLocale } = require('fast-plural-rules')

getPluralFormNameForCardinalByLocale('en', 5)
// Returns "other", which is a second plural form (plural) in Germanic languages.
```

The [locale](./design.md#locales) is normalized for the plural rule lookup by converting it to lower-case and using a hyphen as a separator, if the country is present and separated by an underscore.

### getPluralRuleForCardinalsByIndex

```
getPluralRuleForCardinalsByIndex(index: number): Function
```

Returns an plural form rule function for the specified plural rule `index`. The function can be called later with a cardinal (item count) to return the right plural form index for the cardinal. If you call `getPluralFormForCardinalByIndex` many times for the same rule index, consider obtaining a rule function for the specific rule index by `getPluralRuleForCardinalsByIndex` and call that function repeatedly.

* `index` - one of [supported plural rule indexes](./languages.md#supported-languages)

```js
const { getPluralRuleForCardinalsByIndex } = require('fast-plural-rules')

const pluralRule = getPluralRuleForCardinalsByIndex(1)
// Returns plural rule #1 - function handling Germanic languages.

pluralRule(5)
// Returns 1, which is a second plural form (plural) in Germanic languages.
```

### getPluralRuleForNamedFormsForCardinalsByIndex

```
getPluralRuleForNamedFormsForCardinalsByIndex(index: number): Function
```

Returns an plural form rule function for the specified plural rule `index`. The function can be called later with a cardinal (item count) to return the right plural form name for the cardinal. If you call `getPluralFormNameForCardinalByIndex` many times for the same rule index, consider obtaining a rule function for the specific rule index by `getPluralRuleForNamedFormsForCardinalsByIndex` and call that function repeatedly.

* `index` - one of [supported plural rule indexes](./languages.md#supported-languages)

```js
const { getPluralRuleForNamedFormsForCardinalsByIndex } = require('fast-plural-rules')

const pluralRule = getPluralRuleForNamedFormsForCardinalsByIndex(1)
// Returns plural rule #1 - function handling Germanic languages.

pluralRule(5)
// Returns "other", which is a second plural form (plural) in Germanic languages.
```

### getPluralRuleForCardinalsByLocale

```
getPluralRuleForCardinalsByLocale(locale: string): Function
```

Returns an plural form rule function for the specified `locale`. The function can be called later with a cardinal (item count) to return the right plural form index for the cardinal. If you call `getPluralFormForCardinalByLocale` many times for the same locale, consider obtaining a rule function for the specific locale by `getPluralRuleForCardinalsByLocale` and call that function repeatedly.

* `locale` - one of [supported language locales](./languages.md#supported-languages)

```js
const { getPluralRuleForCardinalsByLocale } = require('fast-plural-rules')

const pluralRule = getPluralRuleForCardinalsByLocale('en')
// Returns plural rule #1 - function handling Germanic languages.

pluralRule(5)
// Returns 1, which is a second plural form (plural) in Germanic languages.
```

The [locale](./design.md#locales) is normalized for the plural rule lookup by converting it to lower-case and using a hyphen as a separator, if the country is present and separated by an underscore.

### getPluralRuleForNamedFormsForCardinalsByLocale

```
getPluralRuleForNamedFormsForCardinalsByLocale(locale: string): Function
```

Returns an plural form rule function for the specified `locale`. The function can be called later with a cardinal (item count) to return the right plural form name for the cardinal. If you call `getPluralFormForCardinalByLocale` many times for the same locale, consider obtaining a rule function for the specific locale by `getPluralRuleForCardinalsByLocale` and call that function repeatedly.

* `locale` - one of [supported language locales](./languages.md#supported-languages)

```js
const { getPluralRuleForNamedFormsForCardinalsByLocale } = require('fast-plural-rules')

const pluralRule = getPluralRuleForNamedFormsForCardinalsByLocale('en')
// Returns plural rule #1 - function handling Germanic languages.

pluralRule(5)
// Returns "other", which is a second plural form (plural) in Germanic languages.
```

The [locale](./design.md#locales) is normalized for the plural rule lookup by converting it to lower-case and using a hyphen as a separator, if the country is present and separated by an underscore.
