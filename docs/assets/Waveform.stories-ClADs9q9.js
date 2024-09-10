import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as i}from"./index-RYns6xqu.js";import{d as _}from"./styled-components.browser.esm-DIbKh39u.js";import{r as Z}from"./resizeCanvas-EZ0GBuCB.js";import{B as ee,f as L}from"./formatDuration-PdJL874n.js";import{T as re,V as te,P as ae}from"./index-ffC9LVGZ.js";import{C as I,T as ne,L as se}from"./elements-D4M0jGhh.js";function oe({analyzer:e,canvas:a,canvasCtx:r,dataArray:n,bufferLength:l,color:f}){e.getByteFrequencyData(n),r.fillStyle=f;const d=a.height,c=Math.ceil(a.width/l)*2.5;let h,g=0;for(let m=0;m<l;m++)h=n[m]/255*d,r.fillRect(g,d-h,c,h),g+=c+1}function z({analyzerdData:e,color:a,size:r,...n}){const{analyzer:l,bufferLength:f,dataArray:d}=e,c=i.useRef(null),h=(m,s,x)=>{const p=c.current;if(!p||!m)return;const w=p.getContext("2d"),u=()=>{requestAnimationFrame(u),p.width=p.width,oe({analyzer:m,canvas:p,canvasCtx:w,dataArray:x,bufferLength:s,color:a})};u()};function g(){Z(c.current)}return i.useEffect(()=>{h(l,f,d),r||g()},[d,l,f,a]),t.jsx("canvas",{ref:c,width:(r==null?void 0:r.width)||1e3,height:(r==null?void 0:r.height)||1e3,style:{position:"absolute",color:a,...n.style},...n})}try{z.displayName="Canvas",z.__docgenInfo={description:"",displayName:"Canvas",props:{analyzerdData:{defaultValue:null,description:"",name:"analyzerdData",required:!0,type:{name:"AnalyzerData"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"{ width: number; height: number; }"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLCanvasElement | null) => void) | RefObject<HTMLCanvasElement> | null"}}}}}catch{}const le=_.div`
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
`,ie=_.div`
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
`;function P({audioElement:e,track:a,showTrackInfo:r,btnStyleProps:n,autoplay:l,...f}){const[d,c]=i.useState(0),[h,g]=i.useState(!1),[m,s]=i.useState(!1),[x,p]=i.useState(.2),[w,u]=i.useState(0),[j,T]=i.useState(0),b=L(d),y=L(w),V=o=>{e.current&&(e.current.volume=o,p(o))},F=()=>{e.current&&(e.current.volume!==0?e.current.volume=0:e.current.volume=1)},G=async()=>{if(e.current)if(m)e.current.pause(),s(!1);else try{await e.current.play(),s(!0)}catch(o){console.error(o)}},$=o=>{o.currentTarget.volume=x,g(!0)},A=o=>{const v=o.currentTarget;if(v.duration>0){for(let C=0;C<v.buffered.length;C++)if(v.buffered.start(v.buffered.length-1-C)<v.currentTime){T(v.buffered.end(v.buffered.length-1-C));break}}},J=o=>{u(o.currentTarget.currentTime),A(o)},K=o=>(p(o.currentTarget.volume),o.currentTarget.volume),Q=()=>{s(!0)},X=()=>{s(!1)},Y=o=>{c(o.currentTarget.duration)};return i.useEffect(()=>{e.current&&(e.current.src=a.src,g(!0))},[a.src]),t.jsxs(le,{...f,children:[t.jsx("audio",{ref:e,onCanPlay:$,onTimeUpdate:J,onVolumeChange:K,onPlaying:Q,onPause:X,onDurationChange:Y,onProgress:A,crossOrigin:"anonymous",autoPlay:l,children:t.jsx("source",{src:a.src,type:"audio/mpeg"})}),t.jsxs(ie,{children:[r&&t.jsx(re,{track:a}),t.jsxs(ue,{children:[t.jsxs(ce,{children:[t.jsx(ee,{theme:n==null?void 0:n.theme,size:n==null?void 0:n.size,color:n==null?void 0:n.color,disabled:!h,onClick:G,children:m?t.jsx(I.icons.pause,{}):t.jsx(I.icons.play,{})}),t.jsx(te,{handleMute:F,volume:x,volumeChange:V})]}),t.jsxs(ne,{children:[t.jsx("span",{children:y}),t.jsx("span",{children:"/"}),t.jsx("span",{children:b})]}),j?t.jsx(ae,{onChange:o=>u(o.target.valueAsNumber),duration:d,current_progress:w,buffered:j}):t.jsx(se,{})]})]})]})}try{P.displayName="Player",P.__docgenInfo={description:"",displayName:"Player",props:{audioElement:{defaultValue:null,description:"",name:"audioElement",required:!0,type:{name:"RefObject<HTMLAudioElement>"}},track:{defaultValue:null,description:"",name:"track",required:!0,type:{name:"Track"}},showTrackInfo:{defaultValue:null,description:"",name:"showTrackInfo",required:!1,type:{name:"boolean"}},btnStyleProps:{defaultValue:null,description:"",name:"btnStyleProps",required:!1,type:{name:"ButtonProps"}},autoplay:{defaultValue:null,description:"",name:"autoplay",required:!1,type:{name:"boolean"}}}}}catch{}function de(e,a,r,n){if(!e||!a||r.current)return;const l=a.createAnalyser();l.fftSize=n||2048;const f=l.frequencyBinCount,d=new Uint8Array(f);return r.current=a.createMediaElementSource(e),r.current.connect(l),r.current.connect(a.destination),l.connect(a.destination),r.current.addEventListener("ended",()=>{var c;(c=r.current)==null||c.disconnect(),l.disconnect()}),{analyzer:l,bufferLength:f,dataArray:d}}const fe=_.div`
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
`;function k({track:e,color:a,size:r,canvasStyles:n,showTrackInfo:l,btnStyleProps:f,autoplay:d,fftsize:c,...h}){const[g,m]=i.useState(),[s,x]=i.useState(),[p,w]=i.useState(),u=i.useRef(null),j=i.useRef();i.useEffect(()=>{var y;e.src&&(w(e.src),(y=u.current)==null||y.load())},[e.src,u]);const T=()=>{s||x(new AudioContext),(s==null?void 0:s.state)==="suspended"&&s.resume()},b=()=>{j.current||u.current&&s&&m(de(u.current,s,j,c))};return i.useEffect(()=>{const y=u.current;return y&&(u.current.src=p,y.addEventListener("play",b),b()),window.addEventListener("click",T),()=>{var V;(V=u.current)==null||V.removeEventListener("play",b),window.removeEventListener("click",T),s==null||s.close()}},[s,u,p]),t.jsxs(fe,{...h,children:[t.jsx(P,{autoplay:d,btnStyleProps:f,audioElement:u,track:{src:e.src},showTrackInfo:l}),g&&t.jsx(z,{analyzerdData:g,color:a||"red",size:r,style:n})]})}try{k.displayName="Waveform",k.__docgenInfo={description:"",displayName:"Waveform",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"{ width: number; height: number; }"}},canvasStyles:{defaultValue:null,description:"",name:"canvasStyles",required:!1,type:{name:"CSSProperties"}},showTrackInfo:{defaultValue:null,description:"",name:"showTrackInfo",required:!1,type:{name:"boolean"}},fftsize:{defaultValue:null,description:"",name:"fftsize",required:!1,type:{name:"enum",value:[{value:"32"},{value:"64"},{value:"128"},{value:"256"},{value:"512"},{value:"1024"},{value:"2048"},{value:"4096"},{value:"8192"},{value:"16384"},{value:"32768"}]}},track:{defaultValue:null,description:"",name:"track",required:!0,type:{name:"Track"}},btnStyleProps:{defaultValue:null,description:"",name:"btnStyleProps",required:!1,type:{name:"ButtonProps"}},autoplay:{defaultValue:null,description:"",name:"autoplay",required:!1,type:{name:"boolean"}}}}}catch{}const je={title:"components/Waveform",component:k,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{track:{control:"object"},color:{control:"color"},size:{width:{control:"number"},height:{control:"number"}},canvasStyles:{control:"object"},showTrackInfo:{control:"boolean"}},args:{track:{src:"./example.wav",title:"SoundHelix Song 1",author:{name:"SoundHelix",url:"https://www.soundhelix.com"}}}},q={args:{color:"red"},tags:["autodocs"]},D={args:{size:{width:320,height:160},color:"blue"},tags:["autodocs"]},S={args:{size:{width:520,height:240},color:"green"},tags:["autodocs"]};var B,E,R;q.parameters={...q.parameters,docs:{...(B=q.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    color: "red"
  },
  tags: ['autodocs']
}`,...(R=(E=q.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var N,H,O;D.parameters={...D.parameters,docs:{...(N=D.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: {
      width: 320,
      height: 160
    },
    color: "blue"
  },
  tags: ['autodocs']
}`,...(O=(H=D.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var M,W,U;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    size: {
      width: 520,
      height: 240
    },
    color: "green"
  },
  tags: ['autodocs']
}`,...(U=(W=S.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};const be=["Default","Small","Large"];export{q as Default,S as Large,D as Small,be as __namedExportsOrder,je as default};
