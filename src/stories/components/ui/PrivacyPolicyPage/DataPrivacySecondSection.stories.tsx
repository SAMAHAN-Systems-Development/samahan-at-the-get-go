import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import DataPrivacySecondSection from '@/components/ui/DataPrivacyPolicyPage/DataPrivacySecondSection';

const meta: Meta<typeof DataPrivacySecondSection> = {
  title: 'Components/DataPrivacySecondSection',
  component: DataPrivacySecondSection,
};

export default meta;

type Story = StoryObj<typeof DataPrivacySecondSection>;

export const Default: Story = {
  args: {},
  render: () => <DataPrivacySecondSection />,
};
