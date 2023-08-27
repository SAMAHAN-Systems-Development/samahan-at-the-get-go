import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import DataPrivacyThirdSection from '@/components/ui/DataPrivacyPolicyPage/DataPrivacyThirdSection';

const meta: Meta<typeof DataPrivacyThirdSection> = {
  title: 'Components/DataPrivacyThirdSection',
  component: DataPrivacyThirdSection,
};

export default meta;

type Story = StoryObj<typeof DataPrivacyThirdSection>;

export const Default: Story = {
  args: {},
  render: () => <DataPrivacyThirdSection />,
};
