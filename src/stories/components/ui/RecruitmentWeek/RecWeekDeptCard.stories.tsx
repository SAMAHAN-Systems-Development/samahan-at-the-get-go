import type { Meta, StoryObj } from '@storybook/react';
import Alkuino from 'public/assets/images/Alkuino.jpg';

import RecWeekDeptCard from '@/components/ui/RecruitmentWeek/RecWeekDeptCard';

const meta: Meta<typeof RecWeekDeptCard> = {
  title: 'UI/Rec Week Dept Card',
  component: RecWeekDeptCard,
};

export default meta;
type Story = StoryObj<typeof RecWeekDeptCard>;

export const Primary: Story = {
  args: {
    firstName: 'Angelli Kezzed',
    lastName: 'Alkuino',
    position: 'Deputy Director',
    imageUrl: Alkuino,
    email: 'akmalkuino@addu.edu.ph',
    textColorClass: 'text-blue',
  },
  render: (args) => <RecWeekDeptCard {...args} />,
};
