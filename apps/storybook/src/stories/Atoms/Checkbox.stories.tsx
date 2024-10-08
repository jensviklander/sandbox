import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { Checkbox } from "@repo/ui/checkbox"; // Adjust the import path if necessary

export default {
  title: "Atoms/Checkbox",
  component: Checkbox,
  argTypes: {
    label: { control: "text" },
  },
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof Checkbox>> = (args) => {
  const [isChecked, setIsChecked] = useState(args.checked);

  return (
    <Checkbox
      {...args}
      checked={isChecked}
      onChange={(checked) => setIsChecked(checked)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  checked: false,
  label: "Label Text",
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  label: "Checked Checkbox",
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  checked: false,
  label: "",
};
