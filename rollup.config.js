import babel from 'rollup-plugin-babel'
import cleanup from 'rollup-plugin-cleanup'
import { uglify } from 'rollup-plugin-uglify'

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.js',
      format: 'cjs'
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: '6'
              }
            }
          ]
        ]
      }),
      cleanup()
    ]
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'fastPluralRules',
      sourcemap: true
    },
    plugins: [
      babel({ exclude: 'node_modules/**' }),
      uglify()
    ]
  },
  {
    input: 'src/cardinals.js',
    output: {
      file: 'test/cardinals.umd.js',
      format: 'umd',
      name: 'fastPluralRules'
    },
    plugins: [
      babel({ exclude: 'node_modules/**' }),
      cleanup()
    ]
  }
]
