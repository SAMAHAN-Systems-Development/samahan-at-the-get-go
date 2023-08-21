import React from 'react';

import OSP from 'public/assets/images/OSPImage.png';

import InitiativesModalsSection from '@/components/Offices/InitiativesModalsSection';
import Footer from '@/components/ui/Footer';
import InfiniteMarquee from '@/components/ui/InfiniteMarquee';
import Navigation from '@/components/ui/Navigation';
import DepartmentSection from '@/components/ui/Offices/DepartmentSection';
import InitiativesTitleCard from '@/components/ui/Offices/InitiativesTitleCard';
import OfficesCardNew from '@/components/ui/Offices/OfficesCardNew';
import OfficesHeaderNew from '@/components/ui/Offices/OfficesHeaderNew';
import OfficesDeputiesSection from '@/components/ui/OfficesDeputiesSection';

const OSPPage = () => {
  return (
    <>
      <Navigation />
      <OfficesHeaderNew officesPosition="President" imageUrl={OSP} />
      <OfficesCardNew
        title="The OSP"
        description="is the highest executive office, aims to establish harmony and efficiency in both the internal operations of the student government and external relations."
      />
      <OfficesDeputiesSection office="OSP" />
      <DepartmentSection office="OSG" />
      <InitiativesTitleCard />
      <InfiniteMarquee />
      <InitiativesModalsSection office="OSP" />
      <Footer />
    </>
  );
};

export default OSPPage;
