import type { Meta, StoryObj } from '@storybook/react';

import OfficesFloatingCard from '@/components/ui/Offices/OfficesFloatingCard';

const meta: Meta<typeof OfficesFloatingCard> = {
  title: 'UI/Offices Floating Card Component',
  component: OfficesFloatingCard,
};

export default meta;
type OfficesFloatingCardStory = StoryObj<typeof OfficesFloatingCard>;

export const Primary: OfficesFloatingCardStory = {
  args: {
    office: 'OSP',
  },
  render: (args) => <OfficesFloatingCard {...args} />,
};
