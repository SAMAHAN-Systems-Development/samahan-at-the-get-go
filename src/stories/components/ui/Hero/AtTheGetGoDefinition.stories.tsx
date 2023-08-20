import type { Meta, StoryObj } from '@storybook/react';

import AtTheGetGoDefinition from '@/components/ui/Hero/AtTheGetGoDefinition';

const meta: Meta<typeof AtTheGetGoDefinition> = {
  title: 'Hero/At The Get Go Definition',
  component: AtTheGetGoDefinition,
};

export default meta;
type Story = StoryObj<typeof AtTheGetGoDefinition>;

export const Primary: Story = {
  render: () => <AtTheGetGoDefinition />,
};
