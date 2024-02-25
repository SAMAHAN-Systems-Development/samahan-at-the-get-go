import type { Meta, StoryObj } from '@storybook/react';

import StrawCard from '@/components/ui/HelpPortal/StrawCard';

const meta: Meta<typeof StrawCard> = {
  title: 'StrawCard',
  component: StrawCard,
};

export default meta;
type Story = StoryObj<typeof StrawCard>;

export const Primary: Story = {
  render: () => <StrawCard />,
};
