import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import { RadioGroup } from '@repo/ui/radiogroup';

export default {
  title: 'Molecules/RadioGroup',
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component:
          'The RadioGroup component combines a Label and multiple Radio components into a unified form element. It supports validation through the required prop and displays an error message when validation fails.'
      }
    }
  },
  argTypes: {
    labelText: { control: 'text' },
    required: { control: 'boolean' },
    error: { control: 'text', description: 'Error message for validation' },
    options: { control: 'object', description: 'Array of radio options' }
  }
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof RadioGroup>> = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.selectedValue || '');

  return (
    <RadioGroup
      {...args}
      id="radioGroup"
      selectedValue={selectedValue}
      onChange={(value) => setSelectedValue(value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  labelText: 'Select your option',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ],
  selectedValue: '',
  required: false,
  error: ''
};
