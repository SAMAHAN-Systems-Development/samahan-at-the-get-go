import type { Meta, StoryObj } from '@storybook/react';

import ThisYearCard from '@/components/ui/AboutPage/AboutSecondSection/ThisYearCard';

const meta: Meta<typeof ThisYearCard> = {
  title: 'About /This Year Card',
  component: ThisYearCard,
};

export default meta;
type Story = StoryObj<typeof ThisYearCard>;

export const Primary: Story = {
  render: () => <ThisYearCard />,
};
