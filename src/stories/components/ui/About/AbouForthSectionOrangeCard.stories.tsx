import type { Meta, StoryObj } from "@storybook/react";

import AboutForthSectionOrangeCard from "@/components/ui/AboutPage/AboutFourthSection/AboutForthSectionOrangeCard";

const meta: Meta<typeof AboutForthSectionOrangeCard> = {
  title: "UI/AboutForthSectionOrangeCard",
  component: AboutForthSectionOrangeCard,
};

export default meta;
type Story = StoryObj<typeof AboutForthSectionOrangeCard>;

export const Primary: Story = {
  args: {
    year: "SAMAHAN that is at the get-go. ",
  },
  render: (args) => <AboutForthSectionOrangeCard {...args} />,
};
