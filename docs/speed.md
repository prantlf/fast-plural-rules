# Plural Form Lookup Speed

Using [plain hand-coded functions](../src/cardinals.js) is faster, than parsing the CLDR rules on the fly, as shown by a [simple benchmark](../perf/index.js), while still keeping the library size small.

```txt
$ node perf
Getting a plural form...
  using a simple coded rule x 202,430,029 ops/sec ±1.76% (74 runs sampled)
  using a simple parsed rule x 4,269 ops/sec ±2.24% (78 runs sampled)
  using an average coded rule x 8,674,399 ops/sec ±0.68% (83 runs sampled)
  using an average parsed rule x 2,318 ops/sec ±1.45% (79 runs sampled)
  using a complicated coded rule x 7,303,699 ops/sec ±0.93% (80 runs sampled)
  using a complicated parsed rule x 1,607 ops/sec ±2.18% (78 runs sampled)
```
