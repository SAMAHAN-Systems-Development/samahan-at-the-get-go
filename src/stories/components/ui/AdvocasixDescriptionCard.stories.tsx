import type { Meta, StoryObj } from "@storybook/react";

import AdvocasixDescriptionCard from "@/components/ui/Advocasix/AdvocasixDescriptionCard";

const meta: Meta<typeof AdvocasixDescriptionCard> = {
  title: "UI/AdvocasixDescriptionCard",
  component: AdvocasixDescriptionCard,
};

export default meta;
type Story = StoryObj<typeof AdvocasixDescriptionCard>;

export const Primary: Story = {
  render: () => <AdvocasixDescriptionCard />,
};
