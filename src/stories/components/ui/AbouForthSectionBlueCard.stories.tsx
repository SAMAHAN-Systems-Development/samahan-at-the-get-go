import type { Meta, StoryObj } from "@storybook/react";

import AboutForthSectionBlueCard from "@/components/ui/AboutPage/AboutForthSectionBlueCard";

const meta: Meta<typeof AboutForthSectionBlueCard> = {
  title: "UI/AboutForthSectionBlueCard",
  component: AboutForthSectionBlueCard,
};

export default meta;
type Story = StoryObj<typeof AboutForthSectionBlueCard>;

export const Primary: Story = {
  args: {
    year: "This 2023",
  },
  render: (args) => <AboutForthSectionBlueCard {...args} />,
};
