import type { Meta, StoryObj } from '@storybook/react';

import AboutThirdSectionOrangeCard from '@/components/ui/AboutPage/AboutThirdSection/WeNavigateCard';

const meta: Meta<typeof AboutThirdSectionOrangeCard> = {
  title: 'About/We Navigate Card',
  component: AboutThirdSectionOrangeCard,
};

export default meta;
type Story = StoryObj<typeof AboutThirdSectionOrangeCard>;

export const Primary: Story = {
  args: {
    first_header: 'We',
    second_header: 'Navigate',
  },
  render: () => <AboutThirdSectionOrangeCard />,
};
