import type { Meta, StoryObj } from '@storybook/react';

import HelpPortalPage from '@/app/help-portal/page';

const meta: Meta<typeof HelpPortalPage> = {
  title: 'pages/Help Portal Page',
  component: HelpPortalPage,
};

export default meta;
type Story = StoryObj<typeof HelpPortalPage>;

export const Primary: Story = {
  args: {},
  render: () => <HelpPortalPage />,
};
