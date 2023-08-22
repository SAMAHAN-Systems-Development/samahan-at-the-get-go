import type { Meta, StoryObj } from '@storybook/react';

import AboutPage from '@/app/about/page';

const meta: Meta<typeof AboutPage> = {
  title: 'pages/About Page',
  component: AboutPage,
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Primary: Story = {
  args: {},
  render: () => <AboutPage />,
};
