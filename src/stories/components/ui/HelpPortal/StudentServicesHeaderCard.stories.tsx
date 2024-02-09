import type { Meta, StoryObj } from '@storybook/react';

import StudentServicesHeaderCard from '@/components/ui/HelpPortal/StudentServicesHeaderCard';

const meta: Meta<typeof StudentServicesHeaderCard> = {
  title: 'ui/Help Portal/Student Services Header Card',
  component: StudentServicesHeaderCard,
};

export default meta;
type Story = StoryObj<typeof StudentServicesHeaderCard>;

export const Primary: Story = {
  render: () => <StudentServicesHeaderCard />,
};
