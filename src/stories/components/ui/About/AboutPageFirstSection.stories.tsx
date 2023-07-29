import type { Meta, StoryObj } from '@storybook/react';

import AboutHeroSection from '@/components/ui/AboutPage/AboutFirstSection/AboutHeroSection';

const meta: Meta<typeof AboutHeroSection> = {
  title: 'About/ About First Section',
  component: AboutHeroSection,
};

export default meta;
type Story = StoryObj<typeof AboutHeroSection>;

export const Primary: Story = {
  render: () => <AboutHeroSection />,
};
