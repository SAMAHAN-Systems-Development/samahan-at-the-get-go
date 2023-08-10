import type { Meta, StoryObj } from '@storybook/react';

import HelpPortalCard from '@/components/ui/HelpPortal/HelpPortalCard';

const meta: Meta<typeof HelpPortalCard> = {
  title: 'About/About Second Section',
  component: HelpPortalCard,
};

export default meta;
type Story = StoryObj<typeof HelpPortalCard>;

export const Primary: Story = {
  render: () => <HelpPortalCard />,
};
