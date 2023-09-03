import React from 'react';
import type { Metadata } from 'next';

import RepresentativesSection from '@/components/SCB/RepresentativesSection';
import SCBClickableCardsSection from '@/components/SCB/SCBClickableCardsSection';
import InfiniteMarquee from '@/components/ui/InfiniteMarquee';
import SCBHeader from '@/components/ui/SCB/SCBHeader';

export const metadata: Metadata = {
  title: 'SAMAHAN Central Board | At the Get Go',
  description:
    'Meet the SAMAHAN Central Board, the core officers dedicated to serving the students of Ateneo de Davao University. Discover their roles, responsibilities, and how they contribute to the student community.',
};

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
