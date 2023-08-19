import React from 'react';

import Alkuino from 'public/assets/images/Alkuino.jpg';

import OfficerSmallCard from '@/components/ui/OfficerSmallCard';
const page = () => {
  return (
    <>
      <OfficerSmallCard
        firstName="Angelli Kezzed"
        lastName="Alkuino"
        position="Deputy Director"
        imageUrl={Alkuino}
        email="akmalkuino@addu.edu.ph"
        textColorClass="text-blue"
      />
    </>
  );
};

export default page;
