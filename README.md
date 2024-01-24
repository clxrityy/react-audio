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
import { AudioPlayer } from '@clxrityy/react-audio';

export default function Home() {

  /* 
    example of a file object
  */
  const buffer = new Buffer("test");
  const file = new File([buffer.buffer], 'test');

  return (
    <main>
      <AudioPlayer className={`/* */`} file={file} />
    </main>
  );
}
```