import{j as a}from"./jsx-runtime-DEdD30eg.js";import{d as x}from"./styled-components.browser.esm-DiIrWxKB.js";import{r as t}from"./index-RYns6xqu.js";import{r as H}from"./resizeCanvas-EZ0GBuCB.js";const J=x.canvas`
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background-color: transparent;
`;function T({analyzernode:c,...s}){const u=t.useRef(null);function w(){requestAnimationFrame(w);const h=c.frequencyBinCount,d=new Uint8Array(h);if(c.getByteFrequencyData(d),u.current){const E=u.current.width,i=u.current.height,C=Math.max(1,E/h),l=u.current.getContext("2d");l.clearRect(0,0,E,i),d.forEach((z,f)=>{const N=z/255*i/2,e=C*f,y=`hsl(${360*f/h}, 100%, 50%)`;l.fillStyle=y,l.fillRect(e,i-N,C,N)})}else console.log("canvasRef.current is null")}function o(){H(u.current)}return t.useEffect(()=>(w(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}),[u]),a.jsx(J,{ref:u,analyzernode:c,...s})}try{T.displayName="Canvas",T.__docgenInfo={description:"",displayName:"Canvas",props:{analyzernode:{defaultValue:null,description:"",name:"analyzernode",required:!0,type:{name:"AnalyserNode"}}}}}catch{}const K=x.div`
    color: ${c=>c.btnStyleProps?c.btnStyleProps.theme==="dark"?"#fff":"#000":"inherit"};
    position: relative;
`,X=x.div`
    display: grid;
    grid-template-columns: auto min-content;
    justify-content: center;
    align-items: center;
    gap: 5px 10px;
`,_=x.input`
    margin: 0;
`,S=x.label`
    margin: 0;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
`;function A({btnStyleProps:c,inputAudioSettings:s,fftsize:u,...w}){var F,G,I;const[o,h]=t.useState(),[d,E]=t.useState(),[i,C]=t.useState(),[l,z]=t.useState(),[f,N]=t.useState(),e=t.useRef(),[y,O]=t.useState(0),L=async()=>{if(e.current||(e.current=new AudioContext),!d&&e.current){const n=new GainNode(e.current,{gain:y});E(n)}if(!o&&e.current){const n=new AnalyserNode(e.current,{fftSize:u||256});h(n)}if(!i&&e.current&&m.current){const n=new BiquadFilterNode(e.current,{type:"lowshelf",frequency:500,gain:m.current.valueAsNumber});C(n)}if(!l&&e.current&&p.current){const n=new BiquadFilterNode(e.current,{type:"peaking",Q:Math.SQRT1_2,frequency:1500,gain:p.current.valueAsNumber});z(n)}if(!f&&e.current&&v.current){const n=new BiquadFilterNode(e.current,{type:"highshelf",frequency:3e3,gain:v.current.valueAsNumber});N(n)}e.current.state==="suspended"&&await e.current.resume()};async function W(){return await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:(s==null?void 0:s.echoCancellation)||!1,noiseSuppression:(s==null?void 0:s.noiseSuppression)||!1,autoGainControl:(s==null?void 0:s.autoGainControl)||!1,channelCount:1}})}function R(n){d&&(O(parseFloat(n.target.value)),d.gain.value=y)}function q(n){i&&e.current&&i.gain.setTargetAtTime(n.target.valueAsNumber,e.current.currentTime,.01)}function Q(n){l&&e.current&&l.gain.setTargetAtTime(n.target.valueAsNumber,e.current.currentTime,.01)}function B(n){f&&e.current&&f.gain.setTargetAtTime(n.target.valueAsNumber,e.current.currentTime,.01)}const g=t.useRef(null),m=t.useRef(null),p=t.useRef(null),v=t.useRef(null);return t.useEffect(()=>{async function n(){if(e.current&&o&&d&&i&&l&&f){const r=await W(),b=e.current.createMediaStreamSource(r);b.connect(f),b.connect(l),b.connect(i),b.connect(d),b.connect(o),o.connect(e.current.destination)}}return o&&e.current&&n(),window.addEventListener("click",L),g.current&&g.current.addEventListener("change",r=>R(r)),m.current&&m.current.addEventListener("change",r=>q(r)),p.current&&p.current.addEventListener("change",r=>Q(r)),v.current&&v.current.addEventListener("change",r=>B(r)),()=>{window.removeEventListener("click",L),g.current&&g.current.removeEventListener("change",r=>R(r)),m.current&&m.current.removeEventListener("change",r=>q(r)),p.current&&p.current.removeEventListener("change",r=>Q(r)),v.current&&v.current.removeEventListener("change",r=>B(r))}},[o,e.current,y,g.current,d,i,l,f,m.current,p.current,v.current]),a.jsxs(K,{btnStyleProps:c,...w,children:[o&&a.jsx(T,{analyzernode:o}),a.jsxs(X,{children:[a.jsx(S,{htmlFor:"volume",children:"Volume"}),a.jsx(_,{ref:g,type:"range",defaultValue:g.current?g.current.value:.5,step:.01,id:"volume",name:"volume",min:-1,max:1}),a.jsx(S,{htmlFor:"bass",children:"Bass"}),a.jsx(_,{ref:m,type:"range",id:"bass",min:"-10",defaultValue:(F=m.current)==null?void 0:F.value,max:"10"}),a.jsx(S,{htmlFor:"mid",children:"Mid"}),a.jsx(_,{ref:p,type:"range",id:"mid",min:"-10",defaultValue:(G=p.current)==null?void 0:G.value,max:"10"}),a.jsx(S,{htmlFor:"treble",children:"Treble"}),a.jsx(_,{ref:v,type:"range",id:"treble",min:"-10",defaultValue:(I=v.current)==null?void 0:I.value,max:"10"})]})]})}try{A.displayName="AudioInputVisualizer",A.__docgenInfo={description:"",displayName:"AudioInputVisualizer",props:{btnStyleProps:{defaultValue:null,description:"",name:"btnStyleProps",required:!1,type:{name:"ButtonProps"}},inputAudioSettings:{defaultValue:null,description:"",name:"inputAudioSettings",required:!1,type:{name:"{ echoCancellation?: boolean; noiseSuppression?: boolean; autoGainControl?: boolean | undefined; } | undefined"}},fftsize:{defaultValue:null,description:"",name:"fftsize",required:!1,type:{name:"enum",value:[{value:"32"},{value:"64"},{value:"128"},{value:"256"},{value:"512"},{value:"1024"},{value:"2048"},{value:"4096"},{value:"8192"},{value:"16384"},{value:"32768"}]}}}}}catch{}const re={title:"components/AudioInputVisualizer",component:A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{btnStyleProps:{control:"object"},inputAudioSettings:{control:"object"}}},V={args:{inputAudioSettings:{noiseSupression:!0}}},j={args:{inputAudioSettings:{noiseSupression:!1,echoCancellation:!1,autoGainControl:!1}}};var M,P,k;V.parameters={...V.parameters,docs:{...(M=V.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    inputAudioSettings: {
      noiseSupression: true
    }
  }
}`,...(k=(P=V.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var D,U,$;j.parameters={...j.parameters,docs:{...(D=j.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    inputAudioSettings: {
      noiseSupression: false,
      echoCancellation: false,
      autoGainControl: false
    }
  }
}`,...($=(U=j.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};const te=["Recommended","Default"];export{j as Default,V as Recommended,te as __namedExportsOrder,re as default};
