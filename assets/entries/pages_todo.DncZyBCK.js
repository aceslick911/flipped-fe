import{r,j as e,i as d,a as p,L as u,b as f,c as h,o as T}from"../chunks/chunk-CFai_xTM.js";import{u as S}from"../chunks/chunk-KYnrco66.js";/* empty css                      */import"../chunks/chunk-B1sBh5yP.js";function y({initialTodoItems:a}){const[l,n]=r.useState(a),[i,s]=r.useState("");return e.jsxs(e.Fragment,{children:[e.jsx("ul",{children:l.map((t,o)=>e.jsx("li",{children:t.text},o))}),e.jsx("div",{children:e.jsxs("form",{onSubmit:async t=>{t.preventDefault(),n(o=>[...o,{text:i}])},children:[e.jsx("input",{type:"text",onChange:t=>s(t.target.value),value:i}),e.jsx("button",{type:"submit",children:"Add to-do"})]})})]})}function v(){const a=S();return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"To-do List"}),e.jsx(y,{initialTodoItems:a.todo})]})}const x=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"})),w={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:T}},onPageTransitionStart:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+onPageTransitionStart.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},onPageTransitionEnd:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+onPageTransitionEnd.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:f}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/todo/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},Layout:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/layouts/LayoutDefault.tsx",fileExportPathToShowToUser:[]}],valueSerialized:[{type:"pointer-import",value:u}]},title:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+config.ts",fileExportPathToShowToUser:["default","title"]},valueSerialized:{type:"js-serialized",value:"My Vike App"}},Wrapper:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/pages/+Wrapper.tsx",fileExportPathToShowToUser:[]}],valueSerialized:[{type:"plus-file",exportValues:p}]},Loading:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/Loading",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:d}}};export{w as configValuesSerialized};
