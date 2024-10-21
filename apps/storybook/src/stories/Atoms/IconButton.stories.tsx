import { Meta, StoryFn } from '@storybook/react';
import { IconButton } from '@repo/ui/iconbutton';
import { IoTrash } from 'react-icons/io5';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

const iconMapping = {
  trash: IoTrash,
  sort: FaSort,
  sortAsc: FaSortUp,
  sortDesc: FaSortDown
};

export default {
  title: 'Atoms/IconButton',
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component:
          'The IconButton component combines an icon with a button to trigger actions. It allows users to easily select from predefined icons and can be used for operations like sorting, deleting, and other UI interactions.'
      }
    }
  },
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: Object.keys(iconMapping) as Array<keyof typeof iconMapping>
      },
      description: 'Select the icon to display'
    },
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'danger']
      },
      description: 'The color type of the button',
      defaultValue: 'secondary'
    }
  }
} as Meta;

const Template: StoryFn<{
  icon: keyof typeof iconMapping;
  type: 'primary' | 'secondary' | 'danger';
}> = (args) => {
  return <IconButton {...args} onClick={() => alert('Button clicked!')} />;
};

export const Default = Template.bind({});
Default.args = {
  icon: 'trash'
};

export const PrimaryColor = Template.bind({});
PrimaryColor.args = {
  icon: 'trash',
  type: 'primary'
};

export const SecondaryColor = Template.bind({});
SecondaryColor.args = {
  icon: 'trash',
  type: 'secondary'
};

export const DangerColor = Template.bind({});
DangerColor.args = {
  icon: 'trash',
  type: 'danger'
};
