import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import RecWeekHeader from '@/components/ui/RecruitmentWeek/RecWeekHeader';

const meta: Meta<typeof RecWeekHeader> = {
  title: 'Components/RecWeekHeader',
  component: RecWeekHeader,
};

export default meta;

type Story = StoryObj<typeof RecWeekHeader>;

export const Default: Story = {
  args: {},
  render: () => <RecWeekHeader />,
};
