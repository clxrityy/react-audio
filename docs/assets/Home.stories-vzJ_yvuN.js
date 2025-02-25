import{u as s,b as e}from"./index-gzyuxFYO.js";import{M as n}from"./exports-DkUcVNFq.js";import"./dialog-C2LGh85s.js";function o(l){const a={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...l.components};return e.jsxs(e.Fragment,{children:[e.jsxs(a.h1,{className:"ladle-markdown",children:["@clxrity/react-audio ",e.jsx(a.img,{src:"https://clxrityy.github.io/react-audio/apple-touch-icon.png",width:"32px",height:"32px",style:{display:"inline-block"},className:"ladle-markdown"})]}),`
`,e.jsx(a.h4,{className:"ladle-markdown",children:"A react audio player component library."}),`
`,e.jsxs(a.p,{className:"ladle-markdown",children:[e.jsx(a.a,{href:"https://github.com/clxrityy/react-audio/blob/main/LICENSE",className:"ladle-markdown",children:e.jsx(a.img,{src:"https://img.shields.io/npm/l/%40clxrity%2Freact-audio?style=for-the-badge&label=LICENSE",alt:"MIT license",className:"ladle-markdown"})})," ",e.jsx(a.a,{href:"https://www.npmjs.org/package/@clxrity/react-audio",className:"ladle-markdown",children:e.jsx(a.img,{src:"https://img.shields.io/npm/dm/%40clxrity%2Freact-audio?style=for-the-badge&logo=npm&logoColor=%23CB3837&logoSize=auto&label=DOWNLOADS",alt:"npm module downloads",className:"ladle-markdown"})})]}),`
`,e.jsxs(a.p,{className:"ladle-markdown",children:[e.jsx(a.a,{href:"https://www.npmjs.org/package/@clxrity/react-audio",className:"ladle-markdown",children:e.jsx(a.img,{src:"https://img.shields.io/npm/v/%40clxrity%2Freact-audio?style=for-the-badge&logo=npm&logoColor=%23CB3837&logoSize=auto&label=NPM",alt:"view on npm",className:"ladle-markdown"})})," ",e.jsx(a.a,{href:"https://github.com/clxrityy/react-audio/actions/workflows/main.yml",className:"ladle-markdown",children:e.jsx(a.img,{src:"https://img.shields.io/github/actions/workflow/status/clxrityy/react-audio/.github%2Fworkflows%2Fmain.yml?branch=main&event=push&style=for-the-badge&logo=github&logoColor=%23181717&logoSize=auto&label=BUILD&color=%232dba4e",alt:"BUILD",className:"ladle-markdown"})})]}),`
`,e.jsx(a.hr,{className:"ladle-markdown"}),`
`,e.jsx(a.p,{className:"ladle-markdown",children:e.jsx(a.a,{href:"https://github.com/clxrityy/react-audio/blob/main/.nvmrc",className:"ladle-markdown",children:e.jsx(a.img,{src:"https://img.shields.io/node/v-lts/%40clxrity%2Freact-audio?style=for-the-badge&logo=nodedotjs&logoColor=%235FA04E&logoSize=auto&label=NODE",alt:"Node version",className:"ladle-markdown"})})}),`
`,e.jsx(a.h4,{className:"ladle-markdown",children:"Peer Dependencies:"}),`
`,e.jsxs(a.p,{className:"ladle-markdown",children:[e.jsx(a.a,{href:"https://www.npmjs.com/package/react",className:"ladle-markdown",children:e.jsx(a.img,{src:"https://img.shields.io/npm/dependency-version/%40clxrity%2Freact-audio/peer/react?style=for-the-badge&logo=react&logoColor=%2361DAFB&logoSize=auto&label=react",alt:"react",className:"ladle-markdown"})})," ",e.jsx(a.a,{href:"https://www.npmjs.com/package/react-dom",className:"ladle-markdown",children:e.jsx(a.img,{src:"https://img.shields.io/npm/dependency-version/%40clxrity%2Freact-audio/peer/react-dom?style=for-the-badge&logo=react&logoColor=%2361DAFB&logoSize=auto&label=react-dom",alt:"react-dom",className:"ladle-markdown"})})]}),`
`,e.jsx(a.pre,{className:"ladle-markdown",children:e.jsx(a.code,{className:"language-zsh ladle-markdown",children:`npm i @clxrity/react-audio
`})}),`
`,e.jsx(a.pre,{className:"ladle-markdown",children:e.jsx(a.code,{className:"language-zsh ladle-markdown",children:`pnpm add @clxrity/react-audio
`})}),`
`,e.jsx(a.pre,{className:"ladle-markdown",children:e.jsx(a.code,{className:"language-zsh ladle-markdown",children:`yarn add @clxrity/react-audio
`})}),`
`,e.jsx(a.hr,{className:"ladle-markdown"}),`
`,e.jsxs(a.p,{className:"ladle-markdown",children:[e.jsxs(a.a,{href:"https://clxrityy.github.io/react-audio/?story=home--readme",className:"ladle-markdown",children:[e.jsx(a.img,{src:"https://img.shields.io/badge/clxrityy.github.io%2Freact-audio?style=for-the-badge&logo=readme&logoColor=%23617ab1&logoSize=auto&label=DOCS&color=%23617ab1",alt:"Documentation",className:"ladle-markdown"}),`
`]}),`
`,e.jsx(a.a,{href:"https://clxrityy.github.io/react-audio/?story=documentation--changelog",className:"ladle-markdown",children:e.jsx(a.img,{src:"https://img.shields.io/badge/clxrityy.github.io%2Freact-audio%2F%3Fstory%3Dchangelog--readme?style=for-the-badge&logo=stackexchange&logoColor=%23617ab1&logoSize=auto&label=CHANGELOG&color=%23617ab1",alt:"Changelog",className:"ladle-markdown"})})]}),`
`,e.jsx(a.hr,{className:"ladle-markdown"}),`
`,e.jsx(a.h2,{className:"ladle-markdown",children:"Dynamic import example with Next.js"}),`
`,e.jsx(a.pre,{className:"ladle-markdown",children:e.jsx(a.code,{className:"language-tsx ladle-markdown",children:`'use client' // (REQUIRED)
import dynamic from 'next/dynamic'
import '@clxrity/react-audio/index.css' // (optional) import the styles

/**
 * You can also import the CSS within your \`globals.css\` or \`index.css\` file like so:
 * \`\`\`css
 * @import "@clxrity/react-audio/index.css";
 * \`\`\`
 */

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
`})}),`
`,e.jsx(a.hr,{className:"ladle-markdown"}),`
`,e.jsxs(a.blockquote,{className:"ladle-markdown",children:[`
`,e.jsxs(a.ul,{className:"ladle-markdown",children:[`
`,e.jsxs(a.li,{className:"ladle-markdown",children:[e.jsx(a.strong,{className:"ladle-markdown",children:"Note:"})," You may use external URLs for the ",e.jsx(a.strong,{className:"ladle-markdown",children:"src"})," property for components such as ",e.jsx(a.a,{href:"https://clxrityy.github.io/react-audio/??story=player--default",className:"ladle-markdown",children:e.jsx(a.code,{className:"ladle-markdown",children:"<Player />"})})," and ",e.jsx(a.a,{href:"https://clxrityy.github.io/react-audio/?story=shuffleplayer--default",className:"ladle-markdown",children:e.jsx(a.code,{className:"ladle-markdown",children:"<ShufflePlayer />"})})," components and experience no CORS issues, as the audio files are fetched and played by the client-side."]}),`
`,e.jsxs(a.li,{className:"ladle-markdown",children:["However, for components such as ",e.jsx(a.a,{href:"https://clxrityy.github.io/react-audio/?story=waveform--default",className:"ladle-markdown",children:e.jsx(a.code,{className:"ladle-markdown",children:"<Waveform />"})})," and ",e.jsx(a.a,{href:"https://clxrityy.github.io/react-audio/?story=spectrogram--default",className:"ladle-markdown",children:e.jsx(a.code,{className:"ladle-markdown",children:"<Spectrogram />"})})," components, the CORS origins must be set correctly on the server-side to avoid CORS issues. This is only applicable when using external URLs for the ",e.jsx(a.strong,{className:"ladle-markdown",children:"src"})," property."]}),`
`,e.jsxs(a.li,{className:"ladle-markdown",children:["For example, if using files served from firebase storage, set the CORS origins to ",e.jsx(a.strong,{className:"ladle-markdown",children:e.jsx(a.code,{className:"ladle-markdown",children:"*"})}),` to allow all origins to access the files.
`,e.jsxs(a.ul,{className:"ladle-markdown",children:[`
`,e.jsx(a.li,{className:"ladle-markdown",children:e.jsx(a.a,{href:"https://firebase.google.com/docs/storage/web/download-files#cors_configuration",className:"ladle-markdown",children:"Firebase CORS Configuration"})}),`
`]}),`
`]}),`
`]}),`
`]})]})}function t(l={}){const{wrapper:a}={...s(),...l.components};return a?e.jsx(a,{...l,children:e.jsx(o,{...l})}):o(l)}function r(l){return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"Home/Readme"}),`
`,e.jsx(t,{})]})}function d(l={}){const{wrapper:a}={...s(),...l.components};return a?e.jsx(a,{...l,children:e.jsx(r,{...l})}):r()}const h={title:"Home"};d.storyName="Readme";typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{d as MDXContent,h as default};
