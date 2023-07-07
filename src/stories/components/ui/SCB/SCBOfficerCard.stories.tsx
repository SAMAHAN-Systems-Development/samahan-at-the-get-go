import type { Meta, StoryObj } from "@storybook/react";

import SCBOfficerCard from "@/components/ui/SCB/SCBOfficerCard";

const meta: Meta<typeof SCBOfficerCard> = {
  title: "UI/SCBCard",
  component: SCBOfficerCard,
};

export default meta;
type Story = StoryObj<typeof SCBOfficerCard>;

export const Primary: Story = {
  args: {
    firstName: "Chyna Marie",
    lastName: "Legaspina",
    position: "President",
    imageUrl: "/../../public/images/legaspina.jpg",
    link: "/",
  },
  render: (args) => <SCBOfficerCard {...args} />,
};
