import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import DataPrivacyFourthSection from '@/components/ui/DataPrivacyPolicyPage/DataPrivacyFourthSection';

const meta: Meta<typeof DataPrivacyFourthSection> = {
  title: 'Components/DataPrivacyFourthSection',
  component: DataPrivacyFourthSection,
};

export default meta;

type Story = StoryObj<typeof DataPrivacyFourthSection>;

export const Default: Story = {
  args: {},
  render: () => <DataPrivacyFourthSection />,
};
