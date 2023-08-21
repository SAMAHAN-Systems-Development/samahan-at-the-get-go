import type { Meta, StoryObj } from '@storybook/react';

import SCBHeader from '@/components/ui/SCB/SCBHeader';

const meta: Meta<typeof SCBHeader> = {
  title: 'SCB Header',
  component: SCBHeader,
};

export default meta;
type Story = StoryObj<typeof SCBHeader>;

export const Primary: Story = {
  render: () => <SCBHeader />,
};
