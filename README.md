# `@clxrityy/react-audio`
## [ BETA ]

> ##### by [@clxrityy](https://github.com/clxrityy)
> A react audio player component library.

- [`<AudioPlayer />`](#audioplayer)
- [`<JustPlayer />`](#justplayer)
- [`<AudioLibrary />`](#audiolibrary)


# [🗒️ CHANGELOG](/CHANGELOG.md)

---
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

---

### `<AudioLibrary />`

#### Features
- A visualized audio library with multiple tracks
- Controls
- Progress bar
- Volume control
- Mobile responsive
- Autoplay next song

#### Use-case
- Best for displaying collections of audio files

```tsx
"use client";
import { AudioLibrary } from "@clxrityy/react-audio";
import { tracks } from "./data";

export default function Component() {

  return (
    <div>
      <AudioLibrary tracks={tracks} />
    </div>
  )
}
```

![audio library image](https://i.gyazo.com/29f40fe844eedea54f6577cd52d7ea78.png)

#### Construct the audio library yourself

If you'd like further customization, import the base components:

```tsx
import { 
  LibraryPlayer, // The player component
  LibraryTrackItem, // Individual track component
} from "@clxrityy/react-audio";
```

- Define states yourself

```tsx
"use client";
import {
  type Track,
  // ...
} from "@clxrityy/react-audio";
import { useState } from "react";

const tracks: Track[] = [
  // ...
];

export default function Component() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(-1);

  const currentTrack = tracks[currentTrackIndex];

  return (
    <div>
      <h1>My songs</h1>
      <ul>
        {tracks.map((track, index) => (
          <LibraryTrackItem
            key={index}
            selected={index === currentTrackIndex}
            track={track}
            trackNumberLabel={index}
            onClick={() => setCurrentTrackIndex(index)}
          />
        ))}
      </ul>
      <LibraryPlayer 
        key={currentTrackIndex}
        currentTrack={currentTrack}
        trackIndex={current}
        trackCount={tracks.length}
        onNext={() => setCurrentTrackIndex((i) => i + 1)}
        onPrev={() => setCurrentTrackIndex((i) => i - 1)}
      />
    </div>
  )
}
```