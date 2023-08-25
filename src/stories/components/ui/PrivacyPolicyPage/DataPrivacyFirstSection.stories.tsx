import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import DataPrivacyFirstSection from '@/components/ui/DataPrivacyPolicyPage/DataPrivacyFirstSection';

const meta: Meta<typeof DataPrivacyFirstSection> = {
  title: 'Components/DataPrivacyFirstSection',
  component: DataPrivacyFirstSection,
};

export default meta;

type Story = StoryObj<typeof DataPrivacyFirstSection>;

export const Default: Story = {
  args: {},
  render: () => <DataPrivacyFirstSection />,
};
