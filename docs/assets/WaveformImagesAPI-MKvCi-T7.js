import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as o}from"./index-CcnH5Kt0.js";import"./index-RYns6xqu.js";function r(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{id:"waveform-images-api-experimental",children:"Waveform Images API (Experimental)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Install with optional dependencies to use the waveform image API generation.",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.npmjs.com/package/fluent-ffmpeg",rel:"nofollow",children:e.jsx(n.code,{children:"fluent-ffmpeg"})})," - Required for audio processing."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.npmjs.com/package/shelljs",rel:"nofollow",children:e.jsx(n.code,{children:"shelljs"})})," - Required for shell commands."]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm i @clxrity/react-audio --save-optional
`})}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Note: Works only with the ",e.jsx(n.a,{href:"https://nextjs.org/docs/app",rel:"nofollow",children:"Nextjs App Router"})," for generating the API route."]}),`
`]}),`
`,e.jsxs(n.p,{children:["You can generate an image of an audio file's waveform by using the ",e.jsx(n.code,{children:"setup-waveform-api"})," script."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npx setup-waveform-api
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["This will create a new API route at ",e.jsx(n.code,{children:"app/api/generate-waveform/route.ts"}),":"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import fluentFfmpeg from 'fluent-ffmpeg';
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
            resolve(NextResponse.json({ message: \`Waveform image at \${waveformPath}\` }, { status: 200 }));
        })
        .on('error', (err) => {
            reject(NextResponse.json({ error: err }, { status: 500 }));
        })
        .run();
    });

    return promise;
}
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"You can then use this route to generate the waveform image of an audio file:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`/**
 * In this example, the audio file is within the public/ directory.
 * \`/public/audio.wav\` = \`http://localhost:3000/audio.wav\`
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/static-assets
 */
await fetch('http://localhost:3000/api/generate-waveform?url=http://localhost/audio.wav');
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["This will generate a waveform image at ",e.jsx(n.code,{children:"public/waveform.png"}),":"]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.img,{src:"/waveform.png",alt:"Waveform Image"})})]})}function l(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{l as default};
