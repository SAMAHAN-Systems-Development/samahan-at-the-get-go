import type { Meta, StoryObj } from '@storybook/react';

import OfficesLabelCard from '@/components/ui/OfficesLabelCard';

const meta: Meta<typeof OfficesLabelCard> = {
  title: 'UI/Offices Label Card',
  component: OfficesLabelCard,
};

export default meta;
type Story = StoryObj<typeof OfficesLabelCard>;

export const Defaul: Story = {
  args: {
    title: 'Cluster Representatives',
  },
  render: (args) => <OfficesLabelCard {...args} />,
};
