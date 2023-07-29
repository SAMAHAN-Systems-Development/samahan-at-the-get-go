import type { Meta, StoryObj } from '@storybook/react';

import TheSamahanCard from '@/components/ui/AboutPage/AboutSecondSection/TheSamahanCard';

const meta: Meta<typeof TheSamahanCard> = {
  title: 'About/The Samahan Card',
  component: TheSamahanCard,
};

export default meta;
type Story = StoryObj<typeof TheSamahanCard>;

export const Primary: Story = {
  render: () => <TheSamahanCard />,
};
