import React from 'react';

import OfficerSmallCard from '@/components/ui/OfficerSmallCard';
import { Representatives } from '@/data/Representatives';

const RepresentativesSection: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 md:gap-x-5">
        {Representatives.map((item, index) => (
          <OfficerSmallCard key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default RepresentativesSection;
