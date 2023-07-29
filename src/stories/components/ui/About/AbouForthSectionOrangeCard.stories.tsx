import type { Meta, StoryObj } from '@storybook/react';

import AboutForthSectionOrangeCard from '@/components/ui/AboutPage/AboutFourthSection/AtTheGetGoCard';

const meta: Meta<typeof AboutForthSectionOrangeCard> = {
  title: 'About/At The Get Go Card',
  component: AboutForthSectionOrangeCard,
};

export default meta;
type Story = StoryObj<typeof AboutForthSectionOrangeCard>;

export const Primary: Story = {
  render: () => <AboutForthSectionOrangeCard />,
};
