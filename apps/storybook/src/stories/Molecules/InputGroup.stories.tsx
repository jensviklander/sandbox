import { Meta, StoryFn } from '@storybook/react';
import { InputGroup } from '@repo/ui/inputgroup';

export default {
  title: 'Molecules/InputGroup',
  component: InputGroup,
  parameters: {
    docs: {
      description: {
        component:
          'The InputGroup component combines a Label and an Input component into a unified form element. It supports different input types, placeholder text, required fields, and error handling.'
      }
    }
  },
  argTypes: {
    labelText: { control: 'text' },
    placeholder: { control: 'text' },
    type: {
      control: 'select',
      options: ['text', 'number', 'password', 'email', 'tel', 'url'],
      description: 'The type of input field'
    },
    required: { control: 'boolean' },
    error: { control: 'text', description: 'Error message for validation' }
  }
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof InputGroup>> = (args) => {
  return <InputGroup {...args} id="inputGroup" onChange={() => {}} />;
};

export const Default = Template.bind({});
Default.args = {
  labelText: 'Username',
  placeholder: 'Enter your username',
  type: 'text',
  required: false,
  error: ''
};
