import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import RecWeekOfficeCard from '@/components/ui/RecWeek/RecWeekOfficeCard';

const meta: Meta<typeof RecWeekOfficeCard> = {
  title: 'Components/Rec Week Office Card',
  component: RecWeekOfficeCard,
};

export default meta;

type Story = StoryObj<typeof RecWeekOfficeCard>;

export const Default: Story = {
  args: {
    officeNumber: '01',
    position: 'President',
  },
  render: (args) => <RecWeekOfficeCard {...args} />,
};
