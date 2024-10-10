import{j as e}from"./jsx-runtime-DEdD30eg.js";import{D as s}from"./DataGridCell-DX3Kx3Mt.js";import"./index-RYns6xqu.js";const p={title:"Organisms/DataGrid/Atoms/DataGridCell",component:s,parameters:{docs:{description:{component:"The DataGridCell component is a table cell that displays content with a customizable width, used in the DataGrid component."}}},argTypes:{width:{control:"number",description:"Width of the cell in pixels"},children:{control:"text",description:"Content inside the cell"}}},i=n=>e.jsx("table",{children:e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx(s,{...n})})})}),t=i.bind({});t.args={children:"Cell content"};var r,a,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`args => <table>
    <tbody>
      <tr>
        <DataGridCell {...args} />
      </tr>
    </tbody>
  </table>`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const m=["Default"];export{t as Default,m as __namedExportsOrder,p as default};
