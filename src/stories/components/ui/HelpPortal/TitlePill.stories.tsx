import type { Meta, StoryObj } from '@storybook/react';

import TitlePill from '@/components/ui/HelpPortal/TitlePill';

const meta: Meta<typeof TitlePill> = {
  title: 'UI/Help Portal/Title Pill',
  component: TitlePill,
};

export default meta;
type Story = StoryObj<typeof TitlePill>;

export const Default: Story = {
  args: {
    title: '1st Semester Schedule',
  },
  render: (args) => <TitlePill {...args} />,
};
