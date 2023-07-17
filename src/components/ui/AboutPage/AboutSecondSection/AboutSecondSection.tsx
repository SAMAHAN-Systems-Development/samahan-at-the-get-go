import React from 'react';

import TheSamahanCard from '@/components/ui/AboutPage/AboutSecondSection/TheSamahanCard';
import ThisYearCard from '@/components/ui/AboutPage/AboutSecondSection/ThisYearCard';

const AboutSecondSection = () => {
  return (
    <>
      <div className="flex flex-col justify-start w-full gap-2 p-5 xl:flex-row md:flex-col">
        <TheSamahanCard />
        <ThisYearCard />
      </div>
    </>
  );
};

export default AboutSecondSection;
