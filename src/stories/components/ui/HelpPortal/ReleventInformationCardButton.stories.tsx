import type { Meta, StoryObj } from '@storybook/react';

import ReleventInformationCardButton from '@/components/ui/HelpPortal/ReleventInformationCardButton';

const meta: Meta<typeof ReleventInformationCardButton> = {
  title: 'UI/Help Portal/Relevent Information Card Button',
  component: ReleventInformationCardButton,
};

export default meta;
type Story = StoryObj<typeof ReleventInformationCardButton>;

export const Default: Story = {
  args: {
    title: '1st Semester Schedule',
  },
  render: (args) => <ReleventInformationCardButton {...args} />,
};
