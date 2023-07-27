import React from 'react';

import OfficerSmallCard from '@/components/ui/OfficerSmallCard';
import { Representatives } from '@/data/Representatives';
import { cn } from '@/utils/cvaUtils';

const RepresentativesSection: React.FC = () => {
  const isLastCardCentered = Representatives.length % 2 === 1;

  return (
    <>
      <div className="border-solid border-card border-lightBlue rounded-section-card py-20 m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Representatives.map((item, index) => (
          <div
            key={index}
            className={cn(
              'flex flex-col items-center',
              isLastCardCentered && index === Representatives.length - 1
                ? 'md:col-span-2 lg:col-auto lg:row-auto lg:justify-self-center'
                : ''
            )}
          >
            <OfficerSmallCard {...item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default RepresentativesSection;
