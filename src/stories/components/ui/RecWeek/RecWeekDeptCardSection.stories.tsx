import type { Meta, StoryObj } from '@storybook/react';

import RecWeekDeptCardSection from '@/components/ui/RecWeek/RecWeekDeptCardSection';

const meta: Meta<typeof RecWeekDeptCardSection> = {
  title: 'RecruitmentWeek/Rec Week Dept Card Section',
  component: RecWeekDeptCardSection,
};

export default meta;
type Story = StoryObj<typeof RecWeekDeptCardSection>;

export const Primary: Story = {
  render: () => <RecWeekDeptCardSection department="SYSDEV" />,
};
