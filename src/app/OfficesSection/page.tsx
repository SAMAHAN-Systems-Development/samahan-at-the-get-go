import React from 'react';

import type { OfficesType } from 'lib/types/officesType';

import OfficesCardNew from '@/components/ui/Offices/OfficesCardNew';
import OfficesHeaderNew from '@/components/ui/Offices/OfficesHeaderNew';
import OfficesDescriptionData from '@/data/OfficesDescription';

const page = () => {
  return (
    <div>
      {OfficesDescriptionData.map((office: OfficesType, index: number) => (
        <div key={index} className="mb-16">
          <OfficesHeaderNew
            position={office.officesPosition}
            imageSrc={office.imageUrl}
          />
          <div className="mx-5">
            <OfficesCardNew
              title={office.officesTitle}
              description={office.officesDescription}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
