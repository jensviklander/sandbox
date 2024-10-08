import { Meta, StoryFn } from "@storybook/react";
import { IconButton } from "@repo/ui/iconbutton";
import { IoTrash } from "react-icons/io5";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

const iconMapping = {
  trash: IoTrash,
  sort: FaSort,
  sortAsc: FaSortUp,
  sortDesc: FaSortDown,
};

export default {
  title: "Atoms/IconButton",
  component: IconButton,
  argTypes: {
    icon: {
      control: {
        type: "select",
        options: Object.keys(iconMapping) as Array<keyof typeof iconMapping>,
      },
      description: "Select the icon to display",
    },
  },
} as Meta;

const Template: StoryFn<{ icon: keyof typeof iconMapping }> = (args) => (
  <IconButton {...args} onClick={() => {}} />
);

export const Default = Template.bind({});
Default.args = {
  icon: "trash",
};
