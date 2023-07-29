import type { Meta, StoryObj } from '@storybook/react';
import imgSrc from 'public/assets/images/Legaspina.jpg';

import OfficerLargeCard from '@/components/ui/OfficerLargeCard';

const meta: Meta<typeof OfficerLargeCard> = {
  title: 'UI/Offices Cards/Officer Large Card',
  component: OfficerLargeCard,
};

export default meta;
type Story = StoryObj<typeof OfficerLargeCard>;

export const Default: Story = {
  args: {
    officer: {
      firstName: 'Chyna Marie',
      lastName: 'Legaspina',
      position: 'President',
      imageUrl: imgSrc,
    },
    isButton: true,
  },
  render: (args) => <OfficerLargeCard {...args} />,
};
