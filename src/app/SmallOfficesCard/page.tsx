import React from 'react';

import SmallOfficesCard from '@/components/ui/Offices/SmallOfficesCard';
import { OfficesDescription } from '@/data/OfficesDescription';
const page = () => {
  const OSPData = OfficesDescription.find(
    (office) => office.officesPosition === 'PRESIDENT'
  );
  // dle ko mag in ani sa final page for show ra ni
  if (!OSPData) {
    return null;
  }
  return (
    <div className="grid grid-flow-col gap-5">
      <SmallOfficesCard
        officesTitle="OSP"
        imageUrl={OSPData.imageUrl}
        officesPosition="President"
      />
      <SmallOfficesCard
        officesTitle="OSP"
        imageUrl={OSPData.imageUrl}
        officesPosition="President"
      />
      <SmallOfficesCard
        officesTitle="OSP"
        imageUrl={OSPData.imageUrl}
        officesPosition="President"
      />
    </div>
  );
};

export default page;
