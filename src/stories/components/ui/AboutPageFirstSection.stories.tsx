import type { Meta, StoryObj } from "@storybook/react";

import AboutFirstSection from "@/components/ui/AboutPage/AboutPageSections/AboutFirstSection";

const meta: Meta<typeof AboutFirstSection> = {
  title: "UI/ AboutFirstSection",
  component: AboutFirstSection,
};

export default meta;
type Story = StoryObj<typeof AboutFirstSection>;

export const Primary: Story = {
  args: {
    title: "SAMAHAN",
  },
  render: (args) => <AboutFirstSection {...args} />,
};
