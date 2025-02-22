import{r as u,j as n}from"./index-BOXrQlaR.js";import{c as g,C as D,P as E}from"./index-DPbIQSUz.js";import"./dialog-BLhiEUtv.js";function k(e){e&&(e.width=e.clientWidth*window.devicePixelRatio,e.height=e.clientHeight*window.devicePixelRatio)}function A({analyser:e,canvas:t,canvasContext:s,dataArray:l,bufferLength:o,color:f}){if(!s)return;s.clearRect(0,0,t.width,t.height),e.getByteFrequencyData(l),s.fillStyle=f;const a=t.height,d=Math.ceil(t.width/o)*2.5;let x=0;for(let r=0;r<o;r++){const y=l[r]/255*a;s.fillRect(x,a-y,d,y),x+=d+1}}function W({analyserData:e,color:t,size:s,...l}){const{analyser:o,bufferLength:f,dataArray:a}=e,d=u.useRef(null),x=(y,v,b)=>{const i=d.current;if(!i||!y)return;const p=i.getContext("2d"),w=()=>{requestAnimationFrame(w),i.width=i.width,A({analyser:y,canvas:i,canvasContext:p,dataArray:b,bufferLength:v,color:t})};w()};function r(){k(d.current)}return u.useEffect(()=>(x(o,f,a),s||window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}),[a,o,f,t]),n.jsxDEV("canvas",{ref:d,width:s||400,height:s||400,style:{position:"absolute",color:t,zIndex:0,...l.style},...l},void 0,!1,{fileName:"/Users/clxrity/Desktop/stuff/code/pkg (@clxrity)/react-audio/src/components/ui/Canvas.tsx",lineNumber:99,columnNumber:9},this)}function j(e,t,s,l){if(!e||!t)return null;s.current||(s.current=t.createMediaElementSource(e));const o=t.createAnalyser();return o.fftSize=l,s.current.connect(o),o.connect(t.destination),{analyser:o,getFrequencyData:()=>{const f=o.frequencyBinCount,a=new Uint8Array(f);return o.getByteFrequencyData(a),a}}}function m({track:e,size:t=500,fftSize:s=4096,autoplay:l=!1,showTrackInfo:o=!1,showVolume:f=!1,showProgress:a=!0,color:d=D.primary,...x}){const[r,y]=u.useState(null),[v,b]=u.useState(null),i=u.useRef(null);u.useEffect(()=>{i.current&&(i.current.src=e.src)},[e.src]);const p=u.useRef(null),w=()=>{if(!i.current){console.warn("🚨 Audio ref is not ready yet.");return}try{const c=r??new AudioContext;if(r||y(c),!c)throw new Error("AudioContext is null");c.state==="suspended"&&c.resume(),p.current||(p.current=c.createMediaElementSource(i.current));const N=j(i.current,c,p,s);N&&b(N.analyser)}catch(c){console.error("❌ Failed to initialize AudioContext:",c)}};return u.useEffect(()=>{i.current||(i.current=new Audio(e.src),i.current.load())},[e.src]),u.useEffect(()=>{const c=()=>{r?r.state==="suspended"&&r.resume():w()};return window.addEventListener("click",c),()=>{window.removeEventListener("click",c),r==null||r.close()}},[r]),n.jsxDEV("div",{...x,className:g("flex gap-2 items-center justify-center w-full max-w-[400px] relative rounded-md bg-transparent",x.className),children:n.jsxDEV("div",{className:"relative w-full h-[100px]",children:[v&&n.jsxDEV(W,{analyserData:{analyser:v,bufferLength:v.frequencyBinCount,dataArray:new Uint8Array(v.frequencyBinCount)},color:d,width:t,height:t,style:{position:"absolute",inset:0,width:"100%",height:"100%",opacity:.75,pointerEvents:"none",zIndex:0}},void 0,!1,{fileName:"/Users/clxrity/Desktop/stuff/code/pkg (@clxrity)/react-audio/src/lib/Waveform/index.tsx",lineNumber:134,columnNumber:21},this),n.jsxDEV(E,{track:e,audioRef:i,autoplay:l,showTrackInfo:o,showProgress:a,showVolume:f,size:t},void 0,!1,{fileName:"/Users/clxrity/Desktop/stuff/code/pkg (@clxrity)/react-audio/src/lib/Waveform/index.tsx",lineNumber:156,columnNumber:17},this)]},void 0,!0,{fileName:"/Users/clxrity/Desktop/stuff/code/pkg (@clxrity)/react-audio/src/lib/Waveform/index.tsx",lineNumber:132,columnNumber:13},this)},void 0,!1,{fileName:"/Users/clxrity/Desktop/stuff/code/pkg (@clxrity)/react-audio/src/lib/Waveform/index.tsx",lineNumber:125,columnNumber:9},this)}const L={title:"Waveform",component:m},h={src:"/dreamy-guitar-loop.mp3",title:"Dreamy Guitar Loop"},z=()=>n.jsxDEV(m,{track:h},void 0,!1,{fileName:"/Users/clxrity/Desktop/stuff/code/pkg (@clxrity)/react-audio/src/stories/Waveform.stories.tsx",lineNumber:17,columnNumber:30},void 0),C=()=>n.jsxDEV(m,{track:h,style:{width:100,height:40}},void 0,!1,{fileName:"/Users/clxrity/Desktop/stuff/code/pkg (@clxrity)/react-audio/src/stories/Waveform.stories.tsx",lineNumber:19,columnNumber:5},void 0),R=()=>n.jsxDEV(m,{track:h,style:{width:1e3,height:400}},void 0,!1,{fileName:"/Users/clxrity/Desktop/stuff/code/pkg (@clxrity)/react-audio/src/stories/Waveform.stories.tsx",lineNumber:22,columnNumber:5},void 0),F=()=>n.jsxDEV(m,{track:h,showTrackInfo:!1},void 0,!1,{fileName:"/Users/clxrity/Desktop/stuff/code/pkg (@clxrity)/react-audio/src/stories/Waveform.stories.tsx",lineNumber:25,columnNumber:5},void 0),q=()=>n.jsxDEV(m,{track:h,color:"#ff0000"},void 0,!1,{fileName:"/Users/clxrity/Desktop/stuff/code/pkg (@clxrity)/react-audio/src/stories/Waveform.stories.tsx",lineNumber:27,columnNumber:34},void 0),B=()=>n.jsxDEV(m,{track:h,fftSize:128},void 0,!1,{fileName:"/Users/clxrity/Desktop/stuff/code/pkg (@clxrity)/react-audio/src/stories/Waveform.stories.tsx",lineNumber:28,columnNumber:35},void 0),H=()=>n.jsxDEV(m,{track:h,fftSize:16384},void 0,!1,{fileName:"/Users/clxrity/Desktop/stuff/code/pkg (@clxrity)/react-audio/src/stories/Waveform.stories.tsx",lineNumber:29,columnNumber:36},void 0);typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{q as CustomColor,z as Default,H as HigherFFTSize,R as Large,B as LowerFFTSize,F as NoTrackInfo,C as Small,L as default};
