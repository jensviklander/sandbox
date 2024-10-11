import { Meta, StoryFn } from "@storybook/react";
import { DataGridHeaderRow } from "@repo/ui/datagridheaderrow";
import { ExtendedColumnDef } from "@repo/ui/types";

interface Person {
  id: string;
  name: string;
  age: number;
  profession: string;
}

export default {
  title: "Molecules/DataGridHeaderRow",
  component: DataGridHeaderRow,
  parameters: {
    docs: {
      description: {
        component:
          "The DataGridHeaderRow component renders the header row of a DataGrid. It can handle sorting, selection of all rows, and displays column headers based on the provided column definitions.",
      },
    },
  },
  argTypes: {
    columns: {
      control: false,
      description: "Array of column definitions to render as header cells",
    },
    enableSorting: {
      control: "boolean",
      description: "Enables sorting for the header cells",
    },
    selectable: {
      control: "boolean",
      description: "Shows a checkbox to select all rows if true",
    },
    onSelectAll: {
      control: false,
      description:
        "Callback triggered when the 'Select All' checkbox is clicked",
    },
    onSortChange: {
      control: false,
      description:
        "Callback triggered when a sortable column header is clicked",
    },
    isSelectAllChecked: {
      control: "boolean",
      description: "Determines if the 'Select All' checkbox is checked",
    },
    sorting: {
      control: false,
      description: "Current sorting state of the columns",
    },
  },
} as Meta;

// Using Person type for columns instead of any
const columns: ExtendedColumnDef<Person, unknown>[] = [
  {
    id: "name",
    header: "Name",
    type: "string",
  },
  {
    id: "age",
    header: "Age",
    type: "number",
  },
  {
    id: "profession",
    header: "Profession",
    type: "string",
  },
];

const Template: StoryFn<
  React.ComponentProps<typeof DataGridHeaderRow<Person>>
> = (args) => (
  <table>
    <thead>
      <DataGridHeaderRow {...args} />
    </thead>
  </table>
);

export const Default = Template.bind({});
Default.args = {
  columns,
  enableSorting: false,
  selectable: false,
};

export const Selectable = Template.bind({});
Selectable.args = {
  columns,
  enableSorting: false,
  selectable: true,
  isSelectAllChecked: false,
};

export const Sortable = Template.bind({});
Sortable.args = {
  columns,
  enableSorting: true,
  sorting: [
    { id: "name", sortOrder: "asc" },
    { id: "age", sortOrder: "none" },
    { id: "profession", sortOrder: "none" },
  ],
};

export const SortableAndSelectable = Template.bind({});
SortableAndSelectable.args = {
  columns,
  enableSorting: true,
  selectable: true,
  isSelectAllChecked: false,
  sorting: [
    { id: "name", sortOrder: "asc" },
    { id: "age", sortOrder: "none" },
    { id: "profession", sortOrder: "none" },
  ],
};
