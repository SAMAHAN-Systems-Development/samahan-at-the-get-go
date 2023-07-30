import type { Meta, StoryObj } from '@storybook/react';

import InitativesTitleCard from '@/components/ui/Offices/InitiativesTitleCard';

const meta: Meta<typeof InitativesTitleCard> = {
  title: 'UI/Initatives Title Card',
  component: InitativesTitleCard,
};

export default meta;
type Story = StoryObj<typeof InitativesTitleCard>;

export const Primary: Story = {
  render: () => <InitativesTitleCard />,
};
