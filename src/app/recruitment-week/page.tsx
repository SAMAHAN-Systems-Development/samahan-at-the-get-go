import React from 'react';
import type { Metadata } from 'next';

import RecWeekModalsSection from '@/components/RecWeek/RecWeekModalsSection';
import BigSectionUI from '@/components/ui/BigSectionUI';
import RecWeekHeader from '@/components/ui/RecWeek/RecWeekHeader';
import RecWeekOfficeCard from '@/components/ui/RecWeek/RecWeekOfficeCard';
import SolidBlueDivider from '@/components/ui/SolidBlueDivider';

export const metadata: Metadata = {
  title: 'Recruitment Week | At the Get Go',
  description:
    'Join the excitement of Recruitment Week at Ateneo de Davao University! Explore the various clubs and organizations on campus and find your perfect fit. Get involved and make a difference!',
};

const page = () => {
  return (
    <>
      <RecWeekHeader />
      <section className="my-10">
        <RecWeekOfficeCard officeNumber="01" position="President" />
      </section>
      <BigSectionUI>
        <RecWeekModalsSection office="OSP" />
      </BigSectionUI>
      <section className="my-10">
        <RecWeekOfficeCard officeNumber="02" position="Vice President" />
      </section>
      <BigSectionUI>
        <RecWeekModalsSection office="OVP" />
      </BigSectionUI>
      <section className="my-10">
        <RecWeekOfficeCard officeNumber="03" position="Secretary-General" />
      </section>
      <BigSectionUI>
        <RecWeekModalsSection office="OSG" />
      </BigSectionUI>
      <section className="my-10">
        <RecWeekOfficeCard officeNumber="04" position="Treasurer" />
      </section>
      <BigSectionUI>
        <RecWeekModalsSection office="OST" />
      </BigSectionUI>
      <SolidBlueDivider />
    </>
  );
};

export default page;
