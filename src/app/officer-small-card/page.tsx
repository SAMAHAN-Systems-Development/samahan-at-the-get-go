import React from 'react';

import Canonigo from 'public/assets/images/Canonigo.jpg';

import OfficerSmallCard from '@/components/ui/OfficerSmallCard';

const officer = {
  firstName: 'Vincent Cesar',
  lastName: 'Canonigo',
  position: 'Director',
  department: 'Department of Camapigns & Advocacies',
};

const page = () => {
  return (
    <div>
      <OfficerSmallCard officer={officer} imageUrl={Canonigo} />
    </div>
  );
};

export default page;
