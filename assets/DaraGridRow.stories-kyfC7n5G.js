import{j as i}from"./jsx-runtime-DEdD30eg.js";import{D as B}from"./DataGridRow-Bn2EKrpQ.js";import"./index-RYns6xqu.js";import"./DataGridCell-DPrRWhNq.js";import"./IconButton-DEiGV72X.js";import"./Icon-DDJDM70X.js";import"./Checkbox-DcktYnRf.js";const n=[{id:"name",header:"Name",accessorKey:"name",type:"string",width:160},{id:"age",header:"Age",accessorKey:"age",type:"number",width:80},{id:"profession",header:"Profession",accessorKey:"profession",type:"string"}],_={title:"Molecules/DataGridRow",component:B,parameters:{docs:{description:{component:"The DataGridRow component renders a row of data in the DataGrid. It supports selecting rows, displaying cell data, and handling delete actions."}}},argTypes:{rowData:{control:!1,description:"The data for a specific row, displayed in the cells"},columns:{control:!1},selectable:{control:"boolean",description:"Determines if the row should have a checkbox for selection"},isSelected:{control:"boolean",description:"Indicates if the row is currently selected"},onDeleteRow:{control:!1,description:"Callback triggered when the delete button is clicked"},onSelectRow:{control:!1,description:"Callback triggered when the row selection checkbox is clicked"},showDeleteButton:{control:"boolean",description:"Determines if the delete button is shown for the row"},rowIndex:{control:!1,description:"The index of the row in the grid"}}},c={id:"1",name:"John Doe",age:30,profession:"Architect"},l=e=>i.jsx("table",{children:i.jsx("tbody",{children:i.jsx(B,{...e})})}),o=l.bind({});o.args={rowData:c,columns:n};const t=l.bind({});t.args={rowData:c,columns:n,selectable:!0,onSelectRow:e=>console.log(`Row selected: ${e}`)};const r=l.bind({});r.args={rowData:c,columns:n,showDeleteButton:!0,onDeleteRow:e=>console.log(`Delete row with ID: ${e}`)};const s=l.bind({});s.args={rowData:c,columns:n,rowIndex:3,selectable:!0,isSelected:!0,showDeleteButton:!0,onDeleteRow:e=>console.log(`Delete row with ID: ${e}`),onSelectRow:e=>console.log(`Row selected: ${e}`)};const a=l.bind({});a.args={rowData:c,columns:n,borderless:!0};var d,p,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`args => <table>
    <tbody>
      <DataGridRow {...args} />
    </tbody>
  </table>`,...(b=(p=o.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var m,w,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`args => <table>
    <tbody>
      <DataGridRow {...args} />
    </tbody>
  </table>`,...(g=(w=t.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var u,h,D;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`args => <table>
    <tbody>
      <DataGridRow {...args} />
    </tbody>
  </table>`,...(D=(h=r.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};var f,y,R;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => <table>
    <tbody>
      <DataGridRow {...args} />
    </tbody>
  </table>`,...(R=(y=s.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var S,x,G;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`args => <table>
    <tbody>
      <DataGridRow {...args} />
    </tbody>
  </table>`,...(G=(x=a.parameters)==null?void 0:x.docs)==null?void 0:G.source}}};const C=["Default","Selectable","WithDeleteButton","SelectableAndDeletable","Borderless"];export{a as Borderless,o as Default,t as Selectable,s as SelectableAndDeletable,r as WithDeleteButton,C as __namedExportsOrder,_ as default};
