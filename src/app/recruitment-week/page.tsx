import React from 'react';

import RecWeekModalsSection from '@/components/RecWeek/RecWeekModalsSection';
import BigSectionUI from '@/components/ui/BigSectionUI';
import RecWeekHeader from '@/components/ui/RecWeek/RecWeekHeader';
import RecWeekOfficeCard from '@/components/ui/RecWeek/RecWeekOfficeCard';

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
      <div className="h-28 w-full bg-lightBlue mt-10" />
    </>
  );
};

export default page;
