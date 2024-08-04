# `@clxrityy/react-audio`
## [ BETA ]

> ##### by [@clxrityy](https://github.com/clxrityy)
> A react audio player component library.

- [`<AudioPlayer />`](#audioplayer)
- [`<JustPlayer />`](#justplayer)


### [CHANGELOG 🪵](/CHANGELOG.md)

---

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

### `<AudioPlayer />`

#### Features
- Controls
- Progress bar
- Volume control
- Mobile responsive
- Customizable style

#### Use-case
- Best for fully displaying a track and all its details

```tsx
"use client";
import { AudioPlayer } from "@clxrityy/react-audio";

export default function Component() {
  return (
    <AudioPlayer
      track={{
        src: "/audio.wav",
        title: "test",
        thumbnail: "/favicon.ico",
        author: {
          name: "clxrity",
        },
      }}
      style={{
        backgroundColor: "transparent",
      }}
    />
  );
}
```

![example-audio-player](https://i.gyazo.com/1526afdae87ead8a9ead560248ad6ab3.png)

---

### `<JustPlayer />`

#### Features
- Just a play button
- Customizable style

#### Use-case
- Best for mapping over audio files in a visually small listed component

```tsx
"use client";
import { JustPlayer } from "@clxrityy/react-audio";

export default function Component() {
  return (
    <JustPlayer
      track={{
        src: "/audio.wav",
      }}
    />
  );
}
```
