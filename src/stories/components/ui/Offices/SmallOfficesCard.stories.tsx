import type { Meta, StoryObj } from '@storybook/react';

import OSPImage from '/public/assets/images/OSPImage.png';
import SmallOfficesCard from '@/components/ui/Offices/SmallOfficesCard';
const meta: Meta<typeof SmallOfficesCard> = {
  title: 'UI/Small Offices Card',
  component: SmallOfficesCard,
};

export default meta;
type Story = StoryObj<typeof SmallOfficesCard>;

export const Primary: Story = {
  args: {
    officesTitle: 'OSP',
    imageUrl: OSPImage,
    officesPosition: 'PRESIDENT',
  },
  render: (args) => <SmallOfficesCard {...args} />,
};
