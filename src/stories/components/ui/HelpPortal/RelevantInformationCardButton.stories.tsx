import type { Meta, StoryObj } from '@storybook/react';

import RelevantInformationCardButton from '@/components/ui/HelpPortal/RelevantInformationCardButton';

const meta: Meta<typeof RelevantInformationCardButton> = {
  title: 'UI/Help Portal/Relevant Information Card Button',
  component: RelevantInformationCardButton,
};

export default meta;
type Story = StoryObj<typeof RelevantInformationCardButton>;

export const Default: Story = {
  args: {
    title: '1st Semester Schedule',
  },
  render: (args) => <RelevantInformationCardButton {...args} />,
};
