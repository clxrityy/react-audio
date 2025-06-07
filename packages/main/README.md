# @clxrity/react-audio <img src="https://react-audio-docs.vercel.app/apple-touch-icon.png" width="27.5px" />

## A react audio player component library.

[![coverage](https://codecov.io/gh/clxrityy/react-audio/graph/badge.svg?token=X4NBMSM9ZP)](https://codecov.io/gh/clxrityy/react-audio)

[![MIT license](https://img.shields.io/npm/l/%40clxrity%2Freact-audio?style=for-the-badge&label=LICENSE)](https://github.com/clxrityy/react-audio/blob/main/LICENSE) [![npm module downloads](https://img.shields.io/npm/dm/%40clxrity%2Freact-audio?style=for-the-badge&logo=npm&logoColor=%23CB3837&logoSize=auto&label=DOWNLOADS)](https://www.npmjs.org/package/@clxrity/react-audio)

[![view on npm](https://img.shields.io/npm/v/%40clxrity%2Freact-audio?style=for-the-badge&logo=npm&logoColor=%23CB3837&logoSize=auto&label=NPM)](https://www.npmjs.org/package/@clxrity/react-audio) [![BUILD](https://img.shields.io/github/actions/workflow/status/clxrityy/react-audio/.github%2Fworkflows%2Fmain.yml?branch=main&event=push&style=for-the-badge&logo=github&logoColor=%23181717&logoSize=auto&label=BUILD&color=%232dba4e)](https://github.com/clxrityy/react-audio/actions/workflows/main.yml)

---

[![Node version](https://img.shields.io/node/v-lts/%40clxrity%2Freact-audio?style=for-the-badge&logo=nodedotjs&logoColor=%235FA04E&logoSize=auto&label=NODE)](https://github.com/clxrityy/react-audio/blob/main/.nvmrc)

### Peer Dependencies:

[![react](https://img.shields.io/npm/dependency-version/%40clxrity%2Freact-audio/peer/react?style=for-the-badge&logo=react&logoColor=%2361DAFB&logoSize=auto&label=react)](https://www.npmjs.com/package/react) [![react-dom](https://img.shields.io/npm/dependency-version/%40clxrity%2Freact-audio/peer/react-dom?style=for-the-badge&logo=react&logoColor=%2361DAFB&logoSize=auto&label=react-dom)](https://www.npmjs.com/package/react-dom)

```zsh
npm i @clxrity/react-audio
```

```zsh
pnpm add @clxrity/react-audio
```

```zsh
yarn add @clxrity/react-audio
```

---

![Docs](<https://img.shields.io/badge/docs-docs?style=for-the-badge&logo=readthedocs&logoColor=%238CA1AF&logoSize=auto&color=rgb(121%2C%2091%2C%20132)&link=https%3A%2F%2Freact-audio-docs.vercel.app>) ![Changelog](<https://img.shields.io/badge/changelog-changelog?style=for-the-badge&logo=googleforms&logoColor=%238CA1AF&logoSize=auto&color=rgb(121%2C%2091%2C%20132)&link=https%3A%2F%2Freact-audio-docs.vercel.app%2Fdocumentation%2Fchangelog>) ![Contribute](<https://img.shields.io/badge/contribute-contributions?style=for-the-badge&logo=git&logoColor=%238CA1AF&logoSize=auto&color=rgb(121%2C%2091%2C%20132)&link=https%3A%2F%2Fgithub.com%2Fclxrityy%2Freact-audio%2Fblob%2Fmain%2FCONTRIBUTING.md>)

---

## Dynamic import example with Next.js

```tsx
"use client"; // (REQUIRED)
import dynamic from "next/dynamic";

const Player = dynamic(
  () => import("@clxrity/react-audio").then((mod) => mod.Player),
  { ssr: false },
);

export default function Component() {
  return <Player src="/loop.wav" />;
}
```

---
