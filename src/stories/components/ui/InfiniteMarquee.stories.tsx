import type { Meta, StoryObj } from '@storybook/react';

import InfiniteMarquee from '@/components/ui/InfiniteMarquee';

const meta: Meta<typeof InfiniteMarquee> = {
  title: 'UI/Infinite Marquee',
  component: InfiniteMarquee,
};

export default meta;
type Story = StoryObj<typeof InfiniteMarquee>;

export const Primary: Story = {
  render: () => <InfiniteMarquee />,
};
