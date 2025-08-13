import { defineConfig } from "vitest/config";
import { codecovVitePlugin } from "@codecov/vite-plugin";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["tests/setup.ts"],
    include: ["tests/**/*.test.ts", "tests/**/*.test.tsx"],
  },
  plugins: [
    codecovVitePlugin({
      enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
      bundleName: "react-audio",
      uploadToken: process.env.CODECOV_TOKEN,
    })
  ]
});
