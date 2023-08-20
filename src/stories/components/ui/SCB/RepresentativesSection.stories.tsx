import type { Meta, StoryObj } from '@storybook/react';

import RepresentativesSection from '@/components/SCB/RepresentativesSection';

const meta: Meta<typeof RepresentativesSection> = {
  title: 'SCB/Hero Section',
  component: RepresentativesSection,
};

export default meta;
type Story = StoryObj<typeof RepresentativesSection>;

export const Primary: Story = {
  render: () => <RepresentativesSection />,
};
