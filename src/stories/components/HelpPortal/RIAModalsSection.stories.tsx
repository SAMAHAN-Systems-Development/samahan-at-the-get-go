import type { Meta, StoryObj } from '@storybook/react';

import RIAModalsSection from '@/components/HelpPortal/RIAModalsSection';

const meta: Meta<typeof RIAModalsSection> = {
  title: 'Help Portal/RIA Modals Section',
  component: RIAModalsSection,
};

export default meta;
type Story = StoryObj<typeof RIAModalsSection>;

export const Primary: Story = {
  render: () => <RIAModalsSection />,
};
