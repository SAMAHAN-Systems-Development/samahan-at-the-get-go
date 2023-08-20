import type { Meta, StoryObj } from "@storybook/react";

import HeroSection from "@/components/Home/HeroSection";

const meta: Meta<typeof HeroSection> = {
  title: "Hero/Hero Section",
  component: HeroSection,
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Primary: Story = {
  render: () => <HeroSection />,
};
