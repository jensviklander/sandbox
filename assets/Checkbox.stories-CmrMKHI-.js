import{j as b}from"./jsx-runtime-DEdD30eg.js";import{r as x}from"./index-RYns6xqu.js";import{C as m}from"./Checkbox-BARkcREK.js";const j={title:"Atoms/Checkbox",component:m,argTypes:{label:{control:"text"}}},r=t=>{const[l,p]=x.useState(t.checked);return b.jsx(m,{...t,checked:l,onChange:g=>p(g)})},e=r.bind({});e.args={checked:!1,label:"Label Text"};const c=r.bind({});c.args={checked:!0,label:"Checked Checkbox"};const s=r.bind({});s.args={checked:!1,label:""};var a,o,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => {
  const [isChecked, setIsChecked] = useState(args.checked);
  return <Checkbox {...args} checked={isChecked} onChange={checked => setIsChecked(checked)} />;
}`,...(d=(o=e.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var h,n,k;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const [isChecked, setIsChecked] = useState(args.checked);
  return <Checkbox {...args} checked={isChecked} onChange={checked => setIsChecked(checked)} />;
}`,...(k=(n=c.parameters)==null?void 0:n.docs)==null?void 0:k.source}}};var C,i,u;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`args => {
  const [isChecked, setIsChecked] = useState(args.checked);
  return <Checkbox {...args} checked={isChecked} onChange={checked => setIsChecked(checked)} />;
}`,...(u=(i=s.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const E=["Default","Checked","WithoutLabel"];export{c as Checked,e as Default,s as WithoutLabel,E as __namedExportsOrder,j as default};
