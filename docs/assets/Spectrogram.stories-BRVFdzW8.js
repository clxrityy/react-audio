import{r as m,j as r}from"./index-gzyuxFYO.js";import{c as M}from"./cn-BuW-WfQo.js";import{A as B}from"./AudioSource-D2SEPCcm.js";import"./dialog-C2LGh85s.js";function L({audioRef:o,width:k="100%",height:D="25%",fftSize:v=1024,minDecibels:C=-100,maxDecibels:w=-25,colorMap:d=["#111","#ff0000","#ffff00","#ffffff"],smoothingTimeConstant:E=.8,realTime:A=!0,logarithmicScale:z=!0,onFrameUpdate:p,fillStyle:b,loop:j,...N}){const n=m.useRef(null),h=m.useRef(null),S=m.useRef(null),[V,P]=m.useState(!1),[R,q]=m.useState(!1),F=()=>{var t;if(V){(t=o.current)==null||t.pause(),P(!1);return}if(o.current){if(!h.current){const e=new(window.AudioContext||window.webkitAudioContext),s=e.createAnalyser();h.current=e,S.current=s,s.fftSize=v,s.minDecibels=C,s.maxDecibels=w,s.smoothingTimeConstant=E,e.createMediaElementSource(o.current).connect(s),s.connect(e.destination)}h.current.state==="suspended"&&h.current.resume(),o.current.paused&&o.current.play(),j&&(o.current.loop=!0),P(e=>!e)}};return m.useEffect(()=>{if(!n.current||!o.current)return;const t=n.current,e=t.getContext("2d");if(!e)return;t.width=800,t.height=400;const s=(l,x,c)=>`#${l.slice(1).match(/.{2}/g).map((g,y)=>{const a=parseInt(g,16),I=parseInt(x.slice(1).match(/.{2}/g)[y],16);return Math.round(a+c*(I-a)).toString(16).padStart(2,"0")}).join("")}`,U=l=>{const c=l/255*(d.length-1),u=Math.floor(c),g=c-u,y=d[u],a=d[u+1]||y;return s(y,a,g)},T=()=>{if(!t||!e||!S.current)return;const l=S.current.frequencyBinCount,x=new Uint8Array(l);S.current.getByteFrequencyData(x),e.fillStyle=b||"rgba(0, 0, 0, 0.5)",e.fillRect(0,0,t.width,t.height);for(let c=0;c<l;c++){const u=x[c],g=u/255*t.height,y=t.height-g,a=t.width/l;e.fillStyle=U(u),e.fillRect(c*a,y,a,g)}requestAnimationFrame(T),p==null||p(x)};V&&T()},[d,b,V,p]),r.jsxDEV("canvas",{onClick:()=>{F(),q(!0)},className:`border border-zinc-800/65 dark:border-zinc-500/65 rounded-md cursor-pointer backdrop:invert-50 ${!R&&"bg-zinc-700/50 animate-pulse hover:border-2 transition-all hover:bg-zinc-700/75 hover:animate-none"}`,ref:n,style:{width:k,height:D},...N},void 0,!1,{fileName:"/Users/clxrity/Desktop/stuff/code/pkg (@clxrity)/react-audio/src/lib/Spectrogram/Display.tsx",lineNumber:159,columnNumber:9},this)}function i({track:o,fftSize:k,width:D,height:v,minDecibels:C,maxDecibels:w,colorMap:d,smoothingTimeConstant:E,realTime:A,logarithmicScale:z,onFrameUpdate:p,loop:b,fillStyle:j,...N}){const n=m.useRef(new Audio);return r.jsxDEV("div",{...N,className:M("",N.className),children:[r.jsxDEV("audio",{ref:n,children:r.jsxDEV(B,{src:o.src},void 0,!1,{fileName:"/Users/clxrity/Desktop/stuff/code/pkg (@clxrity)/react-audio/src/lib/Spectrogram/index.tsx",lineNumber:44,columnNumber:17},this)},void 0,!1,{fileName:"/Users/clxrity/Desktop/stuff/code/pkg (@clxrity)/react-audio/src/lib/Spectrogram/index.tsx",lineNumber:43,columnNumber:13},this),n.current&&r.jsxDEV(L,{audioRef:n,fftSize:k,width:D,height:v,minDecibels:C,maxDecibels:w,colorMap:d,smoothingTimeConstant:E,realTime:A,logarithmicScale:z,onFrameUpdate:p,loop:b,fillStyle:j},void 0,!1,{fileName:"/Users/clxrity/Desktop/stuff/code/pkg (@clxrity)/react-audio/src/lib/Spectrogram/index.tsx",lineNumber:47,columnNumber:17},this)]},void 0,!0,{fileName:"/Users/clxrity/Desktop/stuff/code/pkg (@clxrity)/react-audio/src/lib/Spectrogram/index.tsx",lineNumber:42,columnNumber:9},this)}const Z={title:"Spectrogram",component:i},f={track:{src:"./dreamy-guitar-loop.mp3"}},ee=()=>r.jsxDEV(i,{...f},void 0,!1,{fileName:"/Users/clxrity/Desktop/stuff/code/pkg (@clxrity)/react-audio/src/stories/Spectrogram.stories.tsx",lineNumber:18,columnNumber:30},void 0),$={...f,width:400,height:200},te=()=>r.jsxDEV(i,{...$},void 0,!1,{fileName:"/Users/clxrity/Desktop/stuff/code/pkg (@clxrity)/react-audio/src/stories/Spectrogram.stories.tsx",lineNumber:26,columnNumber:33},void 0),W={...f,colorMap:["#222222","#555555","#eeeeee"]},re=()=>r.jsxDEV(i,{...W},void 0,!1,{fileName:"/Users/clxrity/Desktop/stuff/code/pkg (@clxrity)/react-audio/src/stories/Spectrogram.stories.tsx",lineNumber:33,columnNumber:37},void 0),_={...f,fillStyle:"#ddd"},oe=()=>r.jsxDEV(i,{..._},void 0,!1,{fileName:"/Users/clxrity/Desktop/stuff/code/pkg (@clxrity)/react-audio/src/stories/Spectrogram.stories.tsx",lineNumber:40,columnNumber:38},void 0),G={...f,loop:!0},se=()=>r.jsxDEV(i,{...G},void 0,!1,{fileName:"/Users/clxrity/Desktop/stuff/code/pkg (@clxrity)/react-audio/src/stories/Spectrogram.stories.tsx",lineNumber:47,columnNumber:27},void 0),H={...f,smoothingTimeConstant:.9},ce=()=>r.jsxDEV(i,{...H},void 0,!1,{fileName:"/Users/clxrity/Desktop/stuff/code/pkg (@clxrity)/react-audio/src/stories/Spectrogram.stories.tsx",lineNumber:55,columnNumber:5},void 0),J={...f,fftSize:32},ie=()=>r.jsxDEV(i,{...J},void 0,!1,{fileName:"/Users/clxrity/Desktop/stuff/code/pkg (@clxrity)/react-audio/src/stories/Spectrogram.stories.tsx",lineNumber:63,columnNumber:36},void 0);typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{re as CustomColorMap,ie as CustomFFTSize,oe as CustomFillStyle,te as CustomSize,ce as CustomSmoothingTimeConstant,ee as Default,se as Loop,Z as default};
