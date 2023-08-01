import React from 'react';

import YearofMagis from '@/components/ui/AboutPage/AboutFifthSection/YearOfMagisCard';
import AboutHeroSection from '@/components/ui/AboutPage/AboutFirstSection/AboutHeroSection';
import AboutFourthSection from '@/components/ui/AboutPage/AboutFourthSection/AboutFourthSection';
import AboutSecondSection from '@/components/ui/AboutPage/AboutSecondSection/AboutSecondSection';
import AboutThirdSection from '@/components/ui/AboutPage/AboutThirdSection/AboutThirdSection';

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col items-center">
        <AboutHeroSection />
      </div>
      {/* Divider */}
      {/* Second Section */}
      <div className="w-full flex h-fit justify-center">
        <AboutSecondSection />
      </div>
      {/* Third Section */}
      <div className="w-full flex sm:h-screen h-full justify-center">
        <AboutThirdSection />
      </div>
      {/* Fourth Section */}
      <div className="w-full flex h-full justify-center">
        <AboutFourthSection />
      </div>
      {/* Fifth Section */}
      <div className="w-full flex h-full justify-center">
        <YearofMagis />
      </div>
    </>
  );
};

export default AboutPage;
