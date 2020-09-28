import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
// import babel from 'babel-preset-latest'
import json from '@rollup/plugin-json'
import { uglify } from 'rollup-plugin-uglify'
// import { terser } from 'rollup-plugin-terser'

export default {
  input: './src/index.js',
  output: [
    {
      file: 'dist/behavior.jssdk.min.js',
      format: 'umd',
      // format: 'cjs',
      // format: 'esm',
      name: 'behavior.jssdk'
    }
  ],
  watch: {
    exclude: 'node_modules/**'
  },
  plugins: [
    resolve(),
    commonjs(),
    uglify(),
    json(),
    babel({
      exclude: 'node_modules/**',
      // plugins: ['@babel/external-helpers'],
      runtimeHelpers: true
    })
    // terser()
  ],
  external: ['axios']
}