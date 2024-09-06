import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as t}from"./index-RYns6xqu.js";import{F as q,a as I,L as V,C as v}from"./elements-Dm_2D8-p.js";function c({track:i,style:_,size:s,btnStyleProps:l,autoplay:d,...k}){const[u,z]=t.useState(!1),[r,E]=t.useState(),[p,m]=t.useState(!1);r?r.addEventListener("canplaythrough",()=>{z(!0)}):typeof Audio<"u"&&E(new Audio(i.src)),t.useEffect(()=>{d&&y()},[d]);const y=()=>{u&&(r.play(),m(!0))},w=()=>{u&&(r.pause(),m(!1))};return e.jsx("div",{...k,style:_,children:u&&r!==void 0?e.jsx("div",{children:e.jsx("button",{onClick:p?w:y,style:{backgroundColor:"transparent",border:"none",cursor:"pointer",outline:"none",color:(l==null?void 0:l.color)||"inherit"},children:p?e.jsx(q,{size:s}):e.jsx(I,{size:s})})}):e.jsx(V,{children:e.jsx(v.icons.loading,{size:s})})})}try{c.displayName="JustPlayer",c.__docgenInfo={description:"",displayName:"JustPlayer",props:{style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}},track:{defaultValue:null,description:"",name:"track",required:!0,type:{name:"Track"}},btnStyleProps:{defaultValue:null,description:"",name:"btnStyleProps",required:!1,type:{name:"ButtonProps"}},autoplay:{defaultValue:null,description:"",name:"autoplay",required:!1,type:{name:"boolean"}}}}}catch{}const A={title:"components/JustPlayer",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{style:{control:"object"},track:{control:"object"},size:{control:"number"},btnStyleProps:{control:"object"},autoplay:{control:"boolean"}},args:{track:{src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"}}},a={args:{label:"Default",size:75,btnStyleProps:{}}},o={args:{btnStyleProps:{color:"blue"},size:150}},n={args:{style:{backgroundColor:"red",color:"white",padding:"1rem",borderRadius:"1rem",display:"flex",justifyContent:"center",alignItems:"center"},size:50}};var f,g,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Default',
    size: 75,
    btnStyleProps: {}
  }
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,P,h;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    btnStyleProps: {
      color: "blue"
    },
    size: 150
  }
}`,...(h=(P=o.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};var j,S,C;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    style: {
      backgroundColor: "red",
      color: "white",
      padding: "1rem",
      borderRadius: "1rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    size: 50
  }
}`,...(C=(S=n.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const B=["Default","WithButtonProps","Youtube"];export{a as Default,o as WithButtonProps,n as Youtube,B as __namedExportsOrder,A as default};
