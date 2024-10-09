import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import DataGrid from "@repo/ui/datagrid";
import {
  ColumnDef as BaseColumnDef,
  AccessorFnColumnDef,
} from "@tanstack/react-table";

type ExtendedColumnDef<T, TValue> = BaseColumnDef<T, TValue> & {
  width?: number;
  type?: "string" | "number";
} & Partial<AccessorFnColumnDef<T, TValue>>;

export default {
  title: "Organisms/DataGrid",
  component: DataGrid,
  argTypes: {
    enableSorting: { control: "boolean" },
    enablePagination: { control: "boolean" },
    pageSize: { control: "number" },
    selectable: { control: "boolean" },
    showDeleteButton: { control: "boolean" },
  },
} as Meta;

type Person = {
  id: string;
  name: string;
  age: number;
  profession: string;
};

const sampleData: Person[] = [
  { id: "1", name: "John Doe", age: 30, profession: "Engineer" },
  { id: "2", name: "Jane Smith", age: 25, profession: "Designer" },
  { id: "3", name: "Mike Johnson", age: 35, profession: "Developer" },
  { id: "4", name: "Emily Brown", age: 28, profession: "QA Tester" },
  { id: "5", name: "Chris Evans", age: 40, profession: "System Administrator" },
  { id: "6", name: "Sara Parker", age: 32, profession: "Data Analyst" },
  { id: "7", name: "James Taylor", age: 29, profession: "Developer" },
  { id: "8", name: "Laura Green", age: 34, profession: "Scrum Master" },
  { id: "9", name: "Robert King", age: 27, profession: "Product Owner" },
];

const columns: ExtendedColumnDef<Person, unknown>[] = [
  {
    id: "name",
    accessorKey: "name",
    header: "Name",
    type: "string",
    width: 160,
  },
  {
    id: "age",
    accessorKey: "age",
    header: "Age",
    cell: (info) => <span>{info.getValue<number>()}</span>,
    type: "number",
    width: 80,
  },
  {
    id: "profession",
    accessorKey: "profession",
    header: "Profession",
    type: "string",
  },
];

const Template: StoryFn<React.ComponentProps<typeof DataGrid<Person>>> = (
  args
) => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const handleSelectRow = (rowId: string, checked: boolean) => {
    setSelectedRows((prevSelected) => {
      if (checked) {
        return [...prevSelected, rowId];
      } else {
        return prevSelected.filter((id) => id !== rowId);
      }
    });
  };

  return (
    <DataGrid
      {...args}
      data={sampleData}
      columns={columns}
      selectable={args.selectable}
      selectedRows={selectedRows}
      onSelectRow={handleSelectRow}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};

export const WithSorting = Template.bind({});
WithSorting.args = {
  enableSorting: true,
  pageSize: 5,
};

export const WithFilter = Template.bind({});
WithFilter.args = {
  enableSearch: true,
};

export const WithPagination = Template.bind({});
WithPagination.args = {
  enablePagination: true,
  pageSize: 2,
};

export const Selectable = Template.bind({});
Selectable.args = {
  pageSize: 5,
  selectable: true,
};

export const Deletable = Template.bind({});
Deletable.args = {
  showDeleteButton: true,
};

export const AllFeaturesOn = Template.bind({});
AllFeaturesOn.args = {
  enableSorting: true,
  pageSize: 2,
  enableSearch: true,
  enablePagination: true,
  selectable: true,
  showDeleteButton: true,
};
