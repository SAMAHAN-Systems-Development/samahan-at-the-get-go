import type { Meta, StoryObj } from "@storybook/react";

import AdvocasixHeaderCard from "@/components/ui/Advocasix/AdvocasixHeaderCard";

const meta: Meta<typeof AdvocasixHeaderCard> = {
  title: "UI/AdvocasixHeaderCard",
  component: AdvocasixHeaderCard,
};

export default meta;
type Story = StoryObj<typeof AdvocasixHeaderCard>;

export const Primary: Story = {
  render: () => <AdvocasixHeaderCard />,
};
