import type { Meta, StoryObj } from "@storybook/react";

import Button from "@/components/ui/Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Click me!",
    href: "www.samahan.addu.edu.ph",
  },
  render: (args) => (
    <Button {...args} className="bg-blue-300">
      Click me!
    </Button>
  ),
};
