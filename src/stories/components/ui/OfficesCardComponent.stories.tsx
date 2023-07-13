import type { Meta, StoryObj } from "@storybook/react";

import OfficesCardComponent from "@/components/ui/OfficesCardComponent";

const meta: Meta<typeof OfficesCardComponent> = {
  title: "UI/OfficesCardComponent",
  component: OfficesCardComponent,
};

export default meta;
type OfficesCardComponentStory = StoryObj<typeof OfficesCardComponent>;

export const Primary: OfficesCardComponentStory = {
  args: {
    officesTitle: "Title",
    officesDescription: "Description",
  },
  render: (args) => <OfficesCardComponent {...args} />,
};
