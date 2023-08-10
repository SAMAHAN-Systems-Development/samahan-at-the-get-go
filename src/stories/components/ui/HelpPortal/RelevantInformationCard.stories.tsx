import type { Meta, StoryObj } from '@storybook/react';

import RelevantInformationAreaCard from '@/components/ui/HelpPortal/RelevantInformationAreaCard';

const meta: Meta<typeof RelevantInformationAreaCard> = {
  title: 'Relevant Information Card',
  component: RelevantInformationAreaCard,
};

export default meta;
type Story = StoryObj<typeof RelevantInformationAreaCard>;

export const Primary: Story = {
  render: () => <RelevantInformationAreaCard />,
};
