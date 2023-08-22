import type { Meta, StoryObj } from '@storybook/react';

import SCBPage from '@/components/SCB/SCBPage';

const meta: Meta<typeof SCBPage> = {
  title: 'UI/SCB/SCB Page',
  component: SCBPage,
};

export default meta;
type Story = StoryObj<typeof SCBPage>;

export const Primary: Story = {
  args: {},
  render: () => <SCBPage />,
};
