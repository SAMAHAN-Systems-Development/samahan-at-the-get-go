import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/ui/Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Click me!',
    href: 'www.samahan.addu.edu.ph',
  },
  render: (args) => (
    <Button {...args} className="font-sans text-white bg-blue p-3 rounded-lg">
      Click me!
    </Button>
  ),
};

export const Secondary: Story = {
  args: {
    children: 'Click me!',
    href: 'www.samahan.addu.edu.ph',
  },
  render: (args) => (
    <Button
      {...args}
      className="font-artega text-white bg-beige p-3 rounded-lg"
    >
      Click me!
    </Button>
  ),
};
