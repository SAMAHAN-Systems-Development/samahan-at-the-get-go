import React from 'react';

import AtTheGetGoCard from '@/components/ui/AboutPage/AboutFourthSection/AtTheGetGoCard';
import ThisYearSamahanCard from '@/components/ui/AboutPage/AboutFourthSection/ThisYearSamahanCard';

const AboutFourthSection = () => {
  return (
    <>
      <div className="relative flex flex-col justify-start w-full gap-2 p-5">
        <ThisYearSamahanCard />
        <AtTheGetGoCard />
      </div>
    </>
  );
};

export default AboutFourthSection;
