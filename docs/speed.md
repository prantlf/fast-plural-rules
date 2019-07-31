# Plural Form Lookup Speed

Using [plain hand-coded functions](../src/cardinals.js) is more than 300x faster, than parsing the CLDR rules on the fly, as shown by a [simple benchmark](../perf/index.js), while still keeping the library size small.

```txt
$ node perf
Getting a plural form...
  using a simple coded rule x 7,865,745 ops/sec ±0.69% (89 runs sampled)
  using a simple parsed rule x 21,284 ops/sec ±0.77% (89 runs sampled)
  using an average coded rule x 4,613,806 ops/sec ±0.41% (88 runs sampled)
  using an average parsed rule x 11,234 ops/sec ±0.68% (90 runs sampled)
  using a complicated coded rule x 4,493,341 ops/sec ±0.43% (88 runs sampled)
  using a complicated parsed rule x 7,400 ops/sec ±0.70% (89 runs sampled)
```
