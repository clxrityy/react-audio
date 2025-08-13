# React Audio <img src="./icon.png" width="30" />

An audio utility and component library for React.

[![view on npm](https://img.shields.io/npm/v/%40clxrity%2Freact-audio?style=for-the-badge&logo=npm&logoColor=%23CB3837&logoSize=auto&label=NPM)](https://www.npmjs.org/package/@clxrity/react-audio) [![BUILD](https://img.shields.io/github/actions/workflow/status/clxrityy/react-audio/.github%2Fworkflows%2Fmain.yml?branch=main&event=push&style=for-the-badge&logo=github&logoColor=%23181717&logoSize=auto&label=BUILD&color=%232dba4e)](https://github.com/clxrityy/react-audio/actions/workflows/main.yml)

[![codecov](https://codecov.io/gh/clxrityy/react-audio/branch/main/graph/badge.svg?token=X4NBMSM9ZP)](https://codecov.io/gh/clxrityy/react-audio)

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

[![Docs](<https://img.shields.io/badge/docs-docs?style=for-the-badge&logo=readthedocs&logoColor=%238CA1AF&logoSize=auto&color=rgb(121%2C%2091%2C%20132)&link=https%3A%2F%2Freact-audio-docs.vercel.app>)](https://react-audio-docs.vercel.app/docs) [![Changelog](<https://img.shields.io/badge/changelog-changelog?style=for-the-badge&logo=googleforms&logoColor=%238CA1AF&logoSize=auto&color=rgb(121%2C%2091%2C%20132)&link=https%3A%2F%2Freact-audio-docs.vercel.app%2Fdocumentation%2Fchangelog>)](https://react-audio-docs.vercel.app/docs/changelog) [![Contribute](<https://img.shields.io/badge/contribute-contributions?style=for-the-badge&logo=git&logoColor=%238CA1AF&logoSize=auto&color=rgb(121%2C%2091%2C%20132)&link=https%3A%2F%2Fgithub.com%2Fclxrityy%2Freact-audio%2Fblob%2Fmain%2FCONTRIBUTING.md>)](https://github.com/clxrityy/react-audio/blob/main/.github/CONTRIBUTING.md)

---

## Usage

```tsx
"use client"; // Must be used in client components
import { Player } from "@clxrity/react-audio"; // Import the component
import "@clxrity/react-audio/index.css"; // Import CSS

export default function Page() {
  // Create a ref for the audio element (optional)
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <Player
      // Audio source (REQUIRED)
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      audioRef={audioRef} // Pass the ref to the component (optional)
      color="#ff0000" // Color of the player (optional)
      /**
       * Other props (optional):
       */
      autoplay={false} // Autoplay the audio (default: false)
      loop={false} // Loop the audio (default: false)
      showProgress={true} // Show the progress bar (default: true)
      showVolume={true} // Show the volume control (default: true)
    />
  );
}
```

---

![MIT license](https://img.shields.io/npm/l/%40clxrity%2Freact-audio?style=for-the-badge&label=LICENSE)
