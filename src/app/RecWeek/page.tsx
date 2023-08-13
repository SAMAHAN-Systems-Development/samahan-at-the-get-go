import React from 'react';

import RecWeekOfficeCard from '@/components/ui/RecruitmentWeek/RecWeekOfficeCard';
const page = () => {
  return (
    <div className="grid gap-5">
      <RecWeekOfficeCard officeNumber="01" position="President" />
      <RecWeekOfficeCard officeNumber="02" position="Vice-President" />
      <RecWeekOfficeCard officeNumber="03" position="Secretary General" />
      <RecWeekOfficeCard officeNumber="04" position="Treasurer" />
    </div>
  );
};

export default page;
