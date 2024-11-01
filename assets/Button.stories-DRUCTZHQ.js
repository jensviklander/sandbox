import{j as k}from"./jsx-runtime-DEdD30eg.js";import{B as S}from"./Button-D6nhreQt.js";import"./index-RYns6xqu.js";const P={title:"Atoms/Button",component:S,parameters:{docs:{description:{component:"The Button component is a versatile and reusable component for various actions, supporting different variants like primary, secondary, and danger. It can be used in forms, dialogs, and other interactive elements."}}},argTypes:{variant:{control:{type:"select",options:["primary","secondary","danger"]},description:"Select the button variant",defaultValue:"primary"},type:{control:{type:"select",options:["button","submit","reset"]},description:"Select the button type"},disabled:{control:"boolean",description:"Disables the button if true"},ariaLabel:{control:"text",description:"Accessible label for the button"},children:{control:"text",description:"Text content or child element(s) inside the button"}}},s=v=>k.jsx(S,{...v}),e=s.bind({});e.args={children:"Default Button"};const r=s.bind({});r.args={id:"primary-button",children:"Primary Button",variant:"primary",onClick:()=>alert("Primary button clicked!")};const t=s.bind({});t.args={id:"secondary-button",children:"Secondary Button",variant:"secondary",onClick:()=>alert("Secondary button clicked!")};const a=s.bind({});a.args={id:"danger-button",children:"Danger Button",variant:"danger",onClick:()=>alert("Danger button clicked!")};const o=s.bind({});o.args={id:"disabled-button",children:"Disabled Button",variant:"primary",disabled:!0,onClick:()=>alert("This button is disabled")};var n,i,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"args => <Button {...args} />",...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:"args => <Button {...args} />",...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,m,b;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:"args => <Button {...args} />",...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var g,y,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"args => <Button {...args} />",...(h=(y=a.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var B,f,D;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:"args => <Button {...args} />",...(D=(f=o.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};const j=["Default","Primary","Secondary","Danger","Disabled"];export{a as Danger,e as Default,o as Disabled,r as Primary,t as Secondary,j as __namedExportsOrder,P as default};