import type { Meta, StoryObj } from "@storybook/react";

import OfficesHeader from "@/components/ui/Offices/OfficesHeader";

const meta: Meta<typeof OfficesHeader> = {
  title: "UI/Offices Title Card Component",
  component: OfficesHeader,
};

export default meta;
type Story = StoryObj<typeof OfficesHeader>;

export const Primary: Story = {
  args: {
    position: "PRESIDENT",
  },
  render: (args) => <OfficesHeader {...args} />,
};
