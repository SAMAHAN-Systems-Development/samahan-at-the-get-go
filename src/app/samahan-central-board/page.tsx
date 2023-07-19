import React from 'react';

import SCBClickableCardsSection from '@/components/SCB/SCBClickableCardsSection';
import SCBTitleSection from '@/components/SCB/SCBTitleSection';

const page = () => {
  return (
    <div className="container-2xl">
      <SCBTitleSection />
      <SCBClickableCardsSection />
    </div>
  );
};

export default page;
