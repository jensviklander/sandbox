import{j as n}from"./jsx-runtime-DEdD30eg.js";import{D as A}from"./DataGridHeaderRow-CUlm6Wpe.js";import"./index-RYns6xqu.js";import"./DataGridHeaderCell-BJ9amRMZ.js";import"./IconButton-DEiGV72X.js";import"./Icon-DDJDM70X.js";import"./Checkbox-DcktYnRf.js";const _={title:"Molecules/DataGridHeaderRow",component:A,parameters:{docs:{description:{component:"The DataGridHeaderRow component renders the header row of a DataGrid. It can handle sorting, selection of all rows, and displays column headers based on the provided column definitions."}}},argTypes:{columns:{control:!1,description:"Array of column definitions to render as header cells"},enableSorting:{control:"boolean",description:"Enables sorting for the header cells"},selectable:{control:"boolean",description:"Shows a checkbox to select all rows if true"},onSelectAll:{control:!1,description:"Callback triggered when the 'Select All' checkbox is clicked"},onSortChange:{control:!1,description:"Callback triggered when a sortable column header is clicked"},isSelectAllChecked:{control:"boolean",description:"Determines if the 'Select All' checkbox is checked"},sorting:{control:!1,description:"Current sorting state of the columns"}}},o=[{id:"name",header:"Name",type:"string"},{id:"age",header:"Age",type:"number"},{id:"profession",header:"Profession",type:"string"}],l=G=>n.jsx("table",{children:n.jsx("thead",{children:n.jsx(A,{...G})})}),e=l.bind({});e.args={columns:o,enableSorting:!1,selectable:!1};const r=l.bind({});r.args={columns:o,enableSorting:!1,selectable:!0,isSelectAllChecked:!1};const a=l.bind({});a.args={columns:o,enableSorting:!0,sorting:[{id:"name",desc:!1},{id:"age",desc:!1},{id:"profession",desc:!1}]};const s=l.bind({});s.args={columns:o,enableSorting:!0,selectable:!0,isSelectAllChecked:!1,sorting:[{id:"name",desc:!1},{id:"age",desc:!1},{id:"profession",desc:!0}]};const t=l.bind({});t.args={columns:o,borderless:!0};var c,d,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`args => <table>
    <thead>
      <DataGridHeaderRow {...args} />
    </thead>
  </table>`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,m,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`args => <table>
    <thead>
      <DataGridHeaderRow {...args} />
    </thead>
  </table>`,...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var g,h,u;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => <table>
    <thead>
      <DataGridHeaderRow {...args} />
    </thead>
  </table>`,...(u=(h=a.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var f,S,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => <table>
    <thead>
      <DataGridHeaderRow {...args} />
    </thead>
  </table>`,...(w=(S=s.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var D,k,x;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`args => <table>
    <thead>
      <DataGridHeaderRow {...args} />
    </thead>
  </table>`,...(x=(k=t.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const B=["Default","Selectable","Sortable","SortableAndSelectable","Borderless"];export{t as Borderless,e as Default,r as Selectable,a as Sortable,s as SortableAndSelectable,B as __namedExportsOrder,_ as default};
