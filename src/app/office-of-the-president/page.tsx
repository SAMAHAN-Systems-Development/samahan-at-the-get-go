import React from 'react';

import OSP from 'public/assets/images/OSPImage.png';

import InitiativesModalsSection from '@/components/Offices/InitiativesModalsSection';
import BigSectionUI from '@/components/ui/BigSectionUI';
import InfiniteMarquee from '@/components/ui/InfiniteMarquee';
import DepartmentSection from '@/components/ui/Offices/DepartmentSection';
import InitiativesTitleCard from '@/components/ui/Offices/InitiativesTitleCard';
import OfficesCardNew from '@/components/ui/Offices/OfficesCardNew';
import OfficesHeaderNew from '@/components/ui/Offices/OfficesHeaderNew';
import SmallOfficesCardCarousel from '@/components/ui/Offices/SmallOfficesCardCarousel';
import OfficesDeputiesSection from '@/components/ui/OfficesDeputiesSection';
import SmallSectionUI from '@/components/ui/SmallSectionUI';
import SolidBlueDivider from '@/components/ui/SolidBlueDivider';

const page = () => {
  return (
    <>
      <OfficesHeaderNew officesPosition="President" imageUrl={OSP} />
      <BigSectionUI>
        <OfficesCardNew
          title="The OSP"
          description="is the highest executive office, aims to establish harmony and efficiency in both the internal operations of the student government and external relations."
        />
      </BigSectionUI>
      <SmallSectionUI>
        <OfficesDeputiesSection office="OSP" />
      </SmallSectionUI>
      <SmallSectionUI>
        <DepartmentSection office="OSG" />
      </SmallSectionUI>
      <BigSectionUI>
        <InitiativesTitleCard />
      </BigSectionUI>
      <InfiniteMarquee />
      <BigSectionUI>
        <InitiativesModalsSection office="OSP" />
      </BigSectionUI>
      <BigSectionUI>
        <SmallOfficesCardCarousel officesPosition="PRESIDENT" />
      </BigSectionUI>
      <SolidBlueDivider />
    </>
  );
};

export default page;
