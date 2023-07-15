import type { Meta, StoryObj } from "@storybook/react";

import SCBTitleCard from "@/components/ui/SCB/SCBTitleCard";

const meta: Meta<typeof SCBTitleCard> = {
  title: "UI/SCB/SCB Title Card",
  component: SCBTitleCard,
};

export default meta;
type Story = StoryObj<typeof SCBTitleCard>;

export const Primary: Story = {
  args: {},
  render: () => <SCBTitleCard />,
};
