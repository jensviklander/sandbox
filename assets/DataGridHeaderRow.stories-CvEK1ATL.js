import{j as d}from"./jsx-runtime-DEdD30eg.js";import{D as C}from"./DataGridHeaderRow-C8SKe32V.js";import"./index-RYns6xqu.js";import"./DataGridHeaderCell-BJ9amRMZ.js";import"./IconButton-DEiGV72X.js";import"./Icon-DDJDM70X.js";import"./Checkbox-DcktYnRf.js";const v={title:"Molecules/DataGridHeaderRow",component:C,parameters:{docs:{description:{component:"The DataGridHeaderRow component renders the header row of a DataGrid. It can handle sorting, selection of all rows, and displays column headers based on the provided column definitions."}}},argTypes:{columns:{control:!1,description:"Array of column definitions to render as header cells"},enableSorting:{control:"boolean",description:"Enables sorting for the header cells"},selectable:{control:"boolean",description:"Shows a checkbox to select all rows if true"},onSelectAll:{control:!1,description:"Callback triggered when the 'Select All' checkbox is clicked"},onSortChange:{control:!1,description:"Callback triggered when a sortable column header is clicked"},isSelectAllChecked:{control:"boolean",description:"Determines if the 'Select All' checkbox is checked"},sorting:{control:!1,description:"Current sorting state of the columns"}}},e=[{id:"name",header:"Name",type:"string"},{id:"age",header:"Age",type:"number"},{id:"profession",header:"Profession",type:"string"}],r=y=>d.jsx("table",{children:d.jsx("thead",{children:d.jsx(C,{...y})})}),a=r.bind({});a.args={columns:e,enableSorting:!1,selectable:!1};const t=r.bind({});t.args={columns:e,enableSorting:!1,selectable:!0,isSelectAllChecked:!1};const s=r.bind({});s.args={columns:e,enableSorting:!0,sorting:[{id:"name",desc:!1},{id:"age",desc:!1},{id:"profession",desc:!1}]};const o=r.bind({});o.args={columns:e,enableSorting:!0,selectable:!0,isSelectAllChecked:!1,sorting:[{id:"name",desc:!1},{id:"age",desc:!1},{id:"profession",desc:!0}]};const l=r.bind({});l.args={columns:e,borderless:!0,showMultiDelete:!0,onDeleteSelected:()=>{}};const n=r.bind({});n.args={columns:e,showMultiDelete:!0,onDeleteSelected:()=>{}};var c,i,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`args => <table>
    <thead>
      <DataGridHeaderRow {...args} />
    </thead>
  </table>`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,b,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => <table>
    <thead>
      <DataGridHeaderRow {...args} />
    </thead>
  </table>`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var h,u,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`args => <table>
    <thead>
      <DataGridHeaderRow {...args} />
    </thead>
  </table>`,...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var S,D,w;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`args => <table>
    <thead>
      <DataGridHeaderRow {...args} />
    </thead>
  </table>`,...(w=(D=o.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var k,G,R;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`args => <table>
    <thead>
      <DataGridHeaderRow {...args} />
    </thead>
  </table>`,...(R=(G=l.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var x,A,H;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`args => <table>
    <thead>
      <DataGridHeaderRow {...args} />
    </thead>
  </table>`,...(H=(A=n.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};const I=["Default","Selectable","Sortable","SortableAndSelectable","Borderless","WithMultiDelete"];export{l as Borderless,a as Default,t as Selectable,s as Sortable,o as SortableAndSelectable,n as WithMultiDelete,I as __namedExportsOrder,v as default};
