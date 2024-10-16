import { Meta, StoryFn } from '@storybook/react';
import { Button } from '@repo/ui/button';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'The Button component is a versatile and reusable component for various actions, supporting different variants like primary, secondary, and danger. It can be used in forms, dialogs, and other interactive elements.'
      }
    }
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'danger']
      },
      description: 'Select the button variant',
      defaultValue: 'primary'
    },
    type: {
      control: {
        type: 'select',
        options: ['button', 'submit', 'reset']
      },
      description: 'Select the button type'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button if true'
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for the button'
    },
    children: {
      control: 'text',
      description: 'Text content or child element(s) inside the button'
    }
  }
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Default Button'
};

export const Primary = Template.bind({});
Primary.args = {
  id: 'primary-button',
  children: 'Primary Button',
  variant: 'primary',
  onClick: () => alert('Primary button clicked!')
};

export const Secondary = Template.bind({});
Secondary.args = {
  id: 'secondary-button',
  children: 'Secondary Button',
  variant: 'secondary',
  onClick: () => alert('Secondary button clicked!')
};

export const Danger = Template.bind({});
Danger.args = {
  id: 'danger-button',
  children: 'Danger Button',
  variant: 'danger',
  onClick: () => alert('Danger button clicked!')
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'disabled-button',
  children: 'Disabled Button',
  variant: 'primary',
  disabled: true,
  onClick: () => alert('This button is disabled')
};
