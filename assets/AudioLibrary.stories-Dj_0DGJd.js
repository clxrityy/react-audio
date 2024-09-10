import{j as r}from"./jsx-runtime-DEdD30eg.js";import{r as c}from"./index-RYns6xqu.js";import{d as l}from"./styled-components.browser.esm-DIbKh39u.js";import{B as v,f as L}from"./formatDuration-PdJL874n.js";import{P as re,C as m,T as ne,L as ae}from"./elements-D4M0jGhh.js";const te=l.div`
    position: relative;
    height: 4px;
    display: flex;
    align-items: center;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.1);
`;function w({duration:e,currentProgress:a,buffered:s,btnStyleProps:o,...u}){const p=isNaN(a/e)?0:a/e,n=isNaN(s/e)?0:s/e,x={"--progress-width":p||0,"--buffered-width":n||0};return r.jsx(te,{duration:e,currentProgress:a,buffered:s,...u,children:r.jsx(re,{color:o==null?void 0:o.color,type:"range",name:"progress",style:x,min:0,max:e,value:a&&a})})}try{w.displayName="ProgressBar",w.__docgenInfo={description:"",displayName:"ProgressBar",props:{duration:{defaultValue:null,description:"",name:"duration",required:!0,type:{name:"number"}},currentProgress:{defaultValue:null,description:"",name:"currentProgress",required:!0,type:{name:"number"}},buffered:{defaultValue:null,description:"",name:"buffered",required:!0,type:{name:"number"}},btnStyleProps:{defaultValue:null,description:"",name:"btnStyleProps",required:!1,type:{name:"ButtonProps"}}}}}catch{}function C({volume:e,volumeChange:a,...s}){return r.jsx("input",{"aria-label":"Volume",type:"range",name:"volume",min:0,step:.05,max:1,value:e,onChange:o=>a(o.currentTarget.valueAsNumber),style:{width:"70px",margin:0,height:"12px",borderRadius:"30px",accentColor:m.colors.primary,appearance:"none",cursor:"pointer",backgroundColor:"gray"},...s})}try{C.displayName="VolumeInput",C.__docgenInfo={description:"",displayName:"VolumeInput",props:{volume:{defaultValue:null,description:"",name:"volume",required:!0,type:{name:"number"}},volumeChange:{defaultValue:null,description:"",name:"volumeChange",required:!0,type:{name:"(volume: number) => void"}}}}}catch{}const ie=l.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    align-items: center;
    justify-items: stretch;
`,le=l.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    align-items: center;
    justify-items: center;
    position: relative;
    width: 100%;
    max-width: 800px;
`,oe=l.div`
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    justify-content: center;
    align-items: center;
`,se=l.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`,ce=l.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    border-radius: 1rem;
    width: 100%;
    text-align: center;
    white-space: nowrap;
`,ue=l.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`,de=l.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    flex-direction: row;
`,me=l.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    flex-direction: row;
    padding: 0.5rem;

    @media only screen and (min-width: 1000px) {
        flex-direction: column;
        align-items: start;
    }
