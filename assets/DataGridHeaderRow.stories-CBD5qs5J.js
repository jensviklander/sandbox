import{j as n}from"./jsx-runtime-DEdD30eg.js";import{D as w}from"./DataGridHeaderRow-CaS_pGbq.js";import"./index-RYns6xqu.js";import"./DataGridHeaderCell-DMggEn0A.js";import"./IconButton-DFJlCFJO.js";import"./Icon-OfwyNSNm.js";import"./Checkbox-BARkcREK.js";const C={title:"Organisms/DataGrid/Molecules/DataGridHeaderRow",component:w,parameters:{docs:{description:{component:"The DataGridHeaderRow component renders the header row of a DataGrid. It can handle sorting, selection of all rows, and displays column headers based on the provided column definitions."}}},argTypes:{columns:{control:!1,description:"Array of column definitions to render as header cells"},enableSorting:{control:"boolean",description:"Enables sorting for the header cells"},selectable:{control:"boolean",description:"Shows a checkbox to select all rows if true"},onSelectAll:{control:!1,description:"Callback triggered when the 'Select All' checkbox is clicked"},onSortChange:{control:!1,description:"Callback triggered when a sortable column header is clicked"},isSelectAllChecked:{control:"boolean",description:"Determines if the 'Select All' checkbox is checked"},sorting:{control:!1,description:"Current sorting state of the columns"}}},t=[{id:"name",header:"Name",type:"string"},{id:"age",header:"Age",type:"number"},{id:"profession",header:"Profession",type:"string"}],s=D=>n.jsx("table",{children:n.jsx("thead",{children:n.jsx(w,{...D})})}),e=s.bind({});e.args={columns:t,enableSorting:!1,selectable:!1};const r=s.bind({});r.args={columns:t,enableSorting:!1,selectable:!0,isSelectAllChecked:!1};const a=s.bind({});a.args={columns:t,enableSorting:!0,sorting:[{id:"name",sortOrder:"asc"},{id:"age",sortOrder:"none"},{id:"profession",sortOrder:"none"}]};const o=s.bind({});o.args={columns:t,enableSorting:!0,selectable:!0,isSelectAllChecked:!1,sorting:[{id:"name",sortOrder:"asc"},{id:"age",sortOrder:"none"},{id:"profession",sortOrder:"none"}]};var l,d,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`args => <table>
    <thead>
      <DataGridHeaderRow {...args} />
    </thead>
  </table>`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var i,p,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`args => <table>
    <thead>
      <DataGridHeaderRow {...args} />
    </thead>
  </table>`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var b,g,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`args => <table>
    <thead>
      <DataGridHeaderRow {...args} />
    </thead>
  </table>`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var u,f,S;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`args => <table>
    <thead>
      <DataGridHeaderRow {...args} />
    </thead>
  </table>`,...(S=(f=o.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const y=["Default","Selectable","Sortable","SortableAndSelectable"];export{e as Default,r as Selectable,a as Sortable,o as SortableAndSelectable,y as __namedExportsOrder,C as default};
