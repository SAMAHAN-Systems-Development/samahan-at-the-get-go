import type { Meta, StoryObj } from '@storybook/react';

import RIAHeaderCard from '@/components/ui/HelpPortal/RIAHeaderCard';

const meta: Meta<typeof RIAHeaderCard> = {
  title: 'ui/Help Portal/Relevant Information Card',
  component: RIAHeaderCard,
};

export default meta;
type Story = StoryObj<typeof RIAHeaderCard>;

export const Primary: Story = {
  render: () => <RIAHeaderCard />,
};
