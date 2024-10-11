import { Meta, StoryFn } from "@storybook/react";
import { Pagination } from "@repo/ui/pagination";
import { useState } from "react";

export default {
  title: "Molecules/Pagination",
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component:
          "The Pagination component allows users to navigate through different pages of data with support for first, last, previous, and next buttons.",
      },
    },
  },
  argTypes: {
    currentPage: { control: "number", description: "The current active page." },
    totalPages: {
      control: "number",
      description: "The total number of pages.",
    },
  },
} as Meta;

const Template: StoryFn<React.ComponentProps<typeof Pagination>> = (args) => {
  const [currentPage, setCurrentPage] = useState<number>(args.currentPage || 0);

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
    args.onPageChange(pageIndex);
  };

  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  currentPage: 0,
  totalPages: 5,
  onPageChange: (pageIndex: number) =>
    console.log(`Page changed to: ${pageIndex}`),
};

export const ManyPages = Template.bind({});
ManyPages.args = {
  currentPage: 0,
  totalPages: 20,
  onPageChange: (pageIndex: number) =>
    console.log(`Page changed to: ${pageIndex}`),
};

export const MiddlePage = Template.bind({});
MiddlePage.args = {
  currentPage: 5,
  totalPages: 10,
  onPageChange: (pageIndex: number) =>
    console.log(`Page changed to: ${pageIndex}`),
};

export const WithFirstAndLast = Template.bind({});
WithFirstAndLast.args = {
  currentPage: 2,
  totalPages: 15,
  onPageChange: (pageIndex: number) =>
    console.log(`Page changed to: ${pageIndex}`),
};
