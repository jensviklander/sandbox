import { Meta, StoryFn } from '@storybook/react';
import { Icon } from '@repo/ui/icon';
import { IoTrash } from 'react-icons/io5';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

const iconMapping = {
  trash: IoTrash,
  sortAsc: FaSortUp,
  sortDesc: FaSortDown,
  sort: FaSort
};

export default {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    docs: {
      description: {
        component:
          'The Icon component displays a variety of icons for different purposes. It supports a selection of predefined icons that can be used to represent actions or data visually in the UI.'
      }
    }
  },
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(iconMapping),
      description: 'Select the icon to display'
    }
  }
} as Meta;

const Template: StoryFn<{ name: keyof typeof iconMapping }> = (args) => (
  <Icon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'trash'
};
