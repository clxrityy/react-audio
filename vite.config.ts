import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vitest/config'
import dts from 'vite-plugin-dts'
import { UserConfigExport } from 'vite';
import tailwindcss from '@tailwindcss/postcss';
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import { codecovVitePlugin } from '@codecov/vite-plugin';
import { renameSync } from 'fs';


const app = async (): Promise<UserConfigExport> => {
  return defineConfig({
    plugins: [
      react(),
      dts({
        insertTypesEntry: true,
        outDir: 'dist',
      }),
      tailwindcss(),
      wasm(),
      topLevelAwait(),
      codecovVitePlugin({
        enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
        bundleName: "react-audio",
        uploadToken: process.env.CODECOV_TOKEN,
      }),
      {
        name: "rename-css-plugin",
        closeBundle() {
            const oldPath = path.resolve(__dirname, 'dist/react-audio.css');
            const newPath = path.resolve(__dirname, 'dist/index.css');

            try {
              renameSync(oldPath, newPath);
              console.log(`Renamed ${oldPath} to ${newPath}`);
            } catch (e) {
              console.error(`Error renaming ${oldPath} to ${newPath}`);
              console.error(e);
            }
        },
      }
    ],
    // css: {
    //   postcss: {
    //     plugins: [
    //       tailwindcss,
    //     ],
    //   },
    // },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@clxrity/react-audio/index.css";`
        }
      }
    },
    resolve: {
      alias: {
        "lightningcss": "lightningcss-wasm"
      }
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'tailwindcss', 'react/jsx-runtime', "@tailwindcss/vite"],
    },
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/lib/index.ts'),
        name: "index",
        fileName: (format: string) => `index.${format}.js`,
      },
      sourcemap: true,
      rollupOptions: {
        external: ['react', 'react/jsx-runtime', 'react-dom', 'tailwindcss', /\.node$/, "@tailwindcss/oxide-darwin-arm64", "@tailwindcss/oxide"],
        output: [
          {
            globals: {
              react: 'React',
              'react/jsx-runtime': 'react/jsx-runtime',
              'react-dom': 'ReactDOM',
              tailwindcss: 'tailwindcss',
            },
            entryFileNames: `index.d.ts`,
            format: "module",
          },
          {
            entryFileNames: `index.es.js`,
            format: 'es',
            preserveModules: false,
          },
          {
            entryFileNames: `index.cjs`,
            format: 'cjs',
          },
        ],
        input: "src/lib/index.ts",
      },
        outDir: 'dist',
        cssCodeSplit: false,
        reportCompressedSize: true,
      },
      test: {
        globals: true,
        environment: 'jsdom',
      },
      publicDir: 'public',
    })
}
// https://vitejs.dev/config/
export default app