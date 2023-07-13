import type { Meta, StoryObj } from "@storybook/react";

import SCBTitleCard from "@/components/ui/SCB/SCBTitleCard";

const meta: Meta<typeof SCBTitleCard> = {
  title: "UI/SCB/SCBTitleCard",
  component: SCBTitleCard,
};

export default meta;
type Story = StoryObj<typeof SCBTitleCard>;

export const Primary: Story = {
  args: {
    title: "Samahan Central Board",
  },
  render: (args) => <SCBTitleCard {...args} />,
};
