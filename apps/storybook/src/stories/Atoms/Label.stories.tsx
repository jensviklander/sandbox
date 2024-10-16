import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Label } from '@repo/ui/label';

export default {
  title: 'Atoms/Label',
  component: Label,
  parameters: {
    docs: {
      description: {
        component:
          'The Label component provides a text label for form elements like checkboxes or input fields. This story demonstrates the label without any associated form controls.'
      }
    }
  }
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof Label>> = (args) => {
  return <Label {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  htmlFor: 'example',
  labelText: 'Example Label'
};
