import{j as e}from"./jsx-runtime-DEdD30eg.js";import{d as p,C as b,T as X,L as Y}from"./elements-Dm_2D8-p.js";import{r as a}from"./index-RYns6xqu.js";import{B as Z,f as v}from"./formatDuration-BaWPWh0_.js";import{T as $,V as ee,P as re}from"./index-wqID4jty.js";const te=p.div`
    position: relative;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 300px;
    padding: 0.5rem;
    position: relative;
    border-radius: 0.5rem;
    background-color: transparent;
    backdrop-filter: blur(10px);
`,ne=p.div`
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    padding: 0.25rem;
    align-items: center;
    justify-items: center;
    position: relative;
    width: 100%;
    max-width: 300px;

    @media only screen and (max-width: 600px) {
        gap: 0.5rem;
        flex-direction: column;
    }
`,ae=p.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
`,oe=p.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    align-items: center;
    justify-content: center;
`;function f({track:s,btnStyleProps:n,autoplay:I,...z}){const[g,A]=a.useState(0),[m,h]=a.useState(!1),[x,l]=a.useState(!1),[y,P]=a.useState(.2),[j,O]=a.useState(0),[w,H]=a.useState(0),t=a.useRef(null),R=v(g),W=v(j),q=r=>{t.current&&(t.current.volume=r,P(r))},N=()=>{t.current&&(t.current.volume!==0?t.current.volume=0:t.current.volume=1)},U=()=>{t.current&&(x?(t.current.pause(),l(!1)):(t.current.play(),l(!0)))},L=r=>{r.currentTarget.volume=y,h(!0)},M=r=>{const o=r.currentTarget;if(o.duration>0){for(let c=0;c<o.buffered.length;c++)if(o.buffered.start(o.buffered.length-1-c)<o.currentTime){H(o.buffered.end(o.buffered.length-1-c));break}}},F=r=>{O(r.currentTarget.currentTime),M(r)},G=r=>{P(r.currentTarget.volume)},J=()=>{l(!0)},K=()=>{l(!1)},Q=r=>{A(r.currentTarget.duration)};return a.useEffect(()=>{t.current.src=s.src,h(!0)},[s.src,t,m]),e.jsxs(te,{...z,children:[e.jsx("audio",{ref:t,onCanPlay:L,onTimeUpdate:F,onVolumeChange:G,onPlaying:J,onPause:K,onDurationChange:Q,autoPlay:I,children:e.jsx("source",{src:s.src,type:"audio/mpeg"})}),m?e.jsxs(ne,{children:[e.jsx($,{track:s}),e.jsxs(ae,{children:[e.jsxs(oe,{children:[e.jsx(Z,{theme:n&&n.theme,size:n&&n.size,color:n&&n.color,disabled:!m,onClick:U,children:x?e.jsx(b.icons.pause,{}):e.jsx(b.icons.play,{})}),e.jsx(ee,{handleMute:N,volume:y,volumeChange:q,btnStyleProps:n})]}),e.jsxs(X,{children:[e.jsx("span",{children:W}),e.jsx("span",{children:"/"}),e.jsx("span",{children:R})]}),w?e.jsx(re,{btnStyleProps:n,duration:g,current_progress:j,buffered:w}):null]})]}):e.jsx(Y,{})]})}try{f.displayName="AudioPlayer",f.__docgenInfo={description:"",displayName:"AudioPlayer",props:{track:{defaultValue:null,description:"",name:"track",required:!0,type:{name:"Track"}},btnStyleProps:{defaultValue:null,description:"",name:"btnStyleProps",required:!1,type:{name:"ButtonProps"}},autoplay:{defaultValue:null,description:"",name:"autoplay",required:!1,type:{name:"boolean"}}}}}catch{}const pe={title:"components/AudioPlayer",component:f,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{track:{control:"object"},btnStyleProps:{control:"object"},autoplay:{control:"boolean"}}},i={args:{track:{src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"}}},u={args:{track:{src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"},btnStyleProps:{color:"#00ff9988",theme:"light",size:"lg"}}},d={args:{track:{title:"Example",src:"./example.wav",thumbnail:"./apple-touch-icon.png",author:{name:"clxrity",url:"https://clxrity.xyz"}},btnStyleProps:{color:"red"}}};var S,T,k;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    track: {
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    }
  }
}`,...(k=(T=i.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var C,D,_;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    track: {
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    btnStyleProps: {
      color: "#00ff9988",
      theme: "light",
      size: "lg"
    }
  }
}`,...(_=(D=u.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var V,B,E;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    track: {
      title: "Example",
      src: "./example.wav",
      thumbnail: "./apple-touch-icon.png",
      author: {
        name: "clxrity",
        url: "https://clxrity.xyz"
      }
    },
    btnStyleProps: {
      color: "red"
    }
  }
}`,...(E=(B=d.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};const me=["Default","WithButtonProps","WithTrackInfo"];export{i as Default,u as WithButtonProps,d as WithTrackInfo,me as __namedExportsOrder,pe as default};
