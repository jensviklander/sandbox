import { Meta, StoryFn } from '@storybook/react';
import { CheckboxGroup } from '@repo/ui/checkboxgroup';

export default {
  title: 'Molecules/CheckboxGroup',
  component: CheckboxGroup,
  parameters: {
    docs: {
      description: {
        component:
          'The CheckboxGroup component combines a Label and an Checkbox component into a unified form element. It support some validation with required prop and error.'
      }
    }
  },
  argTypes: {
    labelText: { control: 'text' },
    required: { control: 'boolean' },
    error: { control: 'text', description: 'Error message for validation' }
  }
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof CheckboxGroup>> = (
  args
) => {
  return <CheckboxGroup {...args} id="checkboxGroup" onChange={() => {}} />;
};

export const Default = Template.bind({});
Default.args = {
  labelText: 'Accept terms',
  required: false,
  error: ''
};
