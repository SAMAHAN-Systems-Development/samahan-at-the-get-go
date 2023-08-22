import type { Meta, StoryObj } from '@storybook/react';
import placeholder from 'public/assets/images/HelpPortalImage.png';

import AdvocasixCardButton from '@/components/ui/Advocasix/AdvocasixCardButton';

const meta: Meta<typeof AdvocasixCardButton> = {
  title: 'UI/Advocasix Card Button',
  component: AdvocasixCardButton,
};

export default meta;
type Story = StoryObj<typeof AdvocasixCardButton>;

export const Primary: Story = {
  args: {
    title: 'Climate Action',
    imageUrl: placeholder,
  },
  render: (args) => <AdvocasixCardButton {...args} />,
};
