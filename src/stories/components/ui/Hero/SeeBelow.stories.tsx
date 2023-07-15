import type { Meta, StoryObj } from "@storybook/react";

import SeeBelow from "@/components/ui/Hero/SeeBelow";

const meta: Meta<typeof SeeBelow> = {
  title: "Home/SeeBelow",
  component: SeeBelow,
};

export default meta;
type Story = StoryObj<typeof SeeBelow>;

export const Primary: Story = {
  render: () => <SeeBelow />,
};
