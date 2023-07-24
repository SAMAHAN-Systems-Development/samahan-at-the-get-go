import type { Meta, StoryObj } from '@storybook/react';
import Canonigo from 'public/assets/images/Canonigo.jpg';

import OfficerSmallCard from '@/components/ui/OfficerSmallCard';

const meta: Meta<typeof OfficerSmallCard> = {
  title: 'UI/Officer Small Card',
  component: OfficerSmallCard,
};

export default meta;
type Story = StoryObj<typeof OfficerSmallCard>;

export const Primary: Story = {
  args: {
    officer: {
      firstName: 'Vincent Cesar',
      lastName: 'Canonigo',
      position: 'Director',
      department: 'Department of Camapigns & Advocacies',
    },

    imageUrl: Canonigo,
  },
  render: (args) => <OfficerSmallCard {...args} />,
};
