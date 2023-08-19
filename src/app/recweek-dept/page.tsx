import React from 'react';

import Alkuino from 'public/assets/images/Alkuino.jpg';

import RecWeekDeptCard from '@/components/ui/RecruitmentWeek/RecWeekDeptCard';
const page = () => {
  return (
    <>
      <RecWeekDeptCard
        firstName="Angelli Kezzed"
        lastName="Alkuino"
        position="Deputy Director"
        imageUrl={Alkuino}
        email="akmalkuino@addu.edu.ph"
        textColorClass="text-blue"
      />
    </>
  );
};

export default page;
