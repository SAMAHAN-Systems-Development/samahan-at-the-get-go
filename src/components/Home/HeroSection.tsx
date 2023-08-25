import React from 'react';

import AtTheGetGoDefinition from '@/components/ui/Hero/AtTheGetGoDefinition';
import AtTheGetGoLogo from '@/components/ui/Hero/AtTheGetGoLogo';
import MainPageMarquee from '@/components/ui/Hero/MainPageMarquee';

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center container">
      <div className="flex-grow xl:pt-28 md:pt-16 pt-16 2xl:mb-36 xl:mb-16 md:mb-12 mb-4">
        <AtTheGetGoLogo />
        <AtTheGetGoDefinition />
      </div>
      <div className="w-full flex flex-col justify-center items-center relative z-10">
        <MainPageMarquee />
      </div>
    </div>
  );
};

export default HeroSection;
