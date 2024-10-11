import{j as l}from"./jsx-runtime-DEdD30eg.js";import{D as R}from"./DataGridRow-D1GMMc7E.js";import"./index-RYns6xqu.js";import"./DataGridCell-DX3Kx3Mt.js";import"./IconButton-DFJlCFJO.js";import"./Icon-OfwyNSNm.js";import"./Checkbox-BARkcREK.js";const s=[{id:"name",header:"Name",accessorKey:"name",type:"string",width:160},{id:"age",header:"Age",accessorKey:"age",type:"number",width:80},{id:"profession",header:"Profession",accessorKey:"profession",type:"string"}],T={title:"Molecules/DataGridRow",component:R,parameters:{docs:{description:{component:"The DataGridRow component renders a row of data in the DataGrid. It supports selecting rows, displaying cell data, and handling delete actions."}}},argTypes:{rowData:{control:!1,description:"The data for a specific row, displayed in the cells"},columns:{control:!1},selectable:{control:"boolean",description:"Determines if the row should have a checkbox for selection"},isSelected:{control:"boolean",description:"Indicates if the row is currently selected"},onDeleteRow:{control:!1,description:"Callback triggered when the delete button is clicked"},onSelectRow:{control:!1,description:"Callback triggered when the row selection checkbox is clicked"},showDeleteButton:{control:"boolean",description:"Determines if the delete button is shown for the row"},rowIndex:{control:!1,description:"The index of the row in the grid"}}},n={id:"1",name:"John Doe",age:30,profession:"Architect"},c=e=>l.jsx("table",{children:l.jsx("tbody",{children:l.jsx(R,{...e})})}),o=c.bind({});o.args={rowData:n,columns:s};const t=c.bind({});t.args={rowData:n,columns:s,selectable:!0,onSelectRow:e=>console.log(`Row selected: ${e}`)};const r=c.bind({});r.args={rowData:n,columns:s,showDeleteButton:!0,onDeleteRow:e=>console.log(`Delete row with ID: ${e}`)};const a=c.bind({});a.args={rowData:n,columns:s,rowIndex:3,selectable:!0,isSelected:!0,showDeleteButton:!0,onDeleteRow:e=>console.log(`Delete row with ID: ${e}`),onSelectRow:e=>console.log(`Row selected: ${e}`)};var i,d,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`args => <table>
    <tbody>
      <DataGridRow {...args} />
    </tbody>
  </table>`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var b,m,w;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`args => <table>
    <tbody>
      <DataGridRow {...args} />
    </tbody>
  </table>`,...(w=(m=t.parameters)==null?void 0:m.docs)==null?void 0:w.source}}};var h,g,u;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`args => <table>
    <tbody>
      <DataGridRow {...args} />
    </tbody>
  </table>`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var D,f,y;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`args => <table>
    <tbody>
      <DataGridRow {...args} />
    </tbody>
  </table>`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const A=["Default","Selectable","WithDeleteButton","SelectableAndDeletable"];export{o as Default,t as Selectable,a as SelectableAndDeletable,r as WithDeleteButton,A as __namedExportsOrder,T as default};
