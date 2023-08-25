import type { FC } from 'react';
import React from 'react';

import AdvocasixModalsSection from '@/components/Home/AdvocasixModalsSection';
import HeroSection from '@/components/Home/HeroSection';
import AdvocasixDescriptionCard from '@/components/ui/Advocasix/AdvocasixDescriptionCard';
import BigSectionUI from '@/components/ui/BigSectionUI';
import SolidBlueDivider from '@/components/ui/SolidBlueDivider';

const HomePage: FC = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="md:mb-20 mb-8">
        <BigSectionUI>
          <HeroSection />
        </BigSectionUI>
      </div>
      <AdvocasixDescriptionCard />
      <BigSectionUI>
        <AdvocasixModalsSection />
      </BigSectionUI>
      <SolidBlueDivider />
    </div>
  );
};

export default HomePage;
