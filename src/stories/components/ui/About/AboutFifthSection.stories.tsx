import type { Meta, StoryObj } from '@storybook/react';

import AboutFifthSection from '@/components/ui/AboutPage/AboutFifthSection/YearOfMagisCard';

const meta: Meta<typeof AboutFifthSection> = {
  title: 'About/Year of Magis Card',
  component: AboutFifthSection,
};

export default meta;
type Story = StoryObj<typeof AboutFifthSection>;

export const Primary: Story = {
  render: () => <AboutFifthSection />,
};
