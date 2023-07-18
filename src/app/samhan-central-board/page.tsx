import React from 'react';

import SCBClickableCardsSection from '@/components/SCB/SCBClickableCardsSection';
import SCBTitleSection from '@/components/SCB/SCBTitleSection';

const page = () => {
  return (
    <div className="px-8">
      <SCBTitleSection />
      <SCBClickableCardsSection />
    </div>
  );
};

export default page;
