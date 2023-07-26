import React from 'react';

import OfficerLargeCard from '@/components/ui/OfficerLargeCard';
import {
  OSGDeputies,
  OSPDeputies,
  OSTDeputies,
  OVPDeputies,
} from '@/data/Deputies';
import { cn } from '@/utils/cvaUtils';

type OfficesDeputiesSectionProps = {
  office: string;
};

const OfficesDeputiesSection: React.FC<OfficesDeputiesSectionProps> = ({
  office,
}) => {
  const handleData = (office: OfficesDeputiesSectionProps['office']) => {
    switch (office) {
      case 'OSP':
        return OSPDeputies;
      case 'OVP':
        return OVPDeputies;
      case 'OSG':
        return OSGDeputies;
      case 'OST':
        return OSTDeputies;
      default:
        return [];
    }
  };

  return (
    <section className="container bg-white border-card border-lightBlue mt-5 rounded-section-card py-12 px-5 md:py-12 lg:py-16 lg:px-7">
      <div className="flex justify-between text-xl text-lightBlue mb-11 px-4">
        <p className="font-artega">02</p>
        <p className="uppercase">Deputies</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {handleData(office).map((officer, index) => {
          return (
            <div
              key={index}
              className={cn(
                'flex sm:justify-center',
                index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
              )}
            >
              <OfficerLargeCard
                officer={{
                  firstName: officer.firstName,
                  lastName: officer.lastName,
                  position: officer.position,
                  imageUrl: officer.imageUrl,
                }}
                isButton={false}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OfficesDeputiesSection;
