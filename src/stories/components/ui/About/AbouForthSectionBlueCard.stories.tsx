import type { Meta, StoryObj } from '@storybook/react';

import AboutForthSectionBlueCard from '@/components/ui/AboutPage/AboutFourthSection/ThisYearSamahanCard';

const meta: Meta<typeof AboutForthSectionBlueCard> = {
  title: 'About/This Year Samahan Card',
  component: AboutForthSectionBlueCard,
};

export default meta;
type Story = StoryObj<typeof AboutForthSectionBlueCard>;

export const Primary: Story = {
  render: () => <AboutForthSectionBlueCard />,
};
