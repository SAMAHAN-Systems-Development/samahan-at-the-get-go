import type { Meta, StoryObj } from "@storybook/react";

import OfficerLargeCard from "@/components/ui/OfficerLargeCard";

const meta: Meta<typeof OfficerLargeCard> = {
  title: "UI/OfficerLargeCard",
  component: OfficerLargeCard,
};

export default meta;
type Story = StoryObj<typeof OfficerLargeCard>;

export const Primary: Story = {
  args: {
    firstName: "Chyna Marie",
    lastName: "Legaspina",
    position: "President",
    imageUrl: "/assets/images/Legaspina.jpg",
    link: "/",
  },
  render: (args) => <OfficerLargeCard {...args} />,
};
