import{j as h}from"./jsx-runtime-DEdD30eg.js";import{r as k}from"./index-RYns6xqu.js";import{C as a}from"./Checkbox-BARkcREK.js";const u={title:"Atoms/Checkbox",component:a,parameters:{docs:{description:{component:"The Checkbox component allows users to make binary choices (checked/unchecked). It can optionally display a label next to the checkbox, making it useful for forms and selections."}}},argTypes:{label:{control:"text"}}},l=s=>{const[r,n]=k.useState(s.checked);return h.jsx(a,{...s,checked:r,onChange:d=>n(d)})},e=l.bind({});e.args={checked:!1,label:"Label Text"};var c,t,o;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const [isChecked, setIsChecked] = useState(args.checked);
  return <Checkbox {...args} checked={isChecked} onChange={checked => setIsChecked(checked)} />;
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,u as default};
