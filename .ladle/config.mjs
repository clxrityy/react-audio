/** @type {import('@ladle/react').UserConfig} */

export default {
  stories: "src/**/*.stories.{js,jsx,ts,tsx,mdx}",
  outDir: "docs",
  addons: {
    a11y: {
      enabled: true,
    },
    theme: {
      enabled: true,
      defaultState: "dark"
    }
  },
  defaultStory: "home--readme",
  viteConfig: process.cwd() + "/vite.ladle.config.ts",
  previewPort: 3000,
  // staticDirs: ['public'],
  // base: "/docs/",
};
