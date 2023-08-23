import Tag from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    primary: true,
    label: 'Tag'
  }
};