`;function pe({currentTrack:e,trackIndex:a,trackCount:s,onNext:o,onPrevious:u,autoplay:p,btnStyleProps:n,...x}){const[d,g]=c.useState(0),[V,z]=c.useState(!1),[N,h]=c.useState(!1),[y,q]=c.useState(.2),[E,D]=c.useState(0),[I,W]=c.useState(0),i=c.useRef(null),$=L(d),J=L(E),H=t=>{i.current&&(i.current.volume=t,q(t))},F=()=>{i.current&&(i.current.volume!==0?i.current.volume=0:i.current.volume=1)},G=()=>{i.current&&(N?(i.current.pause(),h(!1)):(i.current.play(),h(!0)))},K=t=>{t.currentTarget.volume=y,z(!0)},Q=t=>{D(t.currentTarget.currentTime),T(t)},X=t=>{q(t.currentTarget.volume)},Y=()=>{h(!0)},Z=()=>{h(!1)},P=t=>{g(t.currentTarget.duration)},S=t=>{i.current&&(i.current.currentTime=t.currentTarget.valueAsNumber,D(t.currentTarget.valueAsNumber))},T=t=>{const f=t.currentTarget;if(f.duration>0){for(let j=0;j<f.buffered.length;j++)if(f.buffered.start(f.buffered.length-1-j)<f.currentTime){const ee=f.buffered.end(f.buffered.length-1-j);W(ee);break}}};return c.useEffect(()=>{i.current.src=e.src,z(!0)},[i,e,a]),r.jsxs(ie,{...x,children:[r.jsx("audio",{ref:i,preload:"metadata",onDurationChange:P,onCanPlay:K,onPlaying:Y,onPause:Z,onEnded:o,onTimeUpdate:Q,onProgress:T,onVolumeChange:t=>X(t),autoPlay:p,children:r.jsx("source",{src:e.src,type:"audio/mpeg"})}),V?r.jsxs(le,{children:[r.jsxs(ce,{children:[r.jsx("p",{style:{fontWeight:"bold",fontSize:"1rem",backgroundColor:"rgba(0, 0, 0, 0.1)",padding:"0.25rem 0.5rem",borderRadius:"0.5rem"},children:(e==null?void 0:e.title)??"Select a track"}),r.jsx("p",{style:{fontSize:"0.8em"},children:(e==null?void 0:e.author)&&r.jsxs("span",{children:["by"," ",r.jsx("a",{href:e.author.url,rel:"noreferrer",style:{cursor:"pointer"},children:e.author.name})]})})]}),r.jsxs(se,{children:[r.jsxs(oe,{children:[r.jsx(v,{color:n==null?void 0:n.color,theme:n==null?void 0:n.theme,size:n==null?void 0:n.size,"aria-label":"Previous",disabled:a===0,onClick:u,children:r.jsx(m.icons.backward,{size:20})}),r.jsx(v,{disabled:!V,onClick:G,theme:n==null?void 0:n.theme,size:n==null?void 0:n.size,color:n==null?void 0:n.color,children:N?r.jsx(m.icons.pause,{size:20}):r.jsx(m.icons.play,{size:20})}),r.jsx(v,{color:n==null?void 0:n.color,theme:n==null?void 0:n.theme,size:n==null?void 0:n.size,"aria-label":"Next",disabled:a===s-1,onClick:o,children:r.jsx(m.icons.forward,{size:20})})]}),r.jsxs(ue,{children:[r.jsxs(de,{children:[r.jsx(C,{volume:y,volumeChange:H}),r.jsx(v,{theme:n==null?void 0:n.theme,size:n==null?void 0:n.size,color:n==null?void 0:n.color,onClick:F,"aria-label":y===0?"Unmute":"Mute",children:y===0?r.jsx(m.icons.volumeOff,{size:20}):r.jsx(m.icons.volumeUp,{size:20})})]}),r.jsxs(me,{children:[I?r.jsx(w,{duration:d,currentProgress:E,buffered:I,onChange:S}):null,r.jsxs(ne,{children:[r.jsx("span",{children:J}),r.jsx("span",{children:"/"}),r.jsx("span",{children:$})]})]})]})]})]}):r.jsx(ae,{})]})}try{Player.displayName="Player",Player.__docgenInfo={description:"",displayName:"Player",props:{currentTrack:{defaultValue:null,description:"",name:"currentTrack",required:!1,type:{name:"Track"}},trackIndex:{defaultValue:null,description:"",name:"trackIndex",required:!0,type:{name:"number"}},trackCount:{defaultValue:null,description:"",name:"trackCount",required:!0,type:{name:"number"}},onNext:{defaultValue:null,description:"",name:"onNext",required:!0,type:{name:"() => void"}},onPrevious:{defaultValue:null,description:"",name:"onPrevious",required:!0,type:{name:"() => void"}},autoplay:{defaultValue:null,description:"",name:"autoplay",required:!1,type:{name:"boolean"}},btnStyleProps:{defaultValue:null,description:"",name:"btnStyleProps",required:!1,type:{name:"ButtonProps"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}const fe=l.li`
    display: flex;
    align-items: center;
    padding: 0.5rem;
    z-index: 1;
    opacity: ${({selected:e})=>e?1:.7};
    border-radius: 0.5rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    background-color: ${({selected:e,color:a})=>e?a:"transparent"};
    margin: 0.5rem 0;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
        opacity: 1;
        background-color: ${({selected:e,color:a})=>e?a:"rgba(0, 0, 0, 0.1)"};
    }
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-self: center;
`,ge=l.span`
    flex: 1;
    text-align: center;
    font-size: 0.9em;
    font-weight: 600;
    opacity: 0.9;
    z-index: 2;
