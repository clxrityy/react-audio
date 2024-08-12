# `@clxrityy/react-audio`
## [ BETA ]

> ##### by [@clxrityy](https://github.com/clxrityy)
> A react audio player component library.

### Components

- [`<JustPlayer />`](#justplayer)
  - Just a play/pause button
- [`<AudioPlayer />`](#audioplayer)
  - Visualized audio player
  - Controls
    - Volume bar & mute/unmute
    - Progress bar
  - Screen responsive
- [`<AudioLibrary />`](#audiolibrary)
  - Visualized audio player with multiple tracks
  - Controls
    - Volume bar & mute/unmute
    - Progress bar
    - Next/previous track
  - Autoplay next track
  - Screen responsive


# [🗒️ CHANGELOG](/CHANGELOG.md)

---
```zsh
pnpm add @clxrityy/react-audio
```

---

## `<JustPlayer />`

#### Features
- *Just a play button*
- Customizable style
- Loading state

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

#### Styling

```tsx
<JustPlayer 
  track={tracks[0]} 
  size={50} {/* ICON SIZE */}
  style={{
    backgroundColor: "red",
    padding: "1rem",
    borderRadius: "1rem",
    boxShadow: "0 0 1rem rgba(0, 0, 0, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }} {/* REACT CSS PROPERTIES */}  
/>
```

![styled JustPlayer example](https://i.gyazo.com/162d4c8c077928b7d3e463a5c2cbf4ea.png)

---

## `<AudioPlayer />`

### Features
- Visualized audio player
- Screen responsive
- Volume controls
- Progress bar

### Use-case
- Best for displaying a singular audio track

```tsx
"use client"
import { type Track, AudioPlayer } from "@clxrityy/react/audio";

const track: Track = {
  src: "/audio.wav",
  title: "Track Title",
  author: {
    name: "Track Author",
    url: "https://www.someurl.com"
  },
  thumbnail: "./favicon.ico"
}

export default function Component() {
  return <AudioPlayer track={track} />
}
```

<img src="https://i.gyazo.com/39711cba228a89bc7afd4417ff566e78.png" alt="audio player example 1" style="display:inline-block;"  />
<img src="https://i.gyazo.com/5b9e7f2308653d23b81564b1a54a7145.png" alt="audio player example 2" height="400px" style="display:inline-block;" />


---

## `<AudioLibrary />`

### Features
- A visualized audio library with multiple tracks
- Controls
- Progress bar
- Volume control
- Screen responsive
- Autoplay next song

### Use-case
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

<img src="https://i.gyazo.com/29f40fe844eedea54f6577cd52d7ea78.png" alt="audio library example image" />

#### Styling

```tsx
<AudioLibrary
  tracks={tracks}
  styles={{
    backgroundColor: "transparent",
    textColor: "white",
    boxShadow: "10px 5px 5px red",
    theme: "dark",
    border: "1px solid white",
  }}
/>
```

### Construct the audio library yourself

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