import { Meta, StoryFn } from "@storybook/react";
import { Link } from "@repo/ui/link";

export default {
  title: "Atoms/Link",
  component: Link,
  parameters: {
    docs: {
      description: {
        component:
          "The Link component provides an anchor tag that supports click handling, optional disabling, and custom styles. It prevents default behavior and allows for custom event handling.",
      },
    },
  },
  argTypes: {
    href: { control: "text" },
    isDisabled: { control: "boolean" },
    children: { control: "text" },
  },
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof Link>> = (args) => (
  <Link {...args} />
);

export const Default = Template.bind({});
Default.args = {
  href: "#",
  isDisabled: false,
  children: "Click me",
};

export const Disabled = Template.bind({});
Disabled.args = {
  href: "#",
  isDisabled: true,
  children: "Disabled Link",
};
