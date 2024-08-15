# @clxrityy/react-audio

## 0.13.0

### Minor Changes

- 1659bd6: begin **Waveform** component, existing error: "Uncaught DOMException: Failed to execute 'createMediaElementSource' on 'AudioContext': HTMLMediaElement already connected previously to a different MediaElementSourceNode."
- fdf559b: style updates to library player

## 0.11.0

### Minor Changes

- 39ed441: add loading states to every component

### Patch Changes

- 7a5aca2: fix error "rounded is not defined" prop with **Button**

## 0.10.0

### Minor Changes

- c1c9610: removed **AudioPlayer** for now
- 9bb0c8d: added (begun) **<AudioPlayer />**

### Patch Changes

- 8cd2ac2: fix "Audio is not defined" error in **<JustPlayer />**
- 4af6757: fix **JustPlayer**: no more useEffect issue
- 213a90c: fixed "variant" unknown prop in **<Button />**, will find better ways to update styles and theming

## 0.9.0

### Minor Changes

- 4f368d5: **AudioLibrary** is fully functional and styled nicely for now, updated readme & package.json
- 1f5711c: change library component to **AudioLibrary** with states and styles inside

## 0.8.0

### Minor Changes

- 469f488: add / begin <LibraryPlayer /> component
- aec2e66: add styled-components

### Patch Changes

- 60d76fd: <LibraryPlayer /> now works (somewhat)

## 0.7.0

### Minor Changes

- 62c85bf: update packages

### Patch Changes

- 443185b: `<JustPlayer />` now works (plays audio)

## 0.6.0

### Minor Changes

- 6e7d46f: updated visuals to `<AudioPlayer />`, began `<JustPlayer />`

## 0.5.0

### Minor Changes

- 3dc1f94: add background color param
- df5f580: add license and npmignore

### Patch Changes

- fc106f5: it works now
- df5f580: make changeset a dev dependency

## 0.4.0

### Minor Changes

- d184bff: made component export & import into applications properly, `<AudioPlayer />` component is now (semi) functional and visible
- f5c0d15: structuring `AudioPlayer` component. began exporting compatible types for the (optional) options (styling so far)

## 0.3.0

### Minor Changes

- af6c419: test tailwindcss
- 7cacb07: begin functionality of audio component

### Patch Changes

- 7cacb07: change name of `Player` to `AudioPlayer`

## 0.2.0

### Minor Changes

- begin testing, add changeset, begin development process
