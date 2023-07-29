import type { Meta, StoryObj } from '@storybook/react';

import AboutSecondSection from '@/components/ui/AboutPage/AboutSecondSection/AboutSecondSection';

const meta: Meta<typeof AboutSecondSection> = {
  title: 'About/About Second Section',
  component: AboutSecondSection,
};

export default meta;
type Story = StoryObj<typeof AboutSecondSection>;

export const Primary: Story = {
  render: () => <AboutSecondSection />,
};
