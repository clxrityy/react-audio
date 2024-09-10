import{j as n}from"./jsx-runtime-DEdD30eg.js";import{d}from"./styled-components.browser.esm-DIbKh39u.js";import{C as e}from"./elements-D4M0jGhh.js";const i=d.button`
    padding: 0.5rem 0.5rem;
    border-radius: 0.25rem;
    border: none;
    cursor: pointer;
    &:focus {
        outline: none;
        ring: 2px solid ${({color:r})=>r||e.colors.primary};
    }
    &:hover {
        scale: 1.05;
    }
    &:active {
        scale: 0.95;
    }
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    ${({color:r,theme:o})=>{switch(r){case"primary":return`
                    background-color: ${r||e.colors.primary};
                    color: ${o?o==="dark"?e.themes.dark.textColor:e.themes.light.textColor:e.themes.dark.textColor};
                `;case"secondary":return`
                    background-color: ${r||e.colors.secondary};
                    color: ${o?o==="dark"?e.themes.dark.textColor:e.themes.light.textColor:e.themes.dark.textColor};
                `;case"outline":return`
                    background-color: transparent;
                    border: 2px solid ${r||e.colors.primary};
                    color: ${o?o==="dark"?e.themes.dark.textColor:e.themes.light.textColor:e.themes.dark.textColor};
                `;default:return`
                    background-color: ${r||e.colors.primary};
                    color: ${o?o==="dark"?e.themes.dark.textColor:e.themes.light.textColor:e.themes.dark.textColor};
                `}}}

    ${({size:r})=>{switch(r){case"sm":return`
                    padding: 0.25rem 0.5rem;
                    font-size: 0.875rem;
                `;case"md":return`
                    padding: 0.5rem 1rem;
                    font-size: 1rem;
                `;case"lg":return`
                    padding: 0.75rem 1.5rem;
                    font-size: 1.25rem;
                `;default:return`
                    padding: 0.5rem 1rem;
                    font-size: 1rem;
                `}}}
`;function l({size:r="md",children:o,color:t,...s}){return n.jsx(i,{color:t,size:r,...s,children:o})}try{l.displayName="Button",l.__docgenInfo={description:"",displayName:"Button",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}}}}}catch{}function p(r){const o=Math.floor(r/60),t=Math.floor(r-o*60);return[o,t].map(a=>a<10?"0"+a:a).join(":")}export{l as B,p as f};
