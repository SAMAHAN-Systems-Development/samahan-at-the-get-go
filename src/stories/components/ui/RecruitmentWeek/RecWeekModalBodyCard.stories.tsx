import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import RecWeekModalBodyCard from '@/components/ui/RecruitmentWeek/RecWeekModalBodyCard';

const meta: Meta<typeof RecWeekModalBodyCard> = {
  title: 'Components/Rec Week Modal Body Card',
  component: RecWeekModalBodyCard,
};

export default meta;

type Story = StoryObj<typeof RecWeekModalBodyCard>;

export const Default: Story = {
  args: {
    socials: {
      facebook: 'https://www.facebook.com/',
      twitter: 'https://www.facebook.com/',
      instagram: 'https://www.facebook.com/',
    },
  },
  render: (args) => (
    <RecWeekModalBodyCard {...args}>
      The Department of Campaigns and Advocacies was established in 2019. It
      serves as the advocacy arm of the SAMAHAN Central Board, under the Office
      of the SAMAHAN President. It is tasked to emerge, empower, and safeguard
      the knowledge and actions of the students in their initiatives of
      realizing their social responsibilities as men and women for others,
      serving for the common good. The department will mainly materialize
      priority advocacies from the SAMAHAN Central Board, United Nations
      Sustainable Development Goals, as well as Ateneo de Davao University’s
      Vision and Mission. It envisions every Atenean to actualize the Ignatian
      values and to become dedicated to a lifelong journey of service for social
      justice and common good through active engagement in campaigns and
      advocacies inside and outside the university. Together, we will bring a
      SAMAHAN that will offer genuine service and commitment to do more.
    </RecWeekModalBodyCard>
  ),
};
