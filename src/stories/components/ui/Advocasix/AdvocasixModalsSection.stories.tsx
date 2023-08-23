import type { Meta, StoryObj } from '@storybook/react';

import AdvocasixModalsSection from '@/components/Home/AdvocasixModalsSection';

const meta: Meta<typeof AdvocasixModalsSection> = {
  title: 'Home Page/Advocasix Modals Section',
  component: AdvocasixModalsSection,
};

export default meta;
type Story = StoryObj<typeof AdvocasixModalsSection>;

export const Primary: Story = {
  render: () => <AdvocasixModalsSection />,
};
