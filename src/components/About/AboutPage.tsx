import React from 'react';
import Image from 'next/image';

import imgSrc from 'public/assets/images/AtTheGetGo.png';

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
      <div className="w-full flex h-5/6 justify-center">
        <AboutSecondSection />
      </div>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-10/12 h-5/6 flex justify-center relative">
          <Image
            src={imgSrc}
            placeholder="blur"
            alt="AtTheGetGo"
            className="object-contain"
            fill
          />
        </div>
      </div>

      {/* Third Section */}
      <div className="w-full flex sm:h-screen h-5/6 justify-center">
        <AboutThirdSection />
      </div>
      {/* Fourth Section */}
      <div className="w-full flex h-full justify-center">
        <AboutFourthSection />
      </div>
      {/* Fifth Section */}
      <div className="w-full flex justify-center h-5/6">
        <YearofMagis />
      </div>
    </>
  );
};

export default AboutPage;