`;function xe({track:e,selected:a,trackNumberLabel:s,color:o,...u}){return r.jsxs(fe,{selected:a,color:o,...u,onClick:u.onClick,children:[e.thumbnail?r.jsx("img",{src:e.thumbnail,alt:e.title,style:{width:25,height:25,borderRadius:"50%"}}):null,r.jsx(ge,{children:e.title}),r.jsx("span",{children:a?r.jsx(m.icons.dot,{size:24}):null})]})}try{TrackItem.displayName="TrackItem",TrackItem.__docgenInfo={description:"",displayName:"TrackItem",props:{track:{defaultValue:null,description:"",name:"track",required:!0,type:{name:"Track"}},selected:{defaultValue:null,description:"",name:"selected",required:!0,type:{name:"boolean"}},trackNumberLabel:{defaultValue:null,description:"",name:"trackNumberLabel",required:!0,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}}}}}catch{}const he=l.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    align-items: center;
    justify-items: center;
    position: relative;
    width: 100%;
    max-width: 800px;
    border-radius: 0.5rem;
    background-color: ${({styles:e})=>(e==null?void 0:e.backgroundColor)||"transparent"};
    border: ${({styles:e})=>(e==null?void 0:e.border)||"1px solid rgba(240, 240, 240, 0.4)"};
    backdrop-filter: blur(10px);
`,ye=l.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0rem;
    align-self: center;
    justify-self: center;
    min-width: 100%;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
`;function k({tracks:e,styles:a,autoplay:s,btnStyleProps:o,...u}){const[p,n]=c.useState(0),x=e[p];return r.jsxs(he,{styles:a,...u,children:[r.jsx(ye,{children:e.map((d,g)=>r.jsx(xe,{onClick:()=>n(g),selected:g===p,track:d,trackNumberLabel:g.toString()},g))}),r.jsx(pe,{btnStyleProps:o,autoplay:s,currentTrack:x,onNext:()=>n(d=>d+1),onPrevious:()=>n(d=>d-1),trackCount:e.length,trackIndex:p})]})}try{k.displayName="AudioLibrary",k.__docgenInfo={description:"",displayName:"AudioLibrary",props:{tracks:{defaultValue:null,description:"",name:"tracks",required:!0,type:{name:"Track[]"}},styles:{defaultValue:null,description:"",name:"styles",required:!1,type:{name:"LibraryStyles"}},btnStyleProps:{defaultValue:null,description:"",name:"btnStyleProps",required:!1,type:{name:"ButtonProps"}},autoplay:{defaultValue:null,description:"",name:"autoplay",required:!1,type:{name:"boolean"}}}}}catch{}const ke={title:"components/AudioLibrary",component:k,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{tracks:[{control:"object"}],btnStyleProps:{control:"object"},autoplay:{control:"boolean"},styles:{control:"object"}}},b={args:{tracks:[{title:"Example",src:"./example.wav",author:{name:"clxrity",url:"https://clxrity.xyz"}},{title:"Example 2",src:"./example.wav",author:{name:"MJ Anglin",url:"https://mjanglin.com"}}]}},_={args:{tracks:[{title:"Example",src:"./example.wav",author:{name:"clxrity",url:"https://clxrity.xyz"}},{title:"Example 2",src:"./example.wav",author:{name:"MJ Anglin",url:"https://mjanglin.com"}}],styles:{backgroundColor:"#ff0bbb99",textColor:"white",boxShadow:"0 0 10px rgba(0, 0, 0, 0.2)",theme:"dark",border:"1px solid rgba(0, 0, 0, 0.2)"},btnStyleProps:{color:"#00ff9988",theme:"light",size:"lg"}}};var B,A,M;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    tracks: [{
      title: "Example",
      src: "./example.wav",
      author: {
        name: "clxrity",
        url: "https://clxrity.xyz"
      }
    }, {
      title: "Example 2",
      src: "./example.wav",
      author: {
        name: "MJ Anglin",
        url: "https://mjanglin.com"
      }
    }]
  }
}`,...(M=(A=b.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var R,O,U;_.parameters={..._.parameters,docs:{...(R=_.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    tracks: [{
      title: "Example",
      src: "./example.wav",
      author: {
        name: "clxrity",
        url: "https://clxrity.xyz"
      }
    }, {
      title: "Example 2",
      src: "./example.wav",
      author: {
        name: "MJ Anglin",
        url: "https://mjanglin.com"
      }
    }],
    styles: {
      backgroundColor: "#ff0bbb99",
      textColor: "white",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
      theme: "dark",
      border: "1px solid rgba(0, 0, 0, 0.2)"
    },
    btnStyleProps: {
      color: "#00ff9988",
      theme: "light",
      size: "lg"
    }
  }
}`,...(U=(O=_.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const Ve=["Default","WithStyles"];export{b as Default,_ as WithStyles,Ve as __namedExportsOrder,ke as default};
