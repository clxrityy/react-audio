# @clxrity/react-audio <img src="./icon.png" width="32px" height="32px" style="display:inline-block;" />

#### A react audio player component library.

[![MIT license](https://img.shields.io/npm/l/%40clxrity%2Freact-audio?style=for-the-badge&label=LICENSE
)](https://github.com/clxrityy/react-audio/blob/main/LICENSE)

[![BUILD](https://img.shields.io/github/actions/workflow/status/clxrityy/react-audio/.github%2Fworkflows%2Fmain.yml?branch=main&event=push&style=for-the-badge&logo=github&logoColor=%23181717&logoSize=auto&label=BUILD&color=%232dba4e
)](https://github.com/clxrityy/react-audio/actions/workflows/main.yml)  [![codecov.io Code Coverage](https://img.shields.io/codecov/c/github/clxrityy/react-audio?token=4c9504fd-c584-412e-9430-31e729f966b0&style=for-the-badge&logo=codecov&logoColor=%23F01F7A&logoSize=auto&label=COVERAGE&labelColor=%23F01F7A)](https://codecov.io/github/clxrity/react-audio?branch=main) 
[![view on npm](https://img.shields.io/npm/v/%40clxrity%2Freact-audio?style=for-the-badge&logo=npm&logoColor=%23CB3837&logoSize=auto&label=NPM
)](https://www.npmjs.org/package/@clxrity/react-audio) 
[![npm module downloads](https://img.shields.io/npm/dm/%40clxrity%2Freact-audio?style=for-the-badge&logo=npm&logoColor=%23CB3837&logoSize=auto&label=DOWNLOADS)](https://www.npmjs.org/package/@clxrity/react-audio)

---

[![Node version](https://img.shields.io/node/v-lts/%40clxrity%2Freact-audio?style=for-the-badge&logo=nodedotjs&logoColor=%235FA04E&logoSize=auto&label=NODE
)](https://github.com/clxrityy/react-audio/blob/main/.nvmrc)

#### Peer Dependencies:

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

[![Documentation](https://img.shields.io/badge/clxrityy.github.io%2Freact-audio?style=for-the-badge&logo=readme&logoColor=%23617ab1&logoSize=auto&label=DOCS&color=%23617ab1)
](https://clxrityy.github.io/react-audio/)
[![Changelog](https://img.shields.io/badge/clxrityy.github.io%2Freact-audio%2F%3Fstory%3Dchangelog--readme?style=for-the-badge&logo=stackexchange&logoColor=%23617ab1&logoSize=auto&label=CHANGELOG&color=%23617ab1
)](https://clxrityy.github.io/react-audio/?story=changelog--readme)

---

## Dynamic import example with Next.js

```tsx
'use client' // (REQUIRED)
import dynamic from 'next/dynamic'
import '@clxrity/react-audio/dist/index.css' // (optional) import the styles

const Player = dynamic(
    () => import('@clxrity/react-audio').then((mod) => mod.Player),
    { ssr: false }
)

export default function Component() {
    const track = {
        src: '/loop.wav', // (REQUIRED) audio file path (public/loop.wav)
        title: 'Loop',
        artist: {
            name: 'Clxrity',
            url: 'https://wav.clxrity.xyz',
        },
    }

    return <Player track={track} showTrackInfo={true} />
}
```
