import React from 'react';

import RepresentativesSection from '@/components/SCB/RepresentativesSection';
import SCBClickableCardsSection from '@/components/SCB/SCBClickableCardsSection';
import Footer from '@/components/ui/Footer';
import InfiniteMarquee from '@/components/ui/InfiniteMarquee';
import Navigation from '@/components/ui/Navigation';
import SCBHeader from '@/components/ui/SCB/SCBHeader';

const page = () => {
  return (
    <>
      <Navigation />
      <SCBHeader />
      <SCBClickableCardsSection />
      <InfiniteMarquee />
      <RepresentativesSection />
      <Footer />
    </>
  );
};

export default page;
