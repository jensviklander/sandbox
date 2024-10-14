import{j as o}from"./jsx-runtime-DEdD30eg.js";import{D}from"./DataGridHeaderCell-7J9JfbmQ.js";import"./index-RYns6xqu.js";import"./IconButton-sPui8N5W.js";import"./Icon-DDJDM70X.js";const j={title:"Molecules/DataGridHeaderCell",component:D,parameters:{docs:{description:{component:"The DataGridHeaderCell component represents a header cell in the DataGrid, with optional sorting functionality."}}},argTypes:{label:{control:"text",description:"The label displayed in the header cell"},sortable:{control:"boolean",description:"Determines if the header cell is sortable"},sortOrder:{control:{type:"select",options:["asc","desc","none"]},description:"Defines the current sort order (asc, desc, or none)"},onSort:{control:!1,description:"Callback when the sort button is clicked"},width:{control:"number",description:"The width of the header cell"}}},s=f=>o.jsx("table",{children:o.jsx("thead",{children:o.jsx("tr",{children:o.jsx(D,{...f})})})}),e=s.bind({});e.args={label:"Name",sortable:!0,sortOrder:"none",width:180,onSort:()=>console.log("Sort clicked")};const r=s.bind({});r.args={label:"Age",sortable:!0,sortOrder:"asc",width:180,onSort:()=>console.log("Sorting in ascending order")};const t=s.bind({});t.args={label:"Profession",sortable:!0,sortOrder:"desc",width:180,onSort:()=>console.log("Sorting in descending order")};const a=s.bind({});a.args={label:"Location",sortable:!1,width:180};var n,l,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`args => <table>
    <thead>
      <tr>
        <DataGridHeaderCell {...args} />
      </tr>
    </thead>
  </table>`,...(d=(l=e.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,i,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => <table>
    <thead>
      <tr>
        <DataGridHeaderCell {...args} />
      </tr>
    </thead>
  </table>`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var h,m,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => <table>
    <thead>
      <tr>
        <DataGridHeaderCell {...args} />
      </tr>
    </thead>
  </table>`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var g,u,S;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => <table>
    <thead>
      <tr>
        <DataGridHeaderCell {...args} />
      </tr>
    </thead>
  </table>`,...(S=(u=a.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};const O=["Default","SortedAsc","SortedDesc","NonSortable"];export{e as Default,a as NonSortable,r as SortedAsc,t as SortedDesc,O as __namedExportsOrder,j as default};