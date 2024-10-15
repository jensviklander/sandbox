import{j as r}from"./jsx-runtime-DEdD30eg.js";import{D as d}from"./DataGridCell-Ihd9SvIX.js";import"./index-RYns6xqu.js";const u={title:"Atoms/DataGridCell",component:d,parameters:{docs:{description:{component:"The DataGridCell component is a table cell that displays content with a customizable width, used in the DataGrid component."}}},argTypes:{width:{control:"number",description:"Width of the cell in pixels"},children:{control:"text",description:"Content inside the cell"}}},c=p=>r.jsx("table",{children:r.jsx("tbody",{children:r.jsx("tr",{children:r.jsx(d,{...p})})})}),e=c.bind({});e.args={children:"Cell content"};const t=c.bind({});t.args={children:"Cell content",borderless:!0};var s,a,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => <table>
    <tbody>
      <tr>
        <DataGridCell {...args} />
      </tr>
    </tbody>
  </table>`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var n,l,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`args => <table>
    <tbody>
      <tr>
        <DataGridCell {...args} />
      </tr>
    </tbody>
  </table>`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const x=["Default","Borderless"];export{t as Borderless,e as Default,x as __namedExportsOrder,u as default};
