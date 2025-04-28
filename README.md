# @clxrity/react-audio <img src="https://clxrityy.github.io/react-audio/apple-touch-icon.png" width="32px" height="32px" style="display:inline-block;" />

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

[![Documentation](https://img.shields.io/badge/clxrityy.github.io%2Freact-audio?style=for-the-badge&logo=readme&logoColor=%23617ab1&logoSize=auto&label=DOCS&color=%23617ab1)
](https://clxrityy.github.io/react-audio/?story=home--readme)
[![Changelog](https://img.shields.io/badge/clxrityy.github.io%2Freact-audio%2F%3Fstory%3Dchangelog--readme?style=for-the-badge&logo=stackexchange&logoColor=%23617ab1&logoSize=auto&label=CHANGELOG&color=%23617ab1)](https://clxrityy.github.io/react-audio/?story=documentation--changelog)

[![CONTRIBUTING](<https://img.shields.io/badge/CONTRIBUTE-MD?style=for-the-badge&logo=forgejo&logoColor=%23dddddd&color=rgb(97%2C%20123%2C%20177)&link=https%3A%2F%2Fgithub.com%2Fclxrityy%2Freact-audio%2Fblob%2Fmain%2FCONTRIBUTING.md>)](<https://img.shields.io/badge/CONTRIBUTE-MD?style=for-the-badge&logo=forgejo&logoColor=%23dddddd&color=rgb(97%2C%20123%2C%20177)&link=https%3A%2F%2Fgithub.com%2Fclxrityy%2Freact-audio%2Fblob%2Fmain%2FCONTRIBUTING.md>)

---

## Dynamic import example with Next.js

````tsx
'use client' // (REQUIRED)
import dynamic from 'next/dynamic'
import '@clxrity/react-audio/index.css' // (optional) import the styles

/**
 * You can also import the CSS within your `globals.css` or `index.css` file like so:
 * ```css
 * @import "@clxrity/react-audio/index.css";
 * ```
 */

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
````

---

> - **Note:** You may use external URLs for the **src** property for components such as [`<Player />`](https://clxrityy.github.io/react-audio/??story=player--default) and [`<ShufflePlayer />`](https://clxrityy.github.io/react-audio/?story=shuffleplayer--default) components and experience no CORS issues, as the audio files are fetched and played by the client-side.
> - However, for components such as [`<Waveform />`](https://clxrityy.github.io/react-audio/?story=waveform--default) and [`<Spectrogram />`](https://clxrityy.github.io/react-audio/?story=spectrogram--default) components, the CORS origins must be set correctly on the server-side to avoid CORS issues. This is only applicable when using external URLs for the **src** property.
> - For example, if using files served from firebase storage, set the CORS origins to **`*`** to allow all origins to access the files.
>   - [Firebase CORS Configuration](https://firebase.google.com/docs/storage/web/download-files#cors_configuration)
