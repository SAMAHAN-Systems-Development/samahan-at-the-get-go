import type { Meta, StoryObj } from "@storybook/react";

import AboutSecondSectionWhiteCard from "@/components/ui/AboutPage/AboutSecondSectionWhiteCard";

const meta: Meta<typeof AboutSecondSectionWhiteCard> = {
  title: "UI/AboutSecondSectionWhiteCard",
  component: AboutSecondSectionWhiteCard,
};

export default meta;
type Story = StoryObj<typeof AboutSecondSectionWhiteCard>;

export const Primary: Story = {
  args: {
    first_header: "Commitment",
    second_header: "Commitment",
  },
  render: (args) => <AboutSecondSectionWhiteCard {...args} />,
};
