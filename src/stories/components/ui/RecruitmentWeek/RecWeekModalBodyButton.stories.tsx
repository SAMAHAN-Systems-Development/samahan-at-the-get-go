import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import RecWeekModalBodyButton from '@/components/ui/RecruitmentWeek/RecWeekModalBodyButton';

const meta: Meta<typeof RecWeekModalBodyButton> = {
  title: 'Components/Rec Week Modal Body Button',
  component: RecWeekModalBodyButton,
};

export default meta;

type Story = StoryObj<typeof RecWeekModalBodyButton>;

export const Default: Story = {
  args: {
    link: 'https://github.com/SAMAHAN-Systems-Development/',
    title: 'Download our primer',
  },
  render: (args) => <RecWeekModalBodyButton {...args} />,
};
