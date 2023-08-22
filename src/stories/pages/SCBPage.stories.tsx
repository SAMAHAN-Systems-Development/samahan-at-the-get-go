import type { Meta, StoryObj } from '@storybook/react';

import SCBPage from '@/app/samahan-central-board/page';

const meta: Meta<typeof SCBPage> = {
  title: 'pages/SCB Page',
  component: SCBPage,
};

export default meta;
type Story = StoryObj<typeof SCBPage>;

export const Primary: Story = {
  args: {},
  render: () => <SCBPage />,
};
