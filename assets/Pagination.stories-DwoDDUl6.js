import{j as M}from"./jsx-runtime-DEdD30eg.js";import{P as b}from"./Pagination-BsoHWBOq.js";import{r as T}from"./index-RYns6xqu.js";import"./Link-CrVF2hWW.js";const E={title:"Molecules/Pagination",component:b,parameters:{docs:{description:{component:"The Pagination component allows users to navigate through different pages of data with support for first, last, previous, and next buttons."}}},argTypes:{currentPage:{control:"number",description:"The current active page."},totalPages:{control:"number",description:"The total number of pages."}}},g=e=>{const[f,I]=T.useState(e.currentPage||0),S=s=>{I(s),e.onPageChange(s)};return M.jsx(b,{...e,currentPage:f,onPageChange:S})},a=g.bind({});a.args={currentPage:0,totalPages:5,onPageChange:e=>console.log(`Page changed to: ${e}`)};const n=g.bind({});n.args={currentPage:0,totalPages:20,onPageChange:e=>console.log(`Page changed to: ${e}`)};const r=g.bind({});r.args={currentPage:5,totalPages:10,onPageChange:e=>console.log(`Page changed to: ${e}`)};const t=g.bind({});t.args={currentPage:2,totalPages:15,onPageChange:e=>console.log(`Page changed to: ${e}`)};var o,c,P;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState<number>(args.currentPage || 0);
  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
    args.onPageChange(pageIndex);
  };
  return <Pagination {...args} currentPage={currentPage} onPageChange={handlePageChange} />;
}`,...(P=(c=a.parameters)==null?void 0:c.docs)==null?void 0:P.source}}};var u,d,i;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState<number>(args.currentPage || 0);
  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
    args.onPageChange(pageIndex);
  };
  return <Pagination {...args} currentPage={currentPage} onPageChange={handlePageChange} />;
}`,...(i=(d=n.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,h,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState<number>(args.currentPage || 0);
  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
    args.onPageChange(pageIndex);
  };
  return <Pagination {...args} currentPage={currentPage} onPageChange={handlePageChange} />;
}`,...(l=(h=r.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var m,C,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState<number>(args.currentPage || 0);
  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
    args.onPageChange(pageIndex);
  };
  return <Pagination {...args} currentPage={currentPage} onPageChange={handlePageChange} />;
}`,...(x=(C=t.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const _=["Default","ManyPages","MiddlePage","WithFirstAndLast"];export{a as Default,n as ManyPages,r as MiddlePage,t as WithFirstAndLast,_ as __namedExportsOrder,E as default};
