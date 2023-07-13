import type { Meta, StoryObj } from "@storybook/react";

import InitativesTitleCard from "@/components/ui/InitiativesTitleCard";

const meta: Meta<typeof InitativesTitleCard> = {
  title: "UI/InitativesTitleCard",
  component: InitativesTitleCard,
};

export default meta;
type Story = StoryObj<typeof InitativesTitleCard>;

export const Primary: Story = {
  render: () => <InitativesTitleCard />,
};
