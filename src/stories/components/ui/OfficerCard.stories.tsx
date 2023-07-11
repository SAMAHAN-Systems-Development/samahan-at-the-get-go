import type { Meta, StoryObj } from "@storybook/react";

import OfficerCard from "@/components/ui/OfficerCard";

const meta: Meta<typeof OfficerCard> = {
  title: "UI/OfficerCard",
  component: OfficerCard,
};

export default meta;
type Story = StoryObj<typeof OfficerCard>;

export const Primary: Story = {
  args: {
    firstName: "Chyna Marie",
    lastName: "Legaspina",
    position: "President",
    imageUrl: "/assets/images/Legaspina.jpg",
    link: "/",
  },
  render: (args) => <OfficerCard {...args} />,
};
