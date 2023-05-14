import type { Meta, StoryObj } from "@storybook/react";

import Button from "@/components/ui/Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Click me!",
    href: "www.samahan.addu.edu.ph",
  },
  render: (args) => <Button {...args}>Click me!</Button>,
};
