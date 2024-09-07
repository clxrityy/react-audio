import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import autoprefixer from 'autoprefixer'
import { dts } from 'rollup-plugin-dts'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import ignore from "rollup-plugin-ignore";

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/esm/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      resolve({
        browser: true,
        preferBuiltins: false,
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declaration: true,
        declarationDir: "dist",
        sourceMap: true,
        exclude: ["./web/**", "./docs/**"],
      }),
      ignore(["./web/**", "./docs/**", "./src/stories/**", "./.storybook/**"]),
      postcss({
        plugins: [autoprefixer()],
        config: {
          path: './postcss.config.js',
        },
      }),
    ],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: ['react', 'react/jsx-runtime'],
  },
  // ({
  //   makeAbsoluteExternalsRelative: true,
  //   preserveEntrySignatures: 'strict',
  //   output: {
  //     esModule: true,
  //     generatedCode: {
  //       reservedNamesAsProps: false
  //     },
  //     interop: 'compat',
  //     systemNullSetters: false
  //   },
  // }),
]
