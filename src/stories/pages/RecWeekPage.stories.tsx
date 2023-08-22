import type { Meta, StoryObj } from '@storybook/react';

import RecWeekPage from '@/app/recruitment-week/page';

const meta: Meta<typeof RecWeekPage> = {
  title: 'pages/Rec Week Page',
  component: RecWeekPage,
};

export default meta;
type Story = StoryObj<typeof RecWeekPage>;

export const Primary: Story = {
  args: {},
  render: () => <RecWeekPage />,
};
