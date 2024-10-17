import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import { Radio } from '@repo/ui/radio';

export default {
  title: 'Atoms/Radio',
  component: Radio,
  parameters: {
    docs: {
      description: {
        component:
          'The Radio component allows users to select one option from a set. It is typically used in forms and selections where only one choice is allowed at a time within a group.'
      }
    }
  }
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof Radio>> = (args) => {
  const [isSelected, setIsSelected] = useState(args.checked);

  return (
    <Radio
      {...args}
      id="radio"
      name="radioGroup"
      checked={isSelected}
      onChange={(checked) => setIsSelected(checked)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  checked: false,
  ariaRequired: false,
  ariaInvalid: false
};
