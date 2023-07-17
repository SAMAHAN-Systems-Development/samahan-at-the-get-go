import type { Meta, StoryObj } from '@storybook/react';

import AboutSecondSectionBlueCard from '@/components/ui/AboutPage/AboutSecondSection/ThisYearCard';

const meta: Meta<typeof AboutSecondSectionBlueCard> = {
  title: 'About/This Year Card',
  component: AboutSecondSectionBlueCard,
};

export default meta;
type Story = StoryObj<typeof AboutSecondSectionBlueCard>;

export const Primary: Story = {
  render: () => <AboutSecondSectionBlueCard />,
};
