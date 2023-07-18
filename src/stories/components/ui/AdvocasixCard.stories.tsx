import type { Meta, StoryObj } from '@storybook/react';
import placeholder from 'public/assets/images/placeholder.jpg';

import AdvocasixCard from '@/components/ui/ModalCardButton';

const meta: Meta<typeof AdvocasixCard> = {
  title: 'UI/Advocasix Card',
  component: AdvocasixCard,
};

export default meta;
type Story = StoryObj<typeof AdvocasixCard>;

export const Primary: Story = {
  args: {
    title: 'Climate Action',
    imageUrl: placeholder,
  },
  render: (args) => <AdvocasixCard {...args} />,
};
