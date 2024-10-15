import { Meta, StoryFn } from "@storybook/react";
import { DataGridCell } from "@repo/ui/datagridcell";

export default {
  title: "Atoms/DataGridCell",
  component: DataGridCell,
  parameters: {
    docs: {
      description: {
        component:
          "The DataGridCell component is a table cell that displays content with a customizable width, used in the DataGrid component.",
      },
    },
  },
  argTypes: {
    width: { control: "number", description: "Width of the cell in pixels" },
    children: { control: "text", description: "Content inside the cell" },
  },
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof DataGridCell>> = (args) => (
  <table>
    <tbody>
      <tr>
        <DataGridCell {...args} />
      </tr>
    </tbody>
  </table>
);

export const Default = Template.bind({});
Default.args = {
  children: "Cell content",
};

export const Borderless = Template.bind({});
Borderless.args = {
  children: "Cell content",
  borderless: true,
};
