import React from 'react';

import RepresentativesSection from '@/components/SCB/RepresentativesSection';
import SCBClickableCardsSection from '@/components/SCB/SCBClickableCardsSection';
import InfiniteMarquee from '@/components/ui/InfiniteMarquee';
import SCBHeader from '@/components/ui/SCB/SCBHeader';

const page = () => {
  return (
    <>
      <SCBHeader />
      <SCBClickableCardsSection />
      <InfiniteMarquee />
      <RepresentativesSection />
    </>
  );
};

export default page;
