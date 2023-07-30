import type { Meta, StoryObj } from '@storybook/react';

import Divider from '@/components/ui/Divider';

const meta: Meta<typeof Divider> = {
  title: 'UI/Divider',
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Primary: Story = {
  args: {
    text: 'The Samahan ng mga Mag-aaral ng Pamantasang ng Ateneo de Davao, or SAMAHAN, is the lone autonomous Student Government of the College Unit of Ateneo de Davao University.',
    page: 'aboutPage',
  },
  render: (args) => <Divider {...args} />,
};
