import type { Meta, StoryObj } from "@storybook/react";

import OfficerLargeCard from "@/components/ui/OfficerLargeCard";

const meta: Meta<typeof OfficerLargeCard> = {
  title: "UI/Offices Cards/Officer Large Card",
  component: OfficerLargeCard,
};

export default meta;
type Story = StoryObj<typeof OfficerLargeCard>;

export const Default: Story = {
  args: {
    firstName: "Chyna Marie",
    lastName: "Legaspina",
    position: "President",
    imageUrl: "/assets/images/Legaspina.jpg",
    isButton: true,
  },
  render: (args) => <OfficerLargeCard {...args} />,
};
