import { Meta, StoryFn } from "@storybook/react";
import { DataGridControlMenu } from "@repo/ui/datagridcontrolmenu";

export default {
  title: "Molecules/DataGridControlMenu",
  component: DataGridControlMenu,
  parameters: {
    docs: {
      description: {
        component:
          "The DataGridControlMenu component allows users to search within a DataGrid. It contains an input field that triggers the `onSearch` callback with the entered search query.",
      },
    },
  },
  argTypes: {
    onSearch: {
      control: false,
      description: "Triggered when a search is performed",
    },
  },
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof DataGridControlMenu>> = (
  args
) => <DataGridControlMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  onSearch: (query: string) => {
    console.log("Search performed:", query);
  },
};
