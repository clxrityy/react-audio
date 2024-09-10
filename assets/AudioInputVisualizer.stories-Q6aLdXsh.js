import{j as n}from"./jsx-runtime-DEdD30eg.js";import{d as p}from"./styled-components.browser.esm-DIbKh39u.js";import{r as s}from"./index-RYns6xqu.js";import{r as F}from"./resizeCanvas-EZ0GBuCB.js";const P=p.canvas`
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-color: transparent;
`;function w({analyzernode:r,...t}){const a=s.useRef(null);function y(){requestAnimationFrame(y);const c=r.frequencyBinCount,e=new Uint8Array(c);if(r.getByteFrequencyData(e),a.current){const u=a.current.width,i=a.current.height,d=Math.max(1,u/c),l=a.current.getContext("2d");l.clearRect(0,0,u,i),e.forEach((v,f)=>{const m=v/255*i/2,h=d*f,x=`hsl(${360*f/c}, 100%, 50%)`;l.fillStyle=x,l.fillRect(h,i-m,d,m)})}else console.log("canvasRef.current is null")}function o(){F(a.current)}return s.useEffect(()=>{y(),o()},[a]),n.jsx(P,{ref:a,analyzernode:r,...t})}try{w.displayName="Canvas",w.__docgenInfo={description:"",displayName:"Canvas",props:{analyzernode:{defaultValue:null,description:"",name:"analyzernode",required:!0,type:{name:"AnalyserNode"}}}}}catch{}const A=p.div`
    color: ${r=>r.btnStyleProps?r.btnStyleProps.theme==="dark"?"#fff":"#000":"inherit"};
    position: relative;
`,k=p.div`
    display: grid;
    grid-template-columns: auto min-content;
    justify-content: center;
    align-items: center;
    gap: 5px 10px;
`,g=p.input`
    margin: 0;
`,b=p.label`
    margin: 0;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
`;function z({btnStyleProps:r,inputAudioSettings:t,fftsize:a,...y}){var m,h,x,V;const[o,c]=s.useState(),e=s.useRef(),u=async()=>{if(e.current||(e.current=new AudioContext),!o&&e.current){const j=new AnalyserNode(e.current,{fftSize:a||2048});c(j)}e.current.state==="suspended"&&await e.current.resume()};async function i(){return await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:(t==null?void 0:t.echoCancellation)||!1,noiseSuppression:(t==null?void 0:t.noiseSuppression)||!1,autoGainControl:(t==null?void 0:t.autoGainControl)||!1,channelCount:1}})}const d=s.useRef(null),l=s.useRef(null),v=s.useRef(null),f=s.useRef(null);return s.useEffect(()=>{async function j(){if(e.current&&o){const G=await i();e.current.createMediaStreamSource(G).connect(o),o.connect(e.current.destination)}}return o&&e.current&&j(),window.addEventListener("click",u),()=>{window.removeEventListener("click",u)}},[o,e.current]),n.jsxs(A,{btnStyleProps:r,...y,children:[o&&n.jsx(w,{analyzernode:o}),n.jsxs(k,{children:[n.jsx(b,{htmlFor:"volume",children:"Volume"}),n.jsx(g,{ref:d,type:"range",defaultValue:(m=d.current)==null?void 0:m.value,step:"0.01",id:"volume",name:"volume",min:"0",max:"1"}),n.jsx(b,{htmlFor:"bass",children:"Bass"}),n.jsx(g,{ref:l,type:"range",id:"bass",min:"-10",defaultValue:(h=l.current)==null?void 0:h.value,max:"10"}),n.jsx(b,{htmlFor:"mid",children:"Mid"}),n.jsx(g,{ref:v,type:"range",id:"mid",min:"-10",defaultValue:(x=v.current)==null?void 0:x.value,max:"10"}),n.jsx(b,{htmlFor:"treble",children:"Treble"}),n.jsx(g,{ref:f,type:"range",id:"treble",min:"-10",defaultValue:(V=f.current)==null?void 0:V.value,max:"10"})]})]})}try{z.displayName="AudioInputVisualizer",z.__docgenInfo={description:"",displayName:"AudioInputVisualizer",props:{btnStyleProps:{defaultValue:null,description:"",name:"btnStyleProps",required:!1,type:{name:"ButtonProps"}},inputAudioSettings:{defaultValue:null,description:"",name:"inputAudioSettings",required:!1,type:{name:"{ echoCancellation?: boolean; noiseSuppression?: boolean; autoGainControl?: boolean | undefined; } | undefined"}},fftsize:{defaultValue:null,description:"",name:"fftsize",required:!1,type:{name:"enum",value:[{value:"32"},{value:"64"},{value:"128"},{value:"256"},{value:"512"},{value:"1024"},{value:"2048"},{value:"4096"},{value:"8192"},{value:"16384"},{value:"32768"}]}}}}}catch{}const T={title:"components/AudioInputVisualizer",component:z,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{btnStyleProps:{control:"object"},inputAudioSettings:{control:"object"}}},C={args:{inputAudioSettings:{noiseSupression:!0}}},_={args:{inputAudioSettings:{noiseSupression:!1,echoCancellation:!1,autoGainControl:!1}}};var R,S,E;C.parameters={...C.parameters,docs:{...(R=C.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    inputAudioSettings: {
      noiseSupression: true
    }
  }
}`,...(E=(S=C.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var N,I,q;_.parameters={..._.parameters,docs:{...(N=_.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    inputAudioSettings: {
      noiseSupression: false,
      echoCancellation: false,
      autoGainControl: false
    }
  }
}`,...(q=(I=_.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};const $=["Recommended","Default"];export{_ as Default,C as Recommended,$ as __namedExportsOrder,T as default};
