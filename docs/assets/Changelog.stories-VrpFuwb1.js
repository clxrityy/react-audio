import{u as s,j as a}from"./index-BndVsEdy.js";import"./dialog-CBeI--Cp.js";function n(l){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...l.components};return a.jsxs(a.Fragment,{children:[a.jsx(e.h1,{className:"ladle-markdown",children:"@clxrity/react-audio"}),`
`,a.jsx(e.h2,{className:"ladle-markdown",children:"2.0.0"}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Major Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsxs(e.li,{className:"ladle-markdown",children:[`
`,a.jsxs(e.p,{className:"ladle-markdown",children:["b82ecec: - Switched from ",a.jsx(e.a,{href:"https://storybook.js.org/",className:"ladle-markdown",children:"storybook"})," to ",a.jsx(e.a,{href:"https://ladle.dev/",className:"ladle-markdown",children:"ladle"})," - Much more lightweight and faster - A lot more of a simple UI to work with"]}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsxs(e.li,{className:"ladle-markdown",children:["Text and colors are automatically inherited by the theme.",`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsx(e.li,{className:"ladle-markdown",children:"Dark background = white text"}),`
`,a.jsx(e.li,{className:"ladle-markdown",children:"Light background = black text"}),`
`]}),`
`]}),`
`,a.jsxs(e.li,{className:"ladle-markdown",children:["Components in new working new version so far:",`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsxs(e.li,{className:"ladle-markdown",children:[a.jsx(e.code,{className:"ladle-markdown",children:"<Player />"})," - Replaces ",a.jsx(e.code,{className:"ladle-markdown",children:"<JustPlayer />"})," & ",a.jsx(e.code,{className:"ladle-markdown",children:"<AudioPlayer />"})]}),`
`,a.jsxs(e.li,{className:"ladle-markdown",children:[a.jsx(e.code,{className:"ladle-markdown",children:"<ShufflePlayer />"})," - Replaces ",a.jsx(e.code,{className:"ladle-markdown",children:"<LibraryPlayer />"})]}),`
`,a.jsx(e.li,{className:"ladle-markdown",children:a.jsx(e.code,{className:"ladle-markdown",children:"<Waveform />"})}),`
`]}),`
`]}),`
`]}),`
`,a.jsx(e.p,{className:"ladle-markdown",children:"Working structure:"}),`
`,a.jsx(e.pre,{className:"ladle-markdown",children:a.jsx(e.code,{className:"language-yaml ladle-markdown",children:`~:
    __tests__/: # Tests with vitest
    .changeset/: # Changeset version management
    .github/: # Github workflows
    .ladle/: # Ladle setup for documenation
    docs/: # Output from ladle for github pages
    public/: # Public static directory
    src/:
        components/ui/: # Reusable UI components
        hooks/: # Reusable hooks
        lib/: # The package exports
            - ...
            - index.ts # Main entry point
        stories/: # Ladle stories
        util/: # Utility functions
        - config.ts # Default configurations
        - index.css # Global CSS
    ...
`})}),`
`]}),`
`,a.jsxs(e.li,{className:"ladle-markdown",children:[`
`,a.jsx(e.p,{className:"ladle-markdown",children:"22f001e: - Update all dependencies"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsx(e.li,{className:"ladle-markdown",children:"Begin restructuring code"}),`
`,a.jsx(e.li,{className:"ladle-markdown",children:"Switch to Vite"}),`
`,a.jsx(e.li,{className:"ladle-markdown",children:"Switch from styled components to tailwind"}),`
`,a.jsx(e.li,{className:"ladle-markdown",children:"Add new logo"}),`
`,a.jsx(e.li,{className:"ladle-markdown",children:"Add new landing page"}),`
`,a.jsx(e.li,{className:"ladle-markdown",children:"Add new documentation"}),`
`,a.jsx(e.li,{className:"ladle-markdown",children:"Add new examples"}),`
`,a.jsx(e.li,{className:"ladle-markdown",children:"Add new audio player"}),`
`]}),`
`]}),`
`]}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Minor Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsxs(e.li,{className:"ladle-markdown",children:[`
`,a.jsx(e.p,{className:"ladle-markdown",children:"e8d4166: update all packages to latest version"}),`
`]}),`
`,a.jsxs(e.li,{className:"ladle-markdown",children:[`
`,a.jsx(e.p,{className:"ladle-markdown",children:"149e841: Added the Player component which will replace JustPlayer & AudioPlayer into one component (with props for customization)"}),`
`]}),`
`,a.jsxs(e.li,{className:"ladle-markdown",children:[`
`,a.jsxs(e.p,{className:"ladle-markdown",children:["e155be4: add functionality to EQ & volume knobs (",a.jsx(e.strong,{className:"ladle-markdown",children:"AudioInputVisualizer"}),")"]}),`
`]}),`
`,a.jsxs(e.li,{className:"ladle-markdown",children:[`
`,a.jsxs(e.p,{className:"ladle-markdown",children:["6f1c415: Added a code coverage workflow that indicates whether all ",a.jsx(e.a,{href:"https://vitest.dev/",className:"ladle-markdown",children:a.jsx(e.code,{className:"ladle-markdown",children:"vitest"})})," tests are passing."]}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsxs(e.li,{className:"ladle-markdown",children:["Utilizes ",a.jsx(e.a,{href:"https://about.codecov.io/",className:"ladle-markdown",children:"Codecov"})," to provide an interactive UI for test coverage."]}),`
`,a.jsxs(e.li,{className:"ladle-markdown",children:["Added an environment variable ",a.jsx(e.code,{className:"ladle-markdown",children:"CODECOV_TOKEN"})," to the repository's secrets and local ",a.jsx(e.code,{className:"ladle-markdown",children:".env"})," file."]}),`
`,a.jsxs(e.li,{className:"ladle-markdown",children:["Added a new script ",a.jsx(e.code,{className:"ladle-markdown",children:"npm run coverage"})," to generate and upload the coverage report."]}),`
`]}),`
`]}),`
`,a.jsxs(e.li,{className:"ladle-markdown",children:[`
`,a.jsx(e.p,{className:"ladle-markdown",children:"8172042: added the Waveform component, working perfectly. might need some style tweaks and configurations down the road"}),`
`]}),`
`,a.jsxs(e.li,{className:"ladle-markdown",children:[`
`,a.jsxs(e.p,{className:"ladle-markdown",children:["f1a1c48: Add a new *",a.jsx(e.strong,{className:"ladle-markdown",children:"*tests**"})," directory to contain public tests"]}),`
`]}),`
`,a.jsxs(e.li,{className:"ladle-markdown",children:[`
`,a.jsx(e.p,{className:"ladle-markdown",children:"f102a1f: Finished the Player component with a progress bar, autoplay feature, ability to disable progress bar and track info display"}),`
`]}),`
`]}),`
`,a.jsx(e.h2,{className:"ladle-markdown",children:"1.7.0"}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Minor Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsxs(e.li,{className:"ladle-markdown",children:["f5abd36: added ",a.jsx(e.strong,{className:"ladle-markdown",children:"AudioUploader"})," functional with no UI display yet"]}),`
`,a.jsxs(e.li,{className:"ladle-markdown",children:["d89e093: add ",a.jsx(e.strong,{className:"ladle-markdown",children:"resize()"})," function to ",a.jsx(e.strong,{className:"ladle-markdown",children:"Waveform"}),"'s canvas if no size prop is present"]}),`
`,a.jsxs(e.li,{className:"ladle-markdown",children:["23839c0: ",a.jsx(e.strong,{className:"ladle-markdown",children:"AudioInputVisualizer"})," works fully functional"]}),`
`,a.jsxs(e.li,{className:"ladle-markdown",children:["ba70a93: began ",a.jsx(e.strong,{className:"ladle-markdown",children:"AudioInput"})," component where you can input audio mic/guitar"]}),`
`,a.jsxs(e.li,{className:"ladle-markdown",children:["bb9f2b5: added prop to ",a.jsx(e.strong,{className:"ladle-markdown",children:"Waveform"})," & ",a.jsx(e.strong,{className:"ladle-markdown",children:"AudioInputVisualizer"}),": fftsize"]}),`
`]}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Patch Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsx(e.li,{className:"ladle-markdown",children:"be63b43: re-added imports for libraryplayer & librarytrackitem"}),`
`]}),`
`,a.jsx(e.h2,{className:"ladle-markdown",children:"1.6.0"}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Minor Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsx(e.li,{className:"ladle-markdown",children:"9ba3169: update props setup, all now have specific inherited props"}),`
`,a.jsx(e.li,{className:"ladle-markdown",children:"0422a54: update storybook"}),`
`]}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Patch Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsx(e.li,{className:"ladle-markdown",children:"ad13785: fix imports and props passing on"}),`
`]}),`
`,a.jsx(e.h2,{className:"ladle-markdown",children:"1.5.0"}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Minor Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsx(e.li,{className:"ladle-markdown",children:"dbc2980: add docs"}),`
`,a.jsx(e.li,{className:"ladle-markdown",children:"7d930b0: add nextjs app to docs"}),`
`,a.jsx(e.li,{className:"ladle-markdown",children:"e56a5f9: added a script that generates an api route for creating a waveform image"}),`
`]}),`
`,a.jsx(e.h2,{className:"ladle-markdown",children:"1.4.0"}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Minor Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsx(e.li,{className:"ladle-markdown",children:"832989e: added jest, testing ffmpeg features to create waveforms"}),`
`,a.jsx(e.li,{className:"ladle-markdown",children:"f7f4d6f: restructure files (exports in src/lib/)"}),`
`]}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Patch Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsx(e.li,{className:"ladle-markdown",children:"c650b27: make all exports default"}),`
`,a.jsx(e.li,{className:"ladle-markdown",children:"610d33d: fixed jest interfering with rollup build"}),`
`,a.jsx(e.li,{className:"ladle-markdown",children:"3a33cf0: ability to change color in waveforms actually works now"}),`
`]}),`
`,a.jsx(e.h2,{className:"ladle-markdown",children:"1.3.0"}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Minor Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsx(e.li,{className:"ladle-markdown",children:"48caa05: change styled-components to devDependency"}),`
`,a.jsx(e.li,{className:"ladle-markdown",children:"7560f63: update packages"}),`
`,a.jsxs(e.li,{className:"ladle-markdown",children:["0dff7df: add ",a.jsx(e.strong,{className:"ladle-markdown",children:"showTrackInfo"})," prop to ",a.jsx(e.strong,{className:"ladle-markdown",children:"Waveform"})]}),`
`]}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Patch Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsx(e.li,{className:"ladle-markdown",children:"aa2aaa1: remove tailwindcss dependency"}),`
`,a.jsx(e.li,{className:"ladle-markdown",children:"3bd6fe5: fix progress bar on waveform"}),`
`]}),`
`,a.jsx(e.h2,{className:"ladle-markdown",children:"0.14.0"}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Minor Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsx(e.li,{className:"ladle-markdown",children:"cd32bde: more styling updates to library"}),`
`,a.jsx(e.li,{className:"ladle-markdown",children:"2061b0b: update readme"}),`
`,a.jsxs(e.li,{className:"ladle-markdown",children:["596d485: add other components to ",a.jsx(e.strong,{className:"ladle-markdown",children:"Waveform"})]}),`
`,a.jsxs(e.li,{className:"ladle-markdown",children:["e95dde9: updated styles for ",a.jsx(e.strong,{className:"ladle-markdown",children:"AudioPlayer"})," (removed unused thumbnail)"]}),`
`]}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Patch Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsxs(e.li,{className:"ladle-markdown",children:["cb432a6: ",a.jsx(e.strong,{className:"ladle-markdown",children:"Waveform"})," is functional, no errors, need to add other component parts"]}),`
`,a.jsx(e.li,{className:"ladle-markdown",children:"8ef7746: waveform now works"}),`
`,a.jsx(e.li,{className:"ladle-markdown",children:"ce890a9: fix dom errors"}),`
`]}),`
`,a.jsx(e.h2,{className:"ladle-markdown",children:"0.13.0"}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Minor Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsxs(e.li,{className:"ladle-markdown",children:["1659bd6: begin ",a.jsx(e.strong,{className:"ladle-markdown",children:"Waveform"}),` component, existing error: "Uncaught DOMException: Failed to execute 'createMediaElementSource' on 'AudioContext': HTMLMediaElement already connected previously to a different MediaElementSourceNode."`]}),`
`,a.jsx(e.li,{className:"ladle-markdown",children:"fdf559b: style updates to library player"}),`
`]}),`
`,a.jsx(e.h2,{className:"ladle-markdown",children:"0.11.0"}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Minor Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsx(e.li,{className:"ladle-markdown",children:"39ed441: add loading states to every component"}),`
`]}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Patch Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsxs(e.li,{className:"ladle-markdown",children:['7a5aca2: fix error "rounded is not defined" prop with ',a.jsx(e.strong,{className:"ladle-markdown",children:"Button"})]}),`
`]}),`
`,a.jsx(e.h2,{className:"ladle-markdown",children:"0.10.0"}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Minor Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsxs(e.li,{className:"ladle-markdown",children:["c1c9610: removed ",a.jsx(e.strong,{className:"ladle-markdown",children:"AudioPlayer"})," for now"]}),`
`,a.jsxs(e.li,{className:"ladle-markdown",children:["9bb0c8d: added (begun) ",a.jsx(e.strong,{className:"ladle-markdown",children:a.jsx(e.code,{className:"ladle-markdown",children:"<AudioPlayer />"})})]}),`
`]}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Patch Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsxs(e.li,{className:"ladle-markdown",children:['8cd2ac2: fix "Audio is not defined" error in ',a.jsx(e.strong,{className:"ladle-markdown",children:a.jsx(e.code,{className:"ladle-markdown",children:"<JustPlayer />"})})]}),`
`,a.jsxs(e.li,{className:"ladle-markdown",children:["4af6757: fix ",a.jsx(e.strong,{className:"ladle-markdown",children:"JustPlayer"}),": no more useEffect issue"]}),`
`,a.jsxs(e.li,{className:"ladle-markdown",children:['213a90c: fixed "variant" unknown prop in ',a.jsxs(e.strong,{className:"ladle-markdown",children:[a.jsx(e.code,{className:"ladle-markdown",children:"<Button /"}),">"]}),", will find better ways to update styles and theming"]}),`
`]}),`
`,a.jsx(e.h2,{className:"ladle-markdown",children:"0.9.0"}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Minor Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsxs(e.li,{className:"ladle-markdown",children:["4f368d5: ",a.jsx(e.strong,{className:"ladle-markdown",children:"AudioLibrary"})," is fully functional and styled nicely for now, updated readme & package.json"]}),`
`,a.jsxs(e.li,{className:"ladle-markdown",children:["1f5711c: change library component to ",a.jsx(e.strong,{className:"ladle-markdown",children:"AudioLibrary"})," with states and styles inside"]}),`
`]}),`
`,a.jsx(e.h2,{className:"ladle-markdown",children:"0.8.0"}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Minor Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsxs(e.li,{className:"ladle-markdown",children:["469f488: add / begin ",a.jsx(e.code,{className:"ladle-markdown",children:"<LibraryPlayer />"})," component"]}),`
`,a.jsx(e.li,{className:"ladle-markdown",children:"aec2e66: add styled-components"}),`
`]}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Patch Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsxs(e.li,{className:"ladle-markdown",children:["60d76fd: ",a.jsx(e.code,{className:"ladle-markdown",children:"<LibraryPlayer />"})," now works (somewhat)"]}),`
`]}),`
`,a.jsx(e.h2,{className:"ladle-markdown",children:"0.7.0"}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Minor Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsx(e.li,{className:"ladle-markdown",children:"62c85bf: update packages"}),`
`]}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Patch Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsxs(e.li,{className:"ladle-markdown",children:["443185b: ",a.jsx(e.code,{className:"ladle-markdown",children:"<JustPlayer />"})," now works (plays audio)"]}),`
`]}),`
`,a.jsx(e.h2,{className:"ladle-markdown",children:"0.6.0"}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Minor Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsxs(e.li,{className:"ladle-markdown",children:["6e7d46f: updated visuals to ",a.jsx(e.code,{className:"ladle-markdown",children:"<AudioPlayer />"}),", began ",a.jsx(e.code,{className:"ladle-markdown",children:"<JustPlayer />"})]}),`
`]}),`
`,a.jsx(e.h2,{className:"ladle-markdown",children:"0.5.0"}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Minor Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsx(e.li,{className:"ladle-markdown",children:"3dc1f94: add background color param"}),`
`,a.jsx(e.li,{className:"ladle-markdown",children:"df5f580: add license and npmignore"}),`
`]}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Patch Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsx(e.li,{className:"ladle-markdown",children:"fc106f5: it works now"}),`
`,a.jsx(e.li,{className:"ladle-markdown",children:"df5f580: make changeset a dev dependency"}),`
`]}),`
`,a.jsx(e.h2,{className:"ladle-markdown",children:"0.4.0"}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Minor Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsxs(e.li,{className:"ladle-markdown",children:["d184bff: made component export & import into applications properly, ",a.jsx(e.code,{className:"ladle-markdown",children:"<AudioPlayer />"})," component is now (semi) functional and visible"]}),`
`,a.jsxs(e.li,{className:"ladle-markdown",children:["f5c0d15: structuring ",a.jsx(e.code,{className:"ladle-markdown",children:"AudioPlayer"})," component. began exporting compatible types for the (optional) options (styling so far)"]}),`
`]}),`
`,a.jsx(e.h2,{className:"ladle-markdown",children:"0.3.0"}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Minor Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsx(e.li,{className:"ladle-markdown",children:"af6c419: test tailwindcss"}),`
`,a.jsx(e.li,{className:"ladle-markdown",children:"7cacb07: begin functionality of audio component"}),`
`]}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Patch Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsxs(e.li,{className:"ladle-markdown",children:["7cacb07: change name of ",a.jsx(e.code,{className:"ladle-markdown",children:"Player"})," to ",a.jsx(e.code,{className:"ladle-markdown",children:"AudioPlayer"})]}),`
`]}),`
`,a.jsx(e.h2,{className:"ladle-markdown",children:"0.2.0"}),`
`,a.jsx(e.h3,{className:"ladle-markdown",children:"Minor Changes"}),`
`,a.jsxs(e.ul,{className:"ladle-markdown",children:[`
`,a.jsx(e.li,{className:"ladle-markdown",children:"begin testing, add changeset, begin development process"}),`
`]})]})}function d(l={}){const{wrapper:e}={...s(),...l.components};return e?a.jsx(e,{...l,children:a.jsx(n,{...l})}):n(l)}d.storyName="Readme";typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{d as MDXContent};
