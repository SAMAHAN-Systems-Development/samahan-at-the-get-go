import type { Meta, StoryObj } from '@storybook/react';

import SamahanGuideBookCard from '@/components/ui/HelpPortal/SamahanGuideBookCard';

const meta: Meta<typeof SamahanGuideBookCard> = {
  title: 'Samahan GuideBook Card',
  component: SamahanGuideBookCard,
};

export default meta;
type Story = StoryObj<typeof SamahanGuideBookCard>;

export const Primary: Story = {
  render: () => <SamahanGuideBookCard />,
};
