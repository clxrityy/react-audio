# @clxrity/react-audio <img src="./icon.png" width="32px" height="32px" style="display:inline-block;" />

[![view on npm](https://badgen.net/npm/v/@clxrity/react-audio)](https://www.npmjs.org/package/@clxrity/react-audio)
[![npm module downloads](https://badgen.net/npm/dt/@clxrity/react-audio)](https://www.npmjs.org/package/@clxrity/react-audio)
[![Gihub repo dependents](https://badgen.net/github/dependents-repo/clxrityy/react-audio)](https://github.com/clxrityy/react-audio/network/dependents?dependent_type=REPOSITORY)
[![Gihub package dependents](https://badgen.net/github/dependents-pkg/clxrityy/react-audio)](https://github.com/clxrityy/react-audio/network/dependents?dependent_type=PACKAGE)
[![Node.js CI](https://github.com/clxrityy/react-audio/actions/workflows/main.yml/badge.svg)](https://github.com/clxrityy/react-audio/actions/workflows/main.yml)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/clxrityy/react-audio)
[![MIT license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/clxrityy/react-audio/blob/main/LICENSE)

A react audio player component library.

```zsh
npm i @clxrity/react-audio
```

```zsh
pnpm add @clxrity/react-audio
```

```zsh
yarn add @clxrity/react-audio
```

# [🗒️ CHANGELOG](/CHANGELOG.md)

---

## Components 

| Component                              | Controls                                                 | Customizable | Display Track Info |
| -------------------------------------- | -------------------------------------------------------- | :----------: | :----------------: |
| [**`<JustPlayer/>`**](#justplayer)     | Play/pause                                               |      ✅      |         ❌         |
| [**`<Waveform />`**](#waveform)        | Play/pause, volume, progress, mute/unmute                |      ✅      |         ❌         |
| [**`<AudioPlayer/>`**](#audioplayer)   | Play/pause, volume, progress, mute/unmute                |      ✅      |         ✅         |
| [**`<AudioLibrary/>`**](#audiolibrary) | Play/pause, volume, progress, mute/unmute, next/previous |      ✅      |         ✅         |

## Waveform Images API (Experimental)

- Install with optional dependencies to use the waveform image generation API.
    - [`fluent-ffmpeg`](https://www.npmjs.com/package/fluent-ffmpeg)
    - [`shelljs`](https://www.npmjs.com/package/shelljs)

```zsh
npm i @clxrity/react-audio --save-optional
```

> Works **ONLY** with [Nextjs App Router](https://nextjs.org/docs/app)

You can generate an image of an audio file's waveform by using the `setup-waveform-api` script.

```zsh
npx setup-waveform-api
```

-   This will create a `app/api/generate-waveform/route.ts` file.
    ```ts
    import fluentFfmpeg from 'fluent-ffmpeg';
    import path from 'path';
    import { NextRequest, NextResponse } from 'next/server';

    export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const audioUrl = url.searchParams.get('url');

    if (!audioUrl) {
        return NextResponse.json({ error: 'Missing URL query parameter' }, { status: 400 });
    }

    const waveformPath = path.join(process.cwd(), 'public', 'waveform.png');

    const promise = new Promise((resolve, reject) => {
        fluentFfmpeg(audioUrl)
        .audioFilters('aformat=channel_layouts=stereo')
        .outputOptions('-filter_complex', 'aformat=channel_layouts=stereo,showwavespic=s=600x120')
        .output(waveformPath)
        .on('end', () => {
            resolve(NextResponse.json({ message: `Waveform image at ${waveformPath}` }, { status: 200 }));
        })
        .on('error', (err) => {
            reject(NextResponse.json({ error: err }, { status: 500 }));
        })
        .run();
    });

    return promise;
    }
    ```
- You can then use this route to generate waveform images.
    - **Note**: If you are using `fetch()` to handle the API request, make sure to pass the absolute URL of the audio file.
```tsx
/**
 * In this example, the audio file is within the public/ directory.
 * `/public/audio.wav` = `http://localhost:3000/audio.wav`
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/static-assets
 */
await fetch('http://localhost:3000/api/generate-waveform?url=http://localhost:3000/audio.wav')
```

- This will generate a waveform image in the `public/` directory. (e.g. `public/waveform.png`)
---

## `<JustPlayer />`

#### Features

-   _Just a play button_
-   Customizable style
-   Loading state

#### Use-case

-   Best for mapping over audio files in a visually small listed component

```tsx
'use client'
import { JustPlayer } from '@clxrity/react-audio'

export default function Component() {
    return (
        <JustPlayer
            track={{
                src: '/audio.wav',
            }}
        />
    )
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

## `<Waveform />`

### Features

-   Audio wave visualizer
-   Screen responsive
-   Volume controls
-   Progress bar

### Use-case

-   Best for displaying the audio wave

```tsx
'use client'
import { type Track, Waveform } from '@clxrity/react-audio'

const track: Track = {
    // ...
}

export default function Component() {
    return (
        <Waveform
            track={track}
            size={{
                width: window.innerWidth,
                height: window.innerHeight,
            }}
            color="#ff0000"
        />
    )
}
```

<img src="https://i.gyazo.com/66ce09fea80e6c1ac5fc71a3b2e4dca4.gif" width="500px" height="150px" />

#### Styling

```tsx
'use client'

export default function Component() {
    return (
        <Waveform
            track={track}
            canvasStyles={{
                borderRadius: '0.5rem',
                border: '1px solid #333',
            }}
            size={{
                width: 300,
                height: 120,
            }}
        />
    )
}
```

![styled waveform example](https://i.gyazo.com/04caba85aff7ae3bb1b4a7579e861851.gif)

---

## `<AudioPlayer />`

### Features

-   Visualized audio player
-   Screen responsive
-   Volume controls
-   Progress bar

### Use-case

-   Best for displaying a singular audio track

```tsx
'use client'
import { type Track, AudioPlayer } from '@clxrity/react-audio'

const track: Track = {
    src: '/audio.wav',
    title: 'Track Title',
    author: {
        name: 'Track Author',
        url: 'https://www.someurl.com',
    },
    thumbnail: './favicon.ico',
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

-   A visualized audio library with multiple tracks
-   Controls
-   Progress bar
-   Volume control
-   Screen responsive
-   Autoplay next song

### Use-case

-   Best for displaying collections of audio files

```tsx
'use client'
import { AudioLibrary } from '@clxrity/react-audio'
import { tracks } from './data'

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
        backgroundColor: 'transparent',
        textColor: 'white',
        boxShadow: '10px 5px 5px red',
        theme: 'dark',
        border: '1px solid white',
    }}
/>
```

### Construct the audio library yourself

If you'd like further customization, import the base components:

```tsx
import {
    LibraryPlayer, // The player component
    LibraryTrackItem, // Individual track component
} from '@clxrity/react-audio'
```

-   Define states yourself

```tsx
'use client'
import {
    type Track,
    // ...
} from '@clxrity/react-audio'
import { useState } from 'react'

const tracks: Track[] = [
    // ...
]

export default function Component() {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(-1)

    const currentTrack = tracks[currentTrackIndex]

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

#### Further customization

![audio-library](https://i.gyazo.com/0eea9eac4243013f67b9c2d33aa1c9e5.gif)

> Example from [**clxrity.xyz**](https://clxrity.xyz)

-   Uploads with [react-hook-form](https://react-hook-form.com/)
-   Store audio files with [firebase](https://firebase.google.com/)
-   Hover card with [shadcnui](https://ui.shadcn.com/)

##### See [examples](/examples/README.md) for more specific usage demonstrations
