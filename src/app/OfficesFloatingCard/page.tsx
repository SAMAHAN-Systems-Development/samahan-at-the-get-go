import React from 'react';

import SCBClickableCardsSection from '@/components/SCB/SCBClickableCardsSection';
import OfficesFloatingCard from '@/components/ui/Offices/OfficesFloatingCard';
import OfficesDeputiesSection from '@/components/ui/OfficesDeputiesSection';

const page = () => {
  return (
    <div>
      <SCBClickableCardsSection />
      <OfficesDeputiesSection office="OSP" />
      <OfficesFloatingCard office="OSP" />
    </div>
  );
};

export default page;
