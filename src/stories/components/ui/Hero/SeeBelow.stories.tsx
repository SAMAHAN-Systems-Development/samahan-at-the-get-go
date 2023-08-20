import type { Meta, StoryObj } from '@storybook/react';

import SeeBelow from '@/components/ui/Hero/SeeBelow';

const meta: Meta<typeof SeeBelow> = {
  title: 'Home/See Below',
  component: SeeBelow,
};

export default meta;
type Story = StoryObj<typeof SeeBelow>;

export const Primary: Story = {
  render: () => <SeeBelow />,
};
