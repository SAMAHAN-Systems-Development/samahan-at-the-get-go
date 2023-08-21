import type { Meta, StoryObj } from '@storybook/react';

import FAQsHeaderCard from '@/components/ui/HelpPortal/FAQsHeaderCard';

const meta: Meta<typeof FAQsHeaderCard> = {
  title: 'ui/Help Portal/FAQs Header Card',
  component: FAQsHeaderCard,
};

export default meta;
type Story = StoryObj<typeof FAQsHeaderCard>;

export const Primary: Story = {
  render: () => <FAQsHeaderCard />,
};
