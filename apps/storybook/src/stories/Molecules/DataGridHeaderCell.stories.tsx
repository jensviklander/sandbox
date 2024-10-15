import { Meta, StoryFn } from '@storybook/react';
import { DataGridHeaderCell } from '@repo/ui/datagridheadercell';

export default {
  title: 'Molecules/DataGridHeaderCell',
  component: DataGridHeaderCell,
  parameters: {
    docs: {
      description: {
        component:
          'The DataGridHeaderCell component represents a header cell in the DataGrid, with optional sorting functionality.'
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'The label displayed in the header cell'
    },
    sortable: {
      control: 'boolean',
      description: 'Determines if the header cell is sortable'
    },
    sortOrder: {
      control: {
        type: 'select',
        options: ['asc', 'desc', 'none']
      },
      description: 'Defines the current sort order (asc, desc, or none)'
    },
    onSort: {
      control: false,
      description: 'Callback when the sort button is clicked'
    },
    width: {
      control: 'number',
      description: 'The width of the header cell'
    }
  }
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof DataGridHeaderCell>> = (
  args
) => (
  <table>
    <thead>
      <tr>
        <DataGridHeaderCell {...args} />
      </tr>
    </thead>
  </table>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Name',
  sortable: true,
  sortOrder: 'none',
  width: 180,
  onSort: () => console.log('Sort clicked')
};

export const SortedAsc = Template.bind({});
SortedAsc.args = {
  label: 'Age',
  sortable: true,
  sortOrder: 'asc',
  width: 180,
  onSort: () => console.log('Sorting in ascending order')
};

export const SortedDesc = Template.bind({});
SortedDesc.args = {
  label: 'Profession',
  sortable: true,
  sortOrder: 'desc',
  width: 180,
  onSort: () => console.log('Sorting in descending order')
};

export const NonSortable = Template.bind({});
NonSortable.args = {
  label: 'Location',
  sortable: false,
  width: 180
};

export const Borderless = Template.bind({});
Borderless.args = {
  label: 'Name',
  borderless: true
};
