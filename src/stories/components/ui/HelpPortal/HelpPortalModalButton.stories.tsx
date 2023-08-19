import type { Meta, StoryObj } from '@storybook/react';

import HelpPortalModalButton from '@/components/ui/HelpPortal/HelpPortalModalButton';

const meta: Meta<typeof HelpPortalModalButton> = {
  title: 'UI/Help Portal/Relevant Information Card Button',
  component: HelpPortalModalButton,
};

export default meta;
type Story = StoryObj<typeof HelpPortalModalButton>;

export const Default: Story = {
  args: {
    title: '1st Semester Schedule',
  },
  render: (args) => <HelpPortalModalButton {...args} />,
};
