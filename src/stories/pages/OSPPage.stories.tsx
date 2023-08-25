import type { Meta, StoryObj } from '@storybook/react';

import OSPPage from '@/app/offices/office-of-the-president/page';

const meta: Meta<typeof OSPPage> = {
  title: 'pages/OSP Page',
  component: OSPPage,
};

export default meta;
type Story = StoryObj<typeof OSPPage>;

export const Primary: Story = {
  args: {},
  render: () => <OSPPage />,
};
