import React from 'react';

import SCBClickableCardsSection from '@/components/SCB/SCBClickableCardsSection';
import SCBTitleSection from '@/components/SCB/SCBTitleSection';
import Navigation from '@/components/ui/Navigation';
import RepresentativesSection from '@/components/ui/SCB/RepresentativesSection';

const SCBPage = () => {
  return (
    <>
      <Navigation />
      <SCBTitleSection />
      <SCBClickableCardsSection />
      <RepresentativesSection />
    </>
  );
};

export default SCBPage;
