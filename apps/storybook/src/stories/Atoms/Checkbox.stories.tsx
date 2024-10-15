import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import { Checkbox } from '@repo/ui/checkbox';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          'The Checkbox component allows users to make binary choices (checked/unchecked). It can optionally display a label next to the checkbox, making it useful for forms and selections.'
      }
    }
  },
  argTypes: {
    label: { control: 'text' }
  }
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
  label: 'Label Text'
};
