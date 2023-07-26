import React from 'react';

import OfficerSmallCard from '@/components/ui/OfficerSmallCard';
import { Representatives } from '@/data/Representatives';

const RepresentativesSection: React.FC = () => {
  return (
    <>
      <div className="border-solid border-card border-lightBlue rounded-section-card py-20 m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Representatives.map((item, index) => (
          <OfficerSmallCard key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default RepresentativesSection;
