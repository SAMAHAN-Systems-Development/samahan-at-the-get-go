import React from 'react';

import AboutForthSectionBlueCard from '@/components/ui/AboutPage/AboutFourthSection/AboutForthSectionBlueCard';
import AboutForthSectionOrangeCard from '@/components/ui/AboutPage/AboutFourthSection/AboutForthSectionOrangeCard';

const AboutFourthSection = () => {
  return (
    <>
      <div className="relative flex flex-col justify-start w-full gap-2 p-5">
        <AboutForthSectionBlueCard />
        <AboutForthSectionOrangeCard />
      </div>
    </>
  );
};

export default AboutFourthSection;
