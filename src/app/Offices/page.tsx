import React from 'react';

import OfficesDeputiesSection from '@/components/ui/OfficesDeputiesSection';

const page = () => {
  return (
    <div className="container-xl">
      <OfficesDeputiesSection office="OSP" />
      <OfficesDeputiesSection office="OVP" />
      <OfficesDeputiesSection office="OSG" />
      <OfficesDeputiesSection office="OST" />
    </div>
  );
};

export default page;
