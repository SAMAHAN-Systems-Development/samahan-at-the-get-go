import type { Meta, StoryObj } from '@storybook/react';

import DepartmentSection from '@/components/ui/Offices/DepartmentSection';

const meta: Meta<typeof DepartmentSection> = {
  title: 'Offices/Department Section',
  component: DepartmentSection,
};

export default meta;
type Story = StoryObj<typeof DepartmentSection>;

export const Primary: Story = {
  render: () => <DepartmentSection />,
};
