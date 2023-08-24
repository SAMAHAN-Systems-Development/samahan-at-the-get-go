import type { FC } from 'react';
import React from 'react';

import AdvocasixModalsSection from '@/components/Home/AdvocasixModalsSection';
import HeroSection from '@/components/Home/HeroSection';
import BigSectionUI from '@/components/ui/BigSectionUI';

const HomePage: FC = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="md:mb-20 mb-8">
        <BigSectionUI>
          <HeroSection />
        </BigSectionUI>
      </div>
      <BigSectionUI>
        <AdvocasixModalsSection />
      </BigSectionUI>
    </div>
  );
};

export default HomePage;
