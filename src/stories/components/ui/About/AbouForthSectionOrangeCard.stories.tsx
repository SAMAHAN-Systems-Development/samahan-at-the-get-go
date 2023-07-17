import type { Meta, StoryObj } from '@storybook/react';

import AboutForthSectionOrangeCard from '@/components/ui/AboutPage/AboutFourthSection/AboutForthSectionOrangeCard';

const meta: Meta<typeof AboutForthSectionOrangeCard> = {
  title: 'About/About Forth Section Orange Card',
  component: AboutForthSectionOrangeCard,
};

export default meta;
type Story = StoryObj<typeof AboutForthSectionOrangeCard>;

export const Primary: Story = {
  render: () => <AboutForthSectionOrangeCard />,
};
