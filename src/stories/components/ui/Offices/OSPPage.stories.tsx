import type { Meta, StoryObj } from '@storybook/react';

import OSPPage from '@/components/Offices/OSPPage';

const meta: Meta<typeof OSPPage> = {
  title: 'Offices/OSP Page',
  component: OSPPage,
};

export default meta;
type Story = StoryObj<typeof OSPPage>;

export const Primary: Story = {
  render: () => <OSPPage />,
};
