import{u as s,j as a}from"./index-BndVsEdy.js";import"./dialog-CBeI--Cp.js";function o(l){const e={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",hr:"hr",img:"img",p:"p",pre:"pre",...s(),...l.components};return a.jsxs(a.Fragment,{children:[a.jsxs(e.h1,{className:"ladle-markdown",children:["@clxrity/react-audio ",a.jsx(e.img,{src:"/favicon-32x32.png",alt:"logo",className:"ladle-markdown"})]}),`
`,a.jsx(e.h4,{className:"ladle-markdown",children:"A react audio player component library."}),`
`,a.jsx(e.p,{className:"ladle-markdown",children:a.jsx(e.a,{href:"https://github.com/clxrityy/react-audio/blob/main/LICENSE",className:"ladle-markdown",children:a.jsx(e.img,{src:"https://img.shields.io/npm/l/%40clxrity%2Freact-audio?style=for-the-badge&label=LICENSE",alt:"MIT license",className:"ladle-markdown"})})}),`
`,a.jsxs(e.p,{className:"ladle-markdown",children:[a.jsx(e.a,{href:"https://github.com/clxrityy/react-audio/actions/workflows/main.yml",className:"ladle-markdown",children:a.jsx(e.img,{src:"https://img.shields.io/github/actions/workflow/status/clxrityy/react-audio/.github%2Fworkflows%2Fmain.yml?branch=main&event=push&style=for-the-badge&logo=github&logoColor=%23181717&logoSize=auto&label=BUILD&color=%232dba4e",alt:"BUILD",className:"ladle-markdown"})})," ",a.jsx(e.a,{href:"https://codecov.io/github/clxrity/react-audio?branch=main",className:"ladle-markdown",children:a.jsx(e.img,{src:"https://img.shields.io/codecov/c/github/clxrityy/react-audio?token=4c9504fd-c584-412e-9430-31e729f966b0&style=for-the-badge&logo=codecov&logoColor=%23F01F7A&logoSize=auto&label=COVERAGE&labelColor=%23F01F7A",alt:"codecov.io Code Coverage",className:"ladle-markdown"})}),`
`,a.jsx(e.a,{href:"https://www.npmjs.org/package/@clxrity/react-audio",className:"ladle-markdown",children:a.jsx(e.img,{src:"https://img.shields.io/npm/v/%40clxrity%2Freact-audio?style=for-the-badge&logo=npm&logoColor=%23CB3837&logoSize=auto&label=NPM",alt:"view on npm",className:"ladle-markdown"})}),`
`,a.jsx(e.a,{href:"https://www.npmjs.org/package/@clxrity/react-audio",className:"ladle-markdown",children:a.jsx(e.img,{src:"https://img.shields.io/npm/dm/%40clxrity%2Freact-audio?style=for-the-badge&logo=npm&logoColor=%23CB3837&logoSize=auto&label=DOWNLOADS",alt:"npm module downloads",className:"ladle-markdown"})})]}),`
`,a.jsx(e.hr,{className:"ladle-markdown"}),`
`,a.jsx(e.p,{className:"ladle-markdown",children:a.jsx(e.a,{href:"https://github.com/clxrityy/react-audio/blob/main/.nvmrc",className:"ladle-markdown",children:a.jsx(e.img,{src:"https://img.shields.io/node/v-lts/%40clxrity%2Freact-audio?style=for-the-badge&logo=nodedotjs&logoColor=%235FA04E&logoSize=auto&label=NODE",alt:"Node version",className:"ladle-markdown"})})}),`
`,a.jsx(e.h4,{className:"ladle-markdown",children:"Peer Dependencies:"}),`
`,a.jsxs(e.p,{className:"ladle-markdown",children:[a.jsx(e.a,{href:"https://www.npmjs.com/package/react",className:"ladle-markdown",children:a.jsx(e.img,{src:"https://img.shields.io/npm/dependency-version/%40clxrity%2Freact-audio/peer/react?style=for-the-badge&logo=react&logoColor=%2361DAFB&logoSize=auto&label=react",alt:"react",className:"ladle-markdown"})})," ",a.jsx(e.a,{href:"https://www.npmjs.com/package/react-dom",className:"ladle-markdown",children:a.jsx(e.img,{src:"https://img.shields.io/npm/dependency-version/%40clxrity%2Freact-audio/peer/react-dom?style=for-the-badge&logo=react&logoColor=%2361DAFB&logoSize=auto&label=react-dom",alt:"react-dom",className:"ladle-markdown"})})]}),`
`,a.jsx(e.pre,{className:"ladle-markdown",children:a.jsx(e.code,{className:"language-zsh ladle-markdown",children:`npm i @clxrity/react-audio
`})}),`
`,a.jsx(e.pre,{className:"ladle-markdown",children:a.jsx(e.code,{className:"language-zsh ladle-markdown",children:`pnpm add @clxrity/react-audio
`})}),`
`,a.jsx(e.pre,{className:"ladle-markdown",children:a.jsx(e.code,{className:"language-zsh ladle-markdown",children:`yarn add @clxrity/react-audio
`})}),`
`,a.jsx(e.hr,{className:"ladle-markdown"}),`
`,a.jsxs(e.p,{className:"ladle-markdown",children:[a.jsxs(e.a,{href:"https://clxrityy.github.io/react-audio/",className:"ladle-markdown",children:[a.jsx(e.img,{src:"https://img.shields.io/badge/clxrityy.github.io%2Freact-audio?style=for-the-badge&logo=readme&logoColor=%23617ab1&logoSize=auto&label=DOCS&color=%23617ab1",alt:"Documentation",className:"ladle-markdown"}),`
`]}),`
`,a.jsx(e.a,{href:"https://clxrityy.github.io/react-audio/?story=changelog--readme",className:"ladle-markdown",children:a.jsx(e.img,{src:"https://img.shields.io/badge/clxrityy.github.io%2Freact-audio%2F%3Fstory%3Dchangelog--readme?style=for-the-badge&logo=stackexchange&logoColor=%23617ab1&logoSize=auto&label=CHANGELOG&color=%23617ab1",alt:"Changelog",className:"ladle-markdown"})})]}),`
`,a.jsx(e.hr,{className:"ladle-markdown"}),`
`,a.jsx(e.h2,{className:"ladle-markdown",children:"Dynamic import example with Next.js"}),`
`,a.jsx(e.pre,{className:"ladle-markdown",children:a.jsx(e.code,{className:"language-tsx ladle-markdown",children:`'use client' // (REQUIRED)
import dynamic from 'next/dynamic'
import '@clxrity/react-audio/dist/index.css' // (optional) import the styles

const Player = dynamic(
    () => import('@clxrity/react-audio').then((mod) => mod.Player),
    { ssr: false }
)

export default function Component() {
    const track = {
        src: '/loop.wav', // (REQUIRED) audio file path (public/loop.wav)
        title: 'Loop',
        artist: {
            name: 'Clxrity',
            url: 'https://wav.clxrity.xyz',
        },
    }

    return <Player track={track} showTrackInfo={true} />
}
`})})]})}function r(l={}){const{wrapper:e}={...s(),...l.components};return e?a.jsx(e,{...l,children:a.jsx(o,{...l})}):o(l)}r.storyName="Readme";typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{r as MDXContent};
