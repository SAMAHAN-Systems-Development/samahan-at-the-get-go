import type { Meta, StoryObj } from "@storybook/react";

import AdvocasixDescriptionCard from "@/components/ui/Advocasix/AdvocasixDescriptionCard";

const meta: Meta<typeof AdvocasixDescriptionCard> = {
  title: "UI/AdvocasixHeader1Card",
  component: AdvocasixDescriptionCard,
};

export default meta;
type Story = StoryObj<typeof AdvocasixDescriptionCard>;

export const Primary: Story = {
  args: {
    title: "ADVOCASIX",
    desc: "The Samahan ng mga Mag-aaral ng Pamantasan ng Ateneo de Davao, guided by its Jesuit, Filipino, and Mindanaoan values, aspires to be an autonomous student government that is genuinely present in championing here and now its chosen six pillar advocacies.",
  },
  render: (args) => <AdvocasixDescriptionCard {...args} />,
};
