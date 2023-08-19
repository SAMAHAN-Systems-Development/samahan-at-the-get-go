import type { Meta, StoryObj } from '@storybook/react';

import RIAModalBodyCard from '@/components/ui/HelpPortal/RIAModalBodyCard';

const meta: Meta<typeof RIAModalBodyCard> = {
  title: 'UI/RIA Modal Body Card',
  component: RIAModalBodyCard,
};

export default meta;
type Story = StoryObj<typeof RIAModalBodyCard>;

export const Primary: Story = {
  args: {
    title: 'Enrollment',
  },
  render: (args) => (
    <RIAModalBodyCard {...args}>
      <div className="">
        Clear all tagged obligations from the previous semester by contacting
        concerned offices. <br />
        Choose the schedule of classes of the courses that are required to be
        taken.
        <br />
        Pay the required amount online. Once the payment has been processed, the
        student will be tagged as “enrolled” in the SIS.
        <br />
        Payment will reflect within one to three business days. For other
        concerns, please message the AdDU Finance on Facebook, or through their
        telephone number 082 221 2411 loc 8237 or 8217.
        <br />
        Print or screenshot the schedule and wait for the start of the semester.
        <br />
      </div>
    </RIAModalBodyCard>
  ),
};
