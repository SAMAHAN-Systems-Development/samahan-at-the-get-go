import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import DCA from '/public/assets/images/Department Logos/samahan_campaigns_advocacies_logo.jpg';
import RecWeekModalButton from '@/components/ui/RecruitmentWeek/RecWeekModalButton';

const meta: Meta<typeof RecWeekModalButton> = {
  title: 'Components/Rec Week Modal Button',
  component: RecWeekModalButton,
};

export default meta;

type Story = StoryObj<typeof RecWeekModalButton>;

export const Default: Story = {
  args: {
    fullName: 'DCA',
    imageSrc: DCA,
    name: 'Department of Campaigns & Advocacies',
    office: 'OSP',
  },
  render: (args) => <RecWeekModalButton {...args} />,
};
