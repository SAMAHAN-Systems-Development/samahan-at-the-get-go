import type { Meta, StoryObj } from "@storybook/react";

import SCBCard from "@/components/ui/SCBCard";

const meta: Meta<typeof SCBCard> = {
  title: "UI/SCBCard",
  component: SCBCard,
};

export default meta;
type Story = StoryObj<typeof SCBCard>;

export const Primary: Story = {
  args: {
    firstName: "Chyna Marie",
    lastName: "Legaspina",
    position: "President",
    imageUrl:
      "https://img.freepik.com/free-photo/woman-with-balloon-image-torn-paper-style_53876-128762.jpg",
    link: "https://tailwindcss.com/",
  },
  render: (args) => <SCBCard {...args} />,
};
