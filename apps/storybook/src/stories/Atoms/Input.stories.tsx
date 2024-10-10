import { Meta, StoryFn } from "@storybook/react";
import { Input } from "@repo/ui/input";

export default {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component:
          "The Input component allows users to input text data. It can be customized with placeholder text and handles change events, making it suitable for form inputs.",
      },
    },
  },
  argTypes: {
    placeholder: { control: "text" },
  },
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof Input>> = (args) => {
  return <Input {...args} onChange={() => {}} placeholder={args.placeholder} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter text...",
};
