import type { Meta, StoryObj } from "@storybook/react";

import OfficesTitleCardComponent from "@/components/ui/OfficesTitleCardComponent";

const meta: Meta<typeof OfficesTitleCardComponent> = {
  title: "UI/OfficesTitleCardComponent",
  component: OfficesTitleCardComponent,
};

export default meta;
type Story = StoryObj<typeof OfficesTitleCardComponent>;

export const Primary: Story = {
  args: {
    officesPosition: "PRESIDENT",
  },
  render: (args) => <OfficesTitleCardComponent {...args} />,
};
