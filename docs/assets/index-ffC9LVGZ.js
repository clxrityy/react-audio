import{j as i}from"./jsx-runtime-DEdD30eg.js";import{d as o}from"./styled-components.browser.esm-DIbKh39u.js";import{C as l,P as h}from"./elements-D4M0jGhh.js";import{B as f}from"./formatDuration-PdJL874n.js";const g=o.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 640px;
`,x=o.img`
    width: 100%;
    max-width: 25px;
    height: auto;
    border-radius: 0.5rem;

    @media only screen and (max-width: 600px) {
        max-width: 100%;
    }
`,v=o.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    align-items: center;
    justify-items: center;
    width: 100%;
    max-width: 100px;
`,_=o.h3`
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
`,y=o.a`
    font-size: 0.85rem;
    font-weight: 400;
    text-align: center;
    color: ${l.colors.primary};
    text-decoration: none;
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
`;function u({track:e,...a}){var n,r;return i.jsxs(g,{...a,children:[e.thumbnail&&i.jsx(x,{src:e.thumbnail,alt:e.title}),i.jsxs(v,{children:[i.jsx(_,{children:e.title}),i.jsx(y,{href:(n=e.author)==null?void 0:n.url,children:(r=e==null?void 0:e.author)==null?void 0:r.name})]})]})}try{u.displayName="TrackInfo",u.__docgenInfo={description:"",displayName:"TrackInfo",props:{track:{defaultValue:null,description:"",name:"track",required:!0,type:{name:"Track"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}}}catch{}const w=o.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 640px;
    padding: 1rem;
    position: relative;
    border-radius: 0.5rem;
    background-color: transparent;
`,j=o.input`
    width: 70px;
    margin: 0;
    height: 12px;
    border-radius: 30px;
    accentcolor: ${l.colors.primary};
    appearance: none;
    cursor: pointer;
    background-color: gray;
`;function s({volume:e,volumeChange:a,handleMute:n,btnStyleProps:r,...t}){return i.jsxs(w,{...t,children:[i.jsx(j,{"aria-label":"Volume",type:"range",name:"volume",min:0,step:.05,max:1,value:e,onChange:d=>a(parseFloat(d.target.value))}),i.jsx(f,{color:r==null?void 0:r.color,theme:r==null?void 0:r.theme,size:r==null?void 0:r.size,onClick:n,"aria-label":e>0?"Mute":"Unmute",children:e===0?i.jsx(l.icons.volumeOff,{}):i.jsx(l.icons.volumeUp,{})})]})}try{s.displayName="Volume",s.__docgenInfo={description:"",displayName:"Volume",props:{volume:{defaultValue:null,description:"",name:"volume",required:!0,type:{name:"number"}},volumeChange:{defaultValue:null,description:"",name:"volumeChange",required:!0,type:{name:"(volume: number) => void"}},handleMute:{defaultValue:null,description:"",name:"handleMute",required:!0,type:{name:"() => void"}},btnStyleProps:{defaultValue:null,description:"",name:"btnStyleProps",required:!1,type:{name:"ButtonProps"}}}}}catch{}const V=o.div.withConfig({shouldForwardProp:e=>e!=="buffered"})`
    position: relative;
    height: 4px;
    top: -4px;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.1);

    @media only screen and (max-width: 1000px) {
        top: -8px;
        margin: 0 1rem;
    }
`;function q({duration:e,current_progress:a,buffered:n,btnStyleProps:r,...t}){const d=isNaN(a/e)?0:a/e,c=isNaN(n/e)?0:n/e,m={"--progress-width":d||0,"--buffered-width":c||0};return i.jsx(V,{color:r==null?void 0:r.color,duration:e,current_progress:a,buffered:n,...t,children:i.jsx(h,{color:r==null?void 0:r.color,type:"range",name:"progress",style:m,min:0,max:e,value:a&&a,onChange:p=>t.onChange&&t.onChange(p)})})}try{Progress.displayName="Progress",Progress.__docgenInfo={description:"",displayName:"Progress",props:{duration:{defaultValue:null,description:"",name:"duration",required:!0,type:{name:"number"}},current_progress:{defaultValue:null,description:"",name:"current_progress",required:!0,type:{name:"number"}},buffered:{defaultValue:null,description:"",name:"buffered",required:!0,type:{name:"number"}},btnStyleProps:{defaultValue:null,description:"",name:"btnStyleProps",required:!1,type:{name:"ButtonProps"}}}}}catch{}export{q as P,u as T,s as V};
