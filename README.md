# React Audio <img src="./icon.png" width="30" />

An audio utility and component library for React.

![MIT license](https://img.shields.io/npm/l/%40clxrity%2Freact-audio?style=for-the-badge&label=LICENSE)

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

## Usage

```tsx
'use client' // Must be used in client components
import { Player } from '@clxrity/react-audio' // Import the component
import '@clxrity/react-audio/index.css' // Import CSS

export default function Page() {
  // Create a ref for the audio element (optional)
  const audioRef = useRef<HTMLAudioElement>(null)

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
  )
}
```
