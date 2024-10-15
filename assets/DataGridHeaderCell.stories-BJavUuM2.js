import{j as n}from"./jsx-runtime-DEdD30eg.js";import{D as x}from"./DataGridHeaderCell-DCp38Tej.js";import"./index-RYns6xqu.js";import"./IconButton-sPui8N5W.js";import"./Icon-DDJDM70X.js";const N={title:"Molecules/DataGridHeaderCell",component:x,parameters:{docs:{description:{component:"The DataGridHeaderCell component represents a header cell in the DataGrid, with optional sorting functionality."}}},argTypes:{label:{control:"text",description:"The label displayed in the header cell"},sortable:{control:"boolean",description:"Determines if the header cell is sortable"},sortOrder:{control:{type:"select",options:["asc","desc","none"]},description:"Defines the current sort order (asc, desc, or none)"},onSort:{control:!1,description:"Callback when the sort button is clicked"},width:{control:"number",description:"The width of the header cell"}}},s=H=>n.jsx("table",{children:n.jsx("thead",{children:n.jsx("tr",{children:n.jsx(x,{...H})})})}),e=s.bind({});e.args={label:"Name",sortable:!0,sortOrder:"none",width:180,onSort:()=>console.log("Sort clicked")};const r=s.bind({});r.args={label:"Age",sortable:!0,sortOrder:"asc",width:180,onSort:()=>console.log("Sorting in ascending order")};const t=s.bind({});t.args={label:"Profession",sortable:!0,sortOrder:"desc",width:180,onSort:()=>console.log("Sorting in descending order")};const a=s.bind({});a.args={label:"Location",sortable:!1,width:180};const o=s.bind({});o.args={label:"Name",borderless:!0};var l,d,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => <table>
    <thead>
      <tr>
        <DataGridHeaderCell {...args} />
      </tr>
    </thead>
  </table>`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var i,p,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => <table>
    <thead>
      <tr>
        <DataGridHeaderCell {...args} />
      </tr>
    </thead>
  </table>`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var b,h,g;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`args => <table>
    <thead>
      <tr>
        <DataGridHeaderCell {...args} />
      </tr>
    </thead>
  </table>`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,S,D;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => <table>
    <thead>
      <tr>
        <DataGridHeaderCell {...args} />
      </tr>
    </thead>
  </table>`,...(D=(S=a.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var f,C,G;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`args => <table>
    <thead>
      <tr>
        <DataGridHeaderCell {...args} />
      </tr>
    </thead>
  </table>`,...(G=(C=o.parameters)==null?void 0:C.docs)==null?void 0:G.source}}};const k=["Default","SortedAsc","SortedDesc","NonSortable","Borderless"];export{o as Borderless,e as Default,a as NonSortable,r as SortedAsc,t as SortedDesc,k as __namedExportsOrder,N as default};
