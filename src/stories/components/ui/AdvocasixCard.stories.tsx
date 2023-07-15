import type { Meta, StoryObj } from '@storybook/react';

import AdvocasixCard from '@/components/ui/Advocasix/AdvocasixCard';

const meta: Meta<typeof AdvocasixCard> = {
  title: 'UI/AdvocasixCard',
  component: AdvocasixCard,
};

export default meta;
type Story = StoryObj<typeof AdvocasixCard>;

export const Primary: Story = {
  args: {
    title: 'Climate Action',
    imageUrl: '/assets/images/placeholder.jpg',
  },
  render: (args) => <AdvocasixCard {...args} />,
};
