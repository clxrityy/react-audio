import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as l}from"./index-RYns6xqu.js";import{d as _}from"./styled-components.browser.esm-DiIrWxKB.js";import{r as Z}from"./resizeCanvas-EZ0GBuCB.js";import{B as ee,f as A}from"./formatDuration-jRCyCiY0.js";import{T as re,V as te,P as ae}from"./index-P45c9s2l.js";import{C as I,T as ne,L as se}from"./elements-CJf5SMqm.js";function oe({analyzer:e,canvas:a,canvasCtx:r,dataArray:n,bufferLength:i,color:f}){e.getByteFrequencyData(n),r.fillStyle=f;const d=a.height,c=Math.ceil(a.width/i)*2.5;let h,m=0;for(let p=0;p<i;p++)h=n[p]/255*d,r.fillRect(m,d-h,c,h),m+=c+1}function S({analyzerdData:e,color:a,size:r,...n}){const{analyzer:i,bufferLength:f,dataArray:d}=e,c=l.useRef(null),h=(p,s,x)=>{const g=c.current;if(!g||!p)return;const w=g.getContext("2d"),u=()=>{requestAnimationFrame(u),g.width=g.width,oe({analyzer:p,canvas:g,canvasCtx:w,dataArray:x,bufferLength:s,color:a})};u()};function m(){Z(c.current)}return l.useEffect(()=>(h(i,f,d),r||window.addEventListener("resize",m),()=>{window.removeEventListener("resize",m)}),[d,i,f,a]),t.jsx("canvas",{ref:c,width:(r==null?void 0:r.width)||1e3,height:(r==null?void 0:r.height)||1e3,style:{position:"absolute",color:a,...n.style},...n})}try{S.displayName="Canvas",S.__docgenInfo={description:"",displayName:"Canvas",props:{analyzerdData:{defaultValue:null,description:"",name:"analyzerdData",required:!0,type:{name:"AnalyzerData"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"{ width: number; height: number; }"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLCanvasElement | null) => void) | RefObject<HTMLCanvasElement> | null"}}}}}catch{}const ie=_.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 300px;
    position: absolute;
    border-radius: 0.5rem;
    background-color: transparent;
`,le=_.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0.25rem;
    align-items: center;
    justify-items: center;
    position: relative;
    width: 100%;
    max-width: 300px;
    margin-left: auto;
`,ue=_.div`
    display: flex;
    flex-direction: column;
    justify-content: evenly;
    align-items: center;
    gap: 0.25rem;
    margin-left: auto;
    margin-right: auto;
`,ce=_.div`
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    align-items: center;
    justify-content: center;

    @media (max-width: 420px) {
        flex-direction: column;
    }
`;function L({audioElement:e,track:a,showTrackInfo:r,btnStyleProps:n,autoplay:i,...f}){const[d,c]=l.useState(0),[h,m]=l.useState(!1),[p,s]=l.useState(!1),[x,g]=l.useState(.2),[w,u]=l.useState(0),[j,T]=l.useState(0),b=A(d),y=A(w),V=o=>{e.current&&(e.current.volume=o,g(o))},F=()=>{e.current&&(e.current.volume!==0?e.current.volume=0:e.current.volume=1)},G=async()=>{if(e.current)if(p)e.current.pause(),s(!1);else try{await e.current.play(),s(!0)}catch(o){console.error(o)}},$=o=>{o.currentTarget.volume=x,m(!0)},k=o=>{const v=o.currentTarget;if(v.duration>0){for(let C=0;C<v.buffered.length;C++)if(v.buffered.start(v.buffered.length-1-C)<v.currentTime){T(v.buffered.end(v.buffered.length-1-C));break}}},J=o=>{u(o.currentTarget.currentTime),k(o)},K=o=>(g(o.currentTarget.volume),o.currentTarget.volume),Q=()=>{s(!0)},X=()=>{s(!1)},Y=o=>{c(o.currentTarget.duration)};return l.useEffect(()=>{e.current&&(e.current.src=a.src,m(!0))},[a.src]),t.jsxs(ie,{...f,children:[t.jsx("audio",{ref:e,onCanPlay:$,onTimeUpdate:J,onVolumeChange:K,onPlaying:Q,onPause:X,onDurationChange:Y,onProgress:k,crossOrigin:"anonymous",autoPlay:i,children:t.jsx("source",{src:a.src,type:"audio/mpeg"})}),t.jsxs(le,{children:[r&&t.jsx(re,{track:a}),t.jsxs(ue,{children:[t.jsxs(ce,{children:[t.jsx(ee,{theme:n==null?void 0:n.theme,size:n==null?void 0:n.size,color:n==null?void 0:n.color,disabled:!h,onClick:G,children:p?t.jsx(I.icons.pause,{}):t.jsx(I.icons.play,{})}),t.jsx(te,{handleMute:F,volume:x,volumeChange:V})]}),t.jsxs(ne,{children:[t.jsx("span",{children:y}),t.jsx("span",{children:"/"}),t.jsx("span",{children:b})]}),j?t.jsx(ae,{onChange:o=>u(o.target.valueAsNumber),duration:d,current_progress:w,buffered:j}):t.jsx(se,{})]})]})]})}try{L.displayName="Player",L.__docgenInfo={description:"",displayName:"Player",props:{audioElement:{defaultValue:null,description:"",name:"audioElement",required:!0,type:{name:"RefObject<HTMLAudioElement>"}},track:{defaultValue:null,description:"",name:"track",required:!0,type:{name:"Track"}},showTrackInfo:{defaultValue:null,description:"",name:"showTrackInfo",required:!1,type:{name:"boolean"}},btnStyleProps:{defaultValue:null,description:"",name:"btnStyleProps",required:!1,type:{name:"ButtonProps"}},autoplay:{defaultValue:null,description:"",name:"autoplay",required:!1,type:{name:"boolean"}}}}}catch{}function de(e,a,r,n){if(!e||!a||r.current)return;const i=a.createAnalyser();i.fftSize=n||2048;const f=i.frequencyBinCount,d=new Uint8Array(f);return r.current=a.createMediaElementSource(e),r.current.connect(i),r.current.connect(a.destination),i.connect(a.destination),r.current.addEventListener("ended",()=>{var c;(c=r.current)==null||c.disconnect(),i.disconnect()}),{analyzer:i,bufferLength:f,dataArray:d}}const fe=_.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 300px;
    padding: 0.5rem;
    position: relative;
    border-radius: 0.5rem;
    background-color: transparent;
`;function P({track:e,color:a,size:r,canvasStyles:n,showTrackInfo:i,btnStyleProps:f,autoplay:d,fftsize:c,...h}){const[m,p]=l.useState(),[s,x]=l.useState(),[g,w]=l.useState(),u=l.useRef(null),j=l.useRef();l.useEffect(()=>{var y;e.src&&(w(e.src),(y=u.current)==null||y.load())},[e.src,u]);const T=()=>{s||x(new AudioContext),(s==null?void 0:s.state)==="suspended"&&s.resume()},b=()=>{j.current||u.current&&s&&p(de(u.current,s,j,c))};return l.useEffect(()=>{const y=u.current;return y&&(u.current.src=g,y.addEventListener("play",b),b()),window.addEventListener("click",T),()=>{var V;(V=u.current)==null||V.removeEventListener("play",b),window.removeEventListener("click",T),s==null||s.close()}},[s,u,g]),t.jsxs(fe,{...h,children:[t.jsx(L,{autoplay:d,btnStyleProps:f,audioElement:u,track:{src:e.src},showTrackInfo:i}),m&&t.jsx(S,{analyzerdData:m,color:a||"red",size:r,style:n})]})}try{P.displayName="Waveform",P.__docgenInfo={description:"",displayName:"Waveform",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"{ width: number; height: number; }"}},canvasStyles:{defaultValue:null,description:"",name:"canvasStyles",required:!1,type:{name:"CSSProperties"}},showTrackInfo:{defaultValue:null,description:"",name:"showTrackInfo",required:!1,type:{name:"boolean"}},fftsize:{defaultValue:null,description:"",name:"fftsize",required:!1,type:{name:"enum",value:[{value:"32"},{value:"64"},{value:"128"},{value:"256"},{value:"512"},{value:"1024"},{value:"2048"},{value:"4096"},{value:"8192"},{value:"16384"},{value:"32768"}]}},track:{defaultValue:null,description:"",name:"track",required:!0,type:{name:"Track"}},btnStyleProps:{defaultValue:null,description:"",name:"btnStyleProps",required:!1,type:{name:"ButtonProps"}},autoplay:{defaultValue:null,description:"",name:"autoplay",required:!1,type:{name:"boolean"}}}}}catch{}const je={title:"components/Waveform",component:P,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{track:{control:"object"},color:{control:"color"},size:{width:{control:"number"},height:{control:"number"}},canvasStyles:{control:"object"},showTrackInfo:{control:"boolean"}},args:{track:{src:"./example.wav",title:"SoundHelix Song 1",author:{name:"SoundHelix",url:"https://www.soundhelix.com"}}}},q={args:{color:"red"},tags:["autodocs"]},D={args:{size:{width:320,height:160},color:"blue"},tags:["autodocs"]},z={args:{size:{width:520,height:240},color:"green"},tags:["autodocs"]};var E,B,R;q.parameters={...q.parameters,docs:{...(E=q.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    color: "red"
  },
  tags: ['autodocs']
}`,...(R=(B=q.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var N,H,O;D.parameters={...D.parameters,docs:{...(N=D.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: {
      width: 320,
      height: 160
    },
    color: "blue"
  },
  tags: ['autodocs']
}`,...(O=(H=D.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var M,W,U;z.parameters={...z.parameters,docs:{...(M=z.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    size: {
      width: 520,
      height: 240
    },
    color: "green"
  },
  tags: ['autodocs']
}`,...(U=(W=z.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};const be=["Default","Small","Large"];export{q as Default,z as Large,D as Small,be as __namedExportsOrder,je as default};
