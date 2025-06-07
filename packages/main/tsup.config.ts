import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: {
      index: "src/index.ts",
    },
    outDir: "dist",
    format: ["esm"],
    dts: {
      entry: "src/index.ts",
    },
    splitting: false,
    sourcemap: true,
    clean: true,
    minify: true,
  },
]);
