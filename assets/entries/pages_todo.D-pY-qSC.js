import{r,j as e,i as s,L as p,a as u,b as f,o as h}from"../chunks/chunk-3L47jkbV.js";import{u as T}from"../chunks/chunk-B_XFgE3d.js";/* empty css                      */import"../chunks/chunk-B1sBh5yP.js";function S({initialTodoItems:a}){const[n,l]=r.useState(a),[i,d]=r.useState("");return e.jsxs(e.Fragment,{children:[e.jsx("ul",{children:n.map((t,o)=>e.jsx("li",{children:t.text},o))}),e.jsx("div",{children:e.jsxs("form",{onSubmit:async t=>{t.preventDefault(),l(o=>[...o,{text:i}])},children:[e.jsx("input",{type:"text",onChange:t=>d(t.target.value),value:i}),e.jsx("button",{type:"submit",children:"Add to-do"})]})})]})}function y(){const a=T();return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"To-do List"}),e.jsx(S,{initialTodoItems:a.todo})]})}const v=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),P={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:h}},onPageTransitionStart:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+onPageTransitionStart.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},onPageTransitionEnd:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+onPageTransitionEnd.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:u}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/todo/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:v}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},Layout:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/layouts/LayoutDefault.tsx",fileExportPathToShowToUser:[]}],valueSerialized:[{type:"pointer-import",value:p}]},title:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+config.ts",fileExportPathToShowToUser:["default","title"]},valueSerialized:{type:"js-serialized",value:"My Vike App"}},Loading:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/Loading",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:s}}};export{P as configValuesSerialized};
