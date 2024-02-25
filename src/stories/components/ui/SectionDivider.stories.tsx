import type { Meta, StoryObj } from '@storybook/react';

import SectionDivider from '@/components/ui/SectionDivider';

const meta: Meta<typeof SectionDivider> = {
  title: 'UI/Section Divider',
  component: SectionDivider,
};

export default meta;
type Story = StoryObj<typeof SectionDivider>;

export const Defaul: Story = {
  args: {
    title: 'Library Services',
  },
  render: (args) => <SectionDivider {...args} />,
};
