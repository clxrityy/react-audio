/** @type {import('@ladle/react').UserConfig} */

export default {
  stories: "src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  outDir: "docs",
  addons: {
    a11y: {
      enabled: true,
    },
  },
  viteConfig: process.cwd() + "/vite.ladle.config.ts",
  previewPort: 3000,
  staticDirs: ['public'],
  appendToHead: `
        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
        <link rel="manifest" href="./manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <title>@clxrity/react-audio</title>
    `,
};
