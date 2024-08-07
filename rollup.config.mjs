import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import packageJson from './package.json' assert { type: 'json' };
import postcss from 'rollup-plugin-postcss';
import autoprefixer from "autoprefixer";
import tailwindConfig from "./tailwind.config.js";
import tailwindcss from "tailwindcss";
import external from "rollup-plugin-peer-deps-external";

export default [
    {
        preserveModules: true,
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            }
        ],
        plugins: [
            external(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            postcss({
                plugins: [
                    autoprefixer(),
                    tailwindcss(tailwindConfig)
                ],
                config: {
                    path: "./postcss.config.js",
                },
            }),
        ],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [dts()],
        external: ['react', "react/jsx-runtime"],
    }
]