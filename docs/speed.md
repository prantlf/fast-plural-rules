# Plural Form Lookup Speed

Using [plain hand-coded functions](../src/cardinals.js) ([fast-plural-rules]) is more than 300x faster, than parsing the CLDR rules on the fly ([plural-rules]), as shown by a [simple benchmark](../perf/index.js), while still keeping the library size smaller.

[Intl.PluralRules] has been implemented in the recent browser and Node.js versions. When creating a new `Intl.PluralRules` object for each cardinal computation, the performance is 2x worse or the same as when parsing the CLDR rules. When pre-creating a new `Intl.PluralRules` object and reusing it later, it showed 20-60x better performance than when parsing the CLDR rules. Using plain hand-coded functions is still 5-6x faster than a pre-created `Intl.PluralRules` object.

```txt
$ node perf
Getting a plural form...
  using a simple coded rule x 3,013,201 ops/sec ±1.14% (90 runs sampled)
  using a simple parsed rule x 21,257 ops/sec ±2.64% (84 runs sampled)
  using a simple native rule x 12,030 ops/sec ±1.28% (89 runs sampled)
  using a simple native cached rule x 499,103 ops/sec ±0.89% (89 runs sampled)
  using an average coded rule x 2,083,520 ops/sec ±1.07% (91 runs sampled)
  using an average parsed rule x 11,050 ops/sec ±1.67% (82 runs sampled)
  using an average native rule x 11,340 ops/sec ±1.08% (89 runs sampled)
  using an average native cached rule x 485,830 ops/sec ±1.05% (90 runs sampled)
  using a complicated coded rule x 2,099,193 ops/sec ±0.81% (89 runs sampled)
  using a complicated parsed rule x 8,004 ops/sec ±1.46% (90 runs sampled)
  using a complicated native rule x 10,499 ops/sec ±1.63% (87 runs sampled)
  using a complicated native cached rule x 428,312 ops/sec ±1.03% (86 runs sampled)
```

[Intl.PluralRules]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules
[fast-plural-rules]: https://github.com/prantlf/fast-plural-rules
[plural-rules]: https://github.com/prantlf/plural-rules
