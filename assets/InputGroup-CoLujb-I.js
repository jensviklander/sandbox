import{j as r}from"./jsx-runtime-DEdD30eg.js";import{L as i}from"./Label-DdGI5c9p.js";import{I as m}from"./Input-BIEKA_Kb.js";const c="_inputGroup_1meor_1",d="_inputWrapper_1meor_7",_="_label_1meor_13",f="_errorMessage_1meor_18",s={inputGroup:c,inputWrapper:d,label:_,errorMessage:f},x=({id:a,labelText:o,type:p="text",placeholder:l,required:t=!1,error:e,onChange:u,onBlur:n})=>r.jsxs("div",{className:`${s.inputGroup} ${e?s.error:""}`,children:[r.jsx(i,{htmlFor:a,labelText:o}),r.jsx(m,{id:a,type:p,placeholder:l,onChange:u,onBlur:n,ariaInvalid:!!e,ariaRequired:t,required:t}),e&&r.jsx("span",{className:s.errorMessage,role:"alert",children:e})]});x.__docgenInfo={description:"",methods:[],displayName:"InputGroup",props:{type:{defaultValue:{value:"'text'",computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1}}};export{x as I};