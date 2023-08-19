import type { Meta, StoryObj } from '@storybook/react';
import Alkuino from 'public/assets/images/Alkuino.jpg';

import OfficerSmallCard from '@/components/ui/OfficerSmallCard';

const meta: Meta<typeof OfficerSmallCard> = {
  title: 'UI/Rec Week Dept Card',
  component: OfficerSmallCard,
};

export default meta;
type Story = StoryObj<typeof OfficerSmallCard>;

export const Primary: Story = {
  args: {
    firstName: 'Angelli Kezzed',
    lastName: 'Alkuino',
    position: 'Deputy Director',
    imageUrl: Alkuino,
    email: 'akmalkuino@addu.edu.ph',
    textColorClass: 'text-blue',
  },
  render: (args) => <OfficerSmallCard {...args} />,
};
