import type { Meta, StoryObj } from "@storybook/react";

import AboutSecondSectionBlueCard from "@/components/ui/AboutPage/AboutSecondSection/AboutSecondSectionBlueCard";

const meta: Meta<typeof AboutSecondSectionBlueCard> = {
  title: "UI/AboutSecondSectionBlueCard",
  component: AboutSecondSectionBlueCard,
};

export default meta;
type Story = StoryObj<typeof AboutSecondSectionBlueCard>;

export const Primary: Story = {
  args: {
    title: "This Year",
  },
  render: (args) => <AboutSecondSectionBlueCard {...args} />,
};
