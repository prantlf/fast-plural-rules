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
  - [getSupportedLocales](#getsupportedlocales)
  - [getPluralFormCountForLocale](#getpluralformcountforlocale)
  - [getPluralFormNamesForLocale](#getpluralformnamesforlocale)

## Loading

Load the main module in an application using CommonJS modules:

```js
const { getPluralFormForCardinalByLocale } = require('fast-plural-rules')
```

Load the main module in an application using ES modules:

```js
import { getPluralFormForCardinalByLocale } from 'fast-plural-rules'
```

Load the main module in the browser with plain JavaScript:

```html
<script src="./node_modules/fast-plural-rules/dist/index.umd.min.js"></script>
<script>
  (() => {
    const { getPluralFormForCardinalByLocale } = window.fastPluralRules
  })()
</script>
```

Load the main module in the browser with AMD:

```html
<script src="https://unpkg.com/alameda@1.4.0/alameda.js"></script>
<script>
  require(
    ['./node_modules/fast-plural-rules/dist/index.umd.min.js'],
    ({ getPluralFormForCardinalByLocale }) => {
    })
</script>
```

You can also load a specific version from CDN, for example: https://unpkg.com/fast-plural-rules@2.0.0/dist/index.umd.min.js.

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
import { getPluralFormForCardinalByIndex } from 'fast-plural-rules'

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
import { getPluralFormNameForCardinalByIndex } from 'fast-plural-rules'

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
import { getPluralFormForCardinalByLocale } from 'fast-plural-rules'

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
import { getPluralFormNameForCardinalByLocale } from 'fast-plural-rules'

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
import { getPluralRuleForCardinalsByIndex } from 'fast-plural-rules'

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
import { getPluralRuleForNamedFormsForCardinalsByIndex } from 'fast-plural-rules'

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
import { getPluralRuleForCardinalsByLocale } from 'fast-plural-rules'

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
import { getPluralRuleForNamedFormsForCardinalsByLocale } from 'fast-plural-rules'

const pluralRule = getPluralRuleForNamedFormsForCardinalsByLocale('en')
// Returns plural rule #1 - function handling Germanic languages.

pluralRule(5)
// Returns "other", which is a second plural form (plural) in Germanic languages.
```

The [locale](./design.md#locales) is normalized for the plural rule lookup by converting it to lower-case and using a hyphen as a separator, if the country is present and separated by an underscore.

### getSupportedLocales

```
getSupportedLocales(): string[]
```

Returns an array of [locales supported by this library]](./languages.md#supported-languages). You can use it to check programmatically if your locale is suppored. The `getPluralFormNamesForLocale` might be more efficient, though.

```js
import { getSupportedLocales } from 'fast-plural-rules'

const supportedLocales = getSupportedLocales()

console.log(supportedLocales.length, supportedLocales.includes['cs'))
// Prints "144 true".
```

The [locale](./design.md#locales) is normalized for the plural rule lookup by converting it to lower-case and using a hyphen as a separator, if the country is present and separated by an underscore.

### getPluralFormCountForLocale

```
getPluralFormCountForLocale(locale: string): number
```

Returns the count of plural forms needed to cover the specified `locale`. [Index of plural forms](./languages.md#supported-languages) returned by `getPluralFormForCardinalByIndex` and other methods will be greater or equal to zero and less than the returned count.

```js
import { getPluralFormCountForLocale } from 'fast-plural-rules'

getPluralFormCountForLocale('cs')
// Returns 3. (0 - one, 1 - few, 2 - other)
```

The [locale](./design.md#locales) is normalized for the plural rule lookup by converting it to lower-case and using a hyphen as a separator, if the country is present and separated by an underscore.

### getPluralFormNamesForLocale

```
getPluralFormNamesForLocale(locale: string): string[]
```

Returns the plural forms needed to cover the specified `locale`. [Plural form names](./languages.md#supported-languages) returned by `getPluralFormNameForCardinalByLocale` and other methods will be always included in the returned returned array.

```js
import { getPluralFormNamesForLocale } from 'fast-plural-rules'

getPluralFormNamesForLocale('cs')
// Returns ["one", "few", "other"].
```

The [locale](./design.md#locales) is normalized for the plural rule lookup by converting it to lower-case and using a hyphen as a separator, if the country is present and separated by an underscore.
