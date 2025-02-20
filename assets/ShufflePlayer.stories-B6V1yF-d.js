import{j as e,r as x}from"./index-ODlto6PU.js";import{C as y,c as d,I as m,P as h}from"./index-B1OkVeKo.js";function b({track:t,selected:l,trackNumberLabel:c,color:s,...r}){return e.jsxs("li",{onClick:r.onClick,color:s,className:d(`flex items-center p-2 z-1 ${l?"opacity-100":"opacity-70"} rounded-md pt-3 pb-3 ${l?"border":""} my-2 cursort-pointer hover:opacity-100 justify-between w-full self-center z-30 transition-all duration-200`,r.className),style:{borderColor:s||y.primary},children:[t.thumbnail?e.jsx("img",{src:t.thumbnail,alt:t.title,style:{height:30,width:30,borderRadius:"30%",...r.style}}):null,e.jsx("span",{className:"flex-1 text-center font-semibold text-sm opacity-90 z-2",children:t.title}),e.jsx("span",{className:"text-lg",children:l?e.jsx(m.selected,{}):e.jsx(m.unselected,{})})]})}function f({tracks:t,autoplay:l=!1,color:c,shuffle:s=!1,onShuffle:r,...i}){const[u,n]=x.useState(0),p=t[u];return r&&s&&(r(),n(Math.floor(Math.random()*t.length))),e.jsx("div",{...i,className:d("flex flex-col gap-4 p-4 items-center justify-center relative w-full max-w-[800px] rounded-lg bg-transparent border border-zinc-200/10 backdrop-blur-sm",i.className),children:e.jsxs("ul",{className:"list-none p-0 m-0 w-full flex flex-col gap-0 self-center justify-self-center min-w-full overflow-y-scroll scroll-smooth",children:[t.map((a,o)=>e.jsx(b,{color:c,onClick:()=>n(o),selected:o===u,track:a,trackNumberLabel:`${o+1}`},o)),e.jsx(h,{color:c,autoplay:l,track:p,onNext:()=>n(a=>a+1),onPrev:()=>n(a=>a-1),showNextPrevControls:!0})]})})}const N={title:"ShufflePlayer",component:f},j=Array.from({length:5},(t,l)=>({src:"/dreamy-guitar-loop.mp3",title:`Dreamy Guitar Loop ${l+1}`,thumbnail:"/apple-touch-icon.png",artist:{name:"clxrity",url:"https://wav.clxrity.xyz",thumbnail:"/apple-touch-icon.png"}})),C=()=>e.jsx(f,{tracks:j});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{C as Default,N as default};
