import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import RecWeekDeptTitle from '@/components/ui/RecWeek/RecWeekDeptTitle';

const meta: Meta<typeof RecWeekDeptTitle> = {
  title: 'Components/Rec Week Dept Title ',
  component: RecWeekDeptTitle,
};

export default meta;

type Story = StoryObj<typeof RecWeekDeptTitle>;

export const Default: Story = {
  args: {
    bottomText: 'Systems Development',
    topText: 'Department of',
  },
  render: (args) => <RecWeekDeptTitle {...args} />,
};
