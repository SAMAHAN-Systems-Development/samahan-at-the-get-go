import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import DCA from '/public/assets/images/Rec Week/SAMAHAN DCA.jpg';
import RecWeekModalHeader from '@/components/ui/RecWeek/RecWeekModalHeader';

const meta: Meta<typeof RecWeekModalHeader> = {
  title: 'Components/Rec Week Modal Header',
  component: RecWeekModalHeader,
};

export default meta;

type Story = StoryObj<typeof RecWeekModalHeader>;

export const Default: Story = {
  args: {
    imageSrc: DCA,
    name: 'DCA',
  },
  render: (args) => <RecWeekModalHeader {...args} />,
};
