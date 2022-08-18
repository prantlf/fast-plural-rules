import cleanup from 'rollup-plugin-cleanup'
import { minify } from 'rollup-plugin-swc-minify'

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/index.cjs',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'dist/index.mjs',
        format: 'es',
        sourcemap: true
      },
      {
        file: 'dist/index.min.mjs',
        format: 'es',
        sourcemap: true,
        plugins: [minify()]
      },
      {
        file: 'dist/index.umd.js',
        format: 'umd',
        name: 'fastPluralRules',
        sourcemap: true
      },
      {
        file: 'dist/index.umd.min.js',
        format: 'umd',
        name: 'fastPluralRules',
        sourcemap: true,
        plugins: [minify()]
      }
    ],
    plugins: [cleanup()]
  },
  {
    input: 'src/cardinals.js',
    output: {
      file: 'test/cardinals.umd.js',
      format: 'umd',
      name: 'fastPluralData'
    },
    plugins: [cleanup()]
  }
]
