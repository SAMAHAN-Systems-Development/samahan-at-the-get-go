import type { Meta, StoryObj } from '@storybook/react';

import OfficesCardComponent from '@/components/ui/Offices/OfficesCardComponent';

const meta: Meta<typeof OfficesCardComponent> = {
  title: 'UI/Offices Card Component',
  component: OfficesCardComponent,
};

export default meta;
type OfficesCardComponentStory = StoryObj<typeof OfficesCardComponent>;

export const Primary: OfficesCardComponentStory = {
  args: {
    title: 'Title',
    description: 'Description',
  },
  render: (args) => <OfficesCardComponent {...args} />,
};
