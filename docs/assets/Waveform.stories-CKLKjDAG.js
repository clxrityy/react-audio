import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as s}from"./index-RYns6xqu.js";import{d as T,C as z,T as $,L as ee}from"./elements-Dm_2D8-p.js";import{B as re,f as B}from"./formatDuration-BaWPWh0_.js";import{T as te,V as ne,P as ae}from"./index-wqID4jty.js";function se({analyzer:e,canvas:i,canvasCtx:l,dataArray:a,bufferLength:p,color:y}){e.getByteFrequencyData(a),l.fillStyle=y;const d=i.height,g=Math.ceil(i.width/p)*2.5;let m,f=0;for(let r=0;r<p;r++)m=a[r]/255*d,l.fillRect(f,d-m,g,m),f+=g+1}function k({analyzerdData:e,color:i,size:l,...a}){const{analyzer:p,bufferLength:y,dataArray:d}=e,g=s.useRef(null),m=(f,r,x)=>{const u=g.current;if(!u||!f)return;const j=u.getContext("2d"),o=()=>{requestAnimationFrame(o),u.width=u.width,se({analyzer:f,canvas:u,canvasCtx:j,dataArray:x,bufferLength:r,color:i})};o()};return s.useEffect(()=>{m(p,y,d)},[d,p,y,i]),t.jsx("canvas",{ref:g,width:(l==null?void 0:l.width)||window.innerWidth,height:(l==null?void 0:l.height)||window.innerHeight,style:{position:"absolute",zIndex:-1,color:i,...a.style},...a})}try{k.displayName="Canvas",k.__docgenInfo={description:"",displayName:"Canvas",props:{analyzerdData:{defaultValue:null,description:"",name:"analyzerdData",required:!0,type:{name:"AnalyzerData"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"{ width: number; height: number; }"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLCanvasElement | null) => void) | RefObject<HTMLCanvasElement> | null"}}}}}catch{}const oe=T.div`
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
`,ce=T.div`
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
`,ie=T.div`
    display: flex;
    flex-direction: column;
    justify-content: evenly;
    align-items: center;
    gap: 0.25rem;
    margin-left: auto;
    margin-right: auto;
`,le=T.div`
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    align-items: center;
    justify-content: center;

    @media (max-width: 420px) {
        flex-direction: column;
    }
`;function L({audioElement:e,track:i,showTrackInfo:l,btnStyleProps:a,autoplay:p,...y}){const[d,g]=s.useState(0),[m,f]=s.useState(!1),[r,x]=s.useState(!1),[u,j]=s.useState(.2),[o,h]=s.useState(0),[b,_]=s.useState(0),c=B(d),v=B(o),P=n=>{e.current&&(e.current.volume=n,j(n))},V=()=>{e.current&&(e.current.volume!==0?e.current.volume=0:e.current.volume=1)},G=async()=>{if(e.current)if(r)e.current.pause(),x(!1);else try{await e.current.play(),x(!0)}catch(n){console.error(n)}},J=n=>{n.currentTarget.volume=u,f(!0)},I=n=>{const w=n.currentTarget;if(w.duration>0){for(let C=0;C<w.buffered.length;C++)if(w.buffered.start(w.buffered.length-1-C)<w.currentTime){_(w.buffered.end(w.buffered.length-1-C));break}}},K=n=>{h(n.currentTarget.currentTime),I(n)},Q=n=>(j(n.currentTarget.volume),n.currentTarget.volume),X=()=>{x(!0)},Y=()=>{x(!1)},Z=n=>{g(n.currentTarget.duration)};return s.useEffect(()=>{e.current&&(e.current.src=i.src,f(!0))},[i.src]),t.jsxs(oe,{...y,children:[t.jsx("audio",{ref:e,onCanPlay:J,onTimeUpdate:K,onVolumeChange:Q,onPlaying:X,onPause:Y,onDurationChange:Z,onProgress:I,crossOrigin:"anonymous",autoPlay:p,children:t.jsx("source",{src:i.src,type:"audio/mpeg"})}),t.jsxs(ce,{children:[l&&t.jsx(te,{track:i}),t.jsxs(ie,{children:[t.jsxs(le,{children:[t.jsx(re,{theme:a==null?void 0:a.theme,size:a==null?void 0:a.size,color:a==null?void 0:a.color,disabled:!m,onClick:G,children:r?t.jsx(z.icons.pause,{}):t.jsx(z.icons.play,{})}),t.jsx(ne,{handleMute:V,volume:u,volumeChange:P})]}),t.jsxs($,{children:[t.jsx("span",{children:v}),t.jsx("span",{children:"/"}),t.jsx("span",{children:c})]}),b?t.jsx(ae,{onChange:n=>h(n.target.valueAsNumber),duration:d,current_progress:o,buffered:b}):t.jsx(ee,{})]})]})]})}try{L.displayName="Player",L.__docgenInfo={description:"",displayName:"Player",props:{audioElement:{defaultValue:null,description:"",name:"audioElement",required:!0,type:{name:"RefObject<HTMLAudioElement>"}},track:{defaultValue:null,description:"",name:"track",required:!0,type:{name:"Track"}},showTrackInfo:{defaultValue:null,description:"",name:"showTrackInfo",required:!1,type:{name:"boolean"}},btnStyleProps:{defaultValue:null,description:"",name:"btnStyleProps",required:!1,type:{name:"ButtonProps"}},autoplay:{defaultValue:null,description:"",name:"autoplay",required:!1,type:{name:"boolean"}}}}}catch{}const ue=T.div`
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
`;function A({track:e,color:i,size:l,canvasStyles:a,showTrackInfo:p,btnStyleProps:y,autoplay:d,...g}){const[m,f]=s.useState(),[r,x]=s.useState(),[u,j]=s.useState(),o=s.useRef(null),h=s.useRef();s.useEffect(()=>{var c;e.src&&(j(e.src),(c=o.current)==null||c.load())},[e.src,o]);const b=()=>{r||x(new AudioContext),(r==null?void 0:r.state)==="suspended"&&r.resume()},_=()=>{if(!(!o.current||!r)&&!h.current&&r){const c=r.createAnalyser();c.fftSize=2048;const v=c.frequencyBinCount,P=new Uint8Array(v);h.current=r.createMediaElementSource(o.current),h.current.connect(c),h.current.connect(r.destination),c.connect(r.destination),h.current.addEventListener("ended",()=>{var V;(V=h.current)==null||V.disconnect(),c.disconnect()}),f({analyzer:c,bufferLength:v,dataArray:P})}};return s.useEffect(()=>{const c=o.current;return c&&(o.current.src=u,c.addEventListener("play",_),_()),window.addEventListener("click",b),()=>{var v;(v=o.current)==null||v.removeEventListener("play",_),window.removeEventListener("click",b),r==null||r.close()}},[r,o,u]),t.jsxs(ue,{...g,children:[t.jsx(L,{autoplay:d,btnStyleProps:y,audioElement:o,track:{src:e.src},showTrackInfo:p}),m&&t.jsx(k,{analyzerdData:m,color:i||"red",size:l,style:a})]})}try{A.displayName="Waveform",A.__docgenInfo={description:"",displayName:"Waveform",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"{ width: number; height: number; }"}},canvasStyles:{defaultValue:null,description:"",name:"canvasStyles",required:!1,type:{name:"CSSProperties"}},showTrackInfo:{defaultValue:null,description:"",name:"showTrackInfo",required:!1,type:{name:"boolean"}},track:{defaultValue:null,description:"",name:"track",required:!0,type:{name:"Track"}},btnStyleProps:{defaultValue:null,description:"",name:"btnStyleProps",required:!1,type:{name:"ButtonProps"}},autoplay:{defaultValue:null,description:"",name:"autoplay",required:!1,type:{name:"boolean"}}}}}catch{}const ye={title:"components/Waveform",component:A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{track:{control:"object"},color:{control:"color"},size:{width:{control:"number"},height:{control:"number"}},canvasStyles:{control:"object"},showTrackInfo:{control:"boolean"}},args:{track:{src:"./example.wav",title:"SoundHelix Song 1",author:{name:"SoundHelix",url:"https://www.soundhelix.com"}}}},q={args:{color:"red"},tags:["autodocs"]},D={args:{size:{width:320,height:160},color:"blue"},tags:["autodocs"]},S={args:{size:{width:520,height:240},color:"green"},tags:["autodocs"]};var E,R,H;q.parameters={...q.parameters,docs:{...(E=q.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    color: "red"
  },
  tags: ['autodocs']
}`,...(H=(R=q.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var N,O,M;D.parameters={...D.parameters,docs:{...(N=D.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: {
      width: 320,
      height: 160
    },
    color: "blue"
  },
  tags: ['autodocs']
}`,...(M=(O=D.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var W,U,F;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    size: {
      width: 520,
      height: 240
    },
    color: "green"
  },
  tags: ['autodocs']
}`,...(F=(U=S.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};const xe=["Default","Small","Large"];export{q as Default,S as Large,D as Small,xe as __namedExportsOrder,ye as default};
