# react-audio

##### by [@clxrityy](https://github.com/clxrityy)

- ##### (BETA)
- ##### [changelogs](/CHANGELOG.md)


an audio player component library.

```zsh
npm install @clxrityy/react-audio
```
```zsh
yarn add @clxrityy/react-audio
```
```zsh
pnpm add @clxrityy/react-audio
```

---

#### example

```tsx
"use client";
import { AudioPlayer } from "@clxrityy/react-audio";

return (
  <AudioPlayer
      track={{
        src="/audio.wav"
      }}
  />
)
```