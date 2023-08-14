import React from 'react';

import OfficesCardNew from '@/components/ui/Offices/OfficesCardNew';
import OfficesHeaderNew from '@/components/ui/Offices/OfficesHeaderNew';
import OfficesData from '@/data/OfficesDescription.json';
const page = () => {
  return (
    <div>
      {OfficesData.map((office, index) => (
        <div key={index} className="mb-16">
          <OfficesHeaderNew
            position={office.officesPosition}
            imageSrc={office.ImageUrl}
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
