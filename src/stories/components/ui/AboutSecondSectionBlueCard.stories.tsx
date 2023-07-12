import type { Meta, StoryObj } from "@storybook/react";

import AboutThirdSectionOrangeCard from "@/components/ui/AboutPage/AboutThirdSectionOrangeCard";

const meta: Meta<typeof AboutThirdSectionOrangeCard> = {
  title: "UI/AboutThirdSectionOrangeCard",
  component: AboutThirdSectionOrangeCard,
};

export default meta;
type Story = StoryObj<typeof AboutThirdSectionOrangeCard>;

export const Primary: Story = {
  args: {
    first_header: "We",
    second_header: "Navigate",
  },
  render: (args) => <AboutThirdSectionOrangeCard {...args} />,
};
