import type { Meta, StoryObj } from "@storybook/react";

import OfficerCard from "@/components/ui/OfficerCard";

const meta: Meta<typeof OfficerCard> = {
  title: "UI/SCBCard",
  component: OfficerCard,
};

export default meta;
type Story = StoryObj<typeof OfficerCard>;

export const Primary: Story = {
  args: {
    firstName: "Chyna Marie",
    lastName: "Legaspina",
    position: "President",
    imageUrl: "/../public/images/Officers Photos/Legaspina.jpg",
    link: "/",
  },
  render: (args) => <OfficerCard {...args} />,
};
