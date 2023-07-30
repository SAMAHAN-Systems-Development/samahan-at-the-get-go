import type { Meta, StoryObj } from '@storybook/react';

import NextButtonForOffices from '@/components/ui/Offices/OfficesFloatingCard/NextButtonForOffices';

const meta: Meta<typeof NextButtonForOffices> = {
  title: 'UI/Next Button For Offices',
  component: NextButtonForOffices,
};

export default meta;
type Story = StoryObj<typeof NextButtonForOffices>;

export const Defaul: Story = {
  args: {
    office: 'OVP',
  },
  render: (args) => <NextButtonForOffices {...args} />,
};
