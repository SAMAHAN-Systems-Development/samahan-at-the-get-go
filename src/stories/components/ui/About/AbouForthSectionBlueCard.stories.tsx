import type { Meta, StoryObj } from '@storybook/react';

import AboutForthSectionBlueCard from '@/components/ui/AboutPage/AboutFourthSection/AboutForthSectionBlueCard';

const meta: Meta<typeof AboutForthSectionBlueCard> = {
  title: 'About/About Forth Section Blue Card',
  component: AboutForthSectionBlueCard,
};

export default meta;
type Story = StoryObj<typeof AboutForthSectionBlueCard>;

export const Primary: Story = {
  render: () => <AboutForthSectionBlueCard />,
};
