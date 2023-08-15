import React from 'react';

import OfficerSmallCard from '@/components/ui/OfficerSmallCard';
import {
  OSGDeputies,
  OSPDeputies,
  OSTDeputies,
  OVPDeputies,
} from '@/data/Deputies';

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
    <section className="container mt-5 py-12 px-5 md:py-12 lg:py-16 lg:px-7">
      <h3 className="font-artega uppercase text-lightBlue text-center mb-16 text-xl sm:text-title-sm lg:text-title-md">
        Samahan Deputies
      </h3>
      <div className="flex flex-wrap justify-center gap-2">
        {handleData(office).map((officer, index) => {
          return (
            <div key={index}>
              <OfficerSmallCard {...officer} textColorClass="text-lightBlue" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OfficesDeputiesSection;
