import type { Meta, StoryObj } from '@storybook/react';
import placeholder from 'public/assets/images/placeholder.jpg';

import AdvocasixModalUI from '@/components/ui/Advocasix/AdvocasixModalUI';

const meta: Meta<typeof AdvocasixModalUI> = {
  title: 'UI/Advocasix Modal UI',
  component: AdvocasixModalUI,
};

export default meta;
type Story = StoryObj<typeof AdvocasixModalUI>;

export const Primary: Story = {
  args: {
    title: 'Climate Action',
    imageUrl1: placeholder,
    imageUrl2: placeholder,
    hashtag: '#GetGoingWithClimateAction',
    description:
      'As the remaining time we have to fight against climate change quickly decreases, there is an increasing necessity for all sectors to unite toward climate action. While governments and businesses are making progress in shifting towards more sustainable practices, various members are still prioritizing profit over the planet. Along with that, groups of skeptics still question the science of climate change.',
  },
  render: (args) => <AdvocasixModalUI {...args} />,
};
