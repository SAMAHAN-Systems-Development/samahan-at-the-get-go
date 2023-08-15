import React from 'react';

import RepresentativesSection from '@/components/SCB/RepresentativesSection';
import SCBClickableCardsSection from '@/components/SCB/SCBClickableCardsSection';
import SCBTitleSection from '@/components/SCB/SCBTitleSection';
import Footer from '@/components/ui/Footer';
import InfiniteMarquee from '@/components/ui/InfiniteMarquee';
import Navigation from '@/components/ui/Navigation';

const SCBPage = () => {
  return (
    <>
      <Navigation />
      <SCBTitleSection />
      <SCBClickableCardsSection />
      <InfiniteMarquee />
      <RepresentativesSection />
      <Footer />
    </>
  );
};

export default SCBPage;
