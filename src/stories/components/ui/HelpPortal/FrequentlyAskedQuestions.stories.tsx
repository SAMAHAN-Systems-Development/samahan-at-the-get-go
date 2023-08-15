import type { Meta, StoryObj } from '@storybook/react';

import FrequentlyAskedQuestionCard from '@/components/ui/HelpPortal/FrequentlyAskedQuestionCard';

const meta: Meta<typeof FrequentlyAskedQuestionCard> = {
  title: 'Frequently Asked Question Card',
  component: FrequentlyAskedQuestionCard,
};

export default meta;
type Story = StoryObj<typeof FrequentlyAskedQuestionCard>;

export const Primary: Story = {
  render: () => <FrequentlyAskedQuestionCard />,
};
