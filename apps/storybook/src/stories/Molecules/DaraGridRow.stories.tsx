import { Meta, StoryFn } from "@storybook/react";
import { DataGridRow } from "@repo/ui/datagridrow";
import { ExtendedColumnDef } from "@repo/ui/types";

interface Person {
  id: string;
  name: string;
  age: number;
  profession: string;
}

const columns: ExtendedColumnDef<Person, unknown>[] = [
  {
    id: "name",
    header: "Name",
    accessorKey: "name",
    type: "string",
    width: 160,
  },
  {
    id: "age",
    header: "Age",
    accessorKey: "age",
    type: "number",
    width: 80,
  },
  {
    id: "profession",
    header: "Profession",
    accessorKey: "profession",
    type: "string",
  },
];

export default {
  title: "Molecules/DataGridRow",
  component: DataGridRow,
  parameters: {
    docs: {
      description: {
        component:
          "The DataGridRow component renders a row of data in the DataGrid. It supports selecting rows, displaying cell data, and handling delete actions.",
      },
    },
  },
  argTypes: {
    rowData: {
      control: false,
      description: "The data for a specific row, displayed in the cells",
    },
    columns: {
      control: false,
    },
    selectable: {
      control: "boolean",
      description: "Determines if the row should have a checkbox for selection",
    },
    isSelected: {
      control: "boolean",
      description: "Indicates if the row is currently selected",
    },
    onDeleteRow: {
      control: false,
      description: "Callback triggered when the delete button is clicked",
    },
    onSelectRow: {
      control: false,
      description:
        "Callback triggered when the row selection checkbox is clicked",
    },
    showDeleteButton: {
      control: "boolean",
      description: "Determines if the delete button is shown for the row",
    },
    rowIndex: {
      control: false,
      description: "The index of the row in the grid",
    },
  },
} as Meta;

const rowData: Person = {
  id: "1",
  name: "John Doe",
  age: 30,
  profession: "Architect",
};

const Template: StoryFn<React.ComponentProps<typeof DataGridRow<Person>>> = (
  args
) => (
  <table>
    <tbody>
      <DataGridRow {...args} />
    </tbody>
  </table>
);

export const Default = Template.bind({});
Default.args = {
  rowData,
  columns,
};

export const Selectable = Template.bind({});
Selectable.args = {
  rowData,
  columns,
  selectable: true,
  onSelectRow: (checked: boolean) => console.log(`Row selected: ${checked}`),
};

export const WithDeleteButton = Template.bind({});
WithDeleteButton.args = {
  rowData,
  columns,
  showDeleteButton: true,
  onDeleteRow: (rowId: string) => console.log(`Delete row with ID: ${rowId}`),
};

export const SelectableAndDeletable = Template.bind({});
SelectableAndDeletable.args = {
  rowData,
  columns,
  rowIndex: 3,
  selectable: true,
  isSelected: true,
  showDeleteButton: true,
  onDeleteRow: (rowId: string) => console.log(`Delete row with ID: ${rowId}`),
  onSelectRow: (checked: boolean) => console.log(`Row selected: ${checked}`),
};

export const Borderless = Template.bind({});
Borderless.args = {
  rowData,
  columns,
  borderless: true,
};
