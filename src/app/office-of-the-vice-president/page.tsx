import React from 'react';

import OVP from 'public/assets/images/OVPImage.png';

import InitiativesModalsSection from '@/components/Offices/InitiativesModalsSection';
import BigSectionUI from '@/components/ui/BigSectionUI';
import InfiniteMarquee from '@/components/ui/InfiniteMarquee';
import DepartmentSection from '@/components/ui/Offices/DepartmentSection';
import InitiativesTitleCard from '@/components/ui/Offices/InitiativesTitleCard';
import OfficesCardNew from '@/components/ui/Offices/OfficesCardNew';
import OfficesHeaderNew from '@/components/ui/Offices/OfficesHeaderNew';
import SmallOfficesCardSection from '@/components/ui/Offices/SmallOfficesCardSection';
import OfficesDeputiesSection from '@/components/ui/OfficesDeputiesSection';
import SmallSectionUI from '@/components/ui/SmallSectionUI';
import SolidBlueDivider from '@/components/ui/SolidBlueDivider';

const page = () => {
  return (
    <>
      <OfficesHeaderNew officesPosition="Vice President" imageUrl={OVP} />
      <BigSectionUI>
        <OfficesCardNew
          title="The OVP"
          description="aims to supervise the internal affairs of the SAMAHAN Central Board and lead the Student Assembly."
        />
      </BigSectionUI>
      <SmallSectionUI>
        <OfficesDeputiesSection office="OVP" />
      </SmallSectionUI>
      <SmallSectionUI>
        <DepartmentSection office="OVP" />
      </SmallSectionUI>
      <BigSectionUI>
        <InitiativesTitleCard />
      </BigSectionUI>
      <InfiniteMarquee />
      <BigSectionUI>
        <InitiativesModalsSection office="OVP" />
      </BigSectionUI>
      <BigSectionUI>
        <SmallOfficesCardSection officesPosition="VICE PRESIDENT" />
      </BigSectionUI>
      <SolidBlueDivider />
    </>
  );
};

export default page;
