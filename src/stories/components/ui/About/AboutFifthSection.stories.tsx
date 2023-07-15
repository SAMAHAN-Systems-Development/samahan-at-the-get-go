import type { Meta, StoryObj } from "@storybook/react";

import AboutFifthSection from "@/components/ui/AboutPage/AboutFifthSection/AboutFifthSection";

const meta: Meta<typeof AboutFifthSection> = {
  title: "About/AboutFifthSection",
  component: AboutFifthSection,
};

export default meta;
type Story = StoryObj<typeof AboutFifthSection>;

export const Primary: Story = {
  args: {
    title: "Year of Magis",
  },
  render: (args) => <AboutFifthSection {...args} />,
};
