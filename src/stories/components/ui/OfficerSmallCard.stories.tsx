import type { Meta, StoryObj } from "@storybook/react";

import OfficerSmallCard from "@/components/ui/OfficerSmallCard";

const meta: Meta<typeof OfficerSmallCard> = {
  title: "UI/OfficerSmallCard",
  component: OfficerSmallCard,
};

export default meta;
type Story = StoryObj<typeof OfficerSmallCard>;

export const Primary: Story = {
  args: {
    firstName: "Vincent Cesar",
    lastName: "Canonigo",
    position: "Director",
    department: "Department of Camapigns & Advocacies",
    imageUrl: "/assets/images/Canonigo.jpg",
  },
  render: (args) => <OfficerSmallCard {...args} />,
};
