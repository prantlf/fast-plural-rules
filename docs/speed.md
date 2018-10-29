# Plural Form Lookup Speed

Using [plain hand-coded functions](../src/cardinals.js) is faster, than parsing the CLDR rules on the fly, as shown by a [simple benchmark](../perf/index.js), while still keeping the library size small.

```txt
$ node perf
Getting a plural form...
  using a simple coded rule x 5,799,112 ops/sec ±0.52% (90 runs sampled)
  using a simple parsed rule x 8,113 ops/sec ±1.25% (82 runs sampled)
  using an average coded rule x 3,150,432 ops/sec ±0.43% (94 runs sampled)
  using an average parsed rule x 4,333 ops/sec ±1.37% (90 runs sampled)
  using a complicated coded rule x 2,800,479 ops/sec ±0.31% (95 runs sampled)
  using a complicated parsed rule x 2,881 ops/sec ±1.03% (87 runs sampled)
```
