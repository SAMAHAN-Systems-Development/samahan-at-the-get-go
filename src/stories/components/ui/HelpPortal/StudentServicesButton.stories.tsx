import type { Meta, StoryObj } from '@storybook/react';

import StudentServiceButton from '@/components/ui/HelpPortal/StudentServicesButton';

const meta: Meta<typeof StudentServiceButton> = {
  title: 'UI/Help Portal/Student Services Button',
  component: StudentServiceButton,
};

export default meta;
type Story = StoryObj<typeof StudentServiceButton>;

export const Default: Story = {
  args: {
    title: 'Concept Paper Submissions',
  },
  render: (args) => <StudentServiceButton {...args} />,
};
