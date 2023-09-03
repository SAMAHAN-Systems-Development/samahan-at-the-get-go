import React from 'react';
import type { Metadata } from 'next';

import OSG from 'public/assets/images/OSGImage.png';

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

export const metadata: Metadata = {
  title: 'Office of the Secretary-General | At the Get Go',
  description:
    'Discover the role and initiatives of the SAMAHAN Secretary-General. Learn about the activities, responsibilities, and officers dedicated to maintaining transparency and communication within the Ateneo de Davao University community.',
};

const page = () => {
  return (
    <>
      <OfficesHeaderNew officesPosition="Secretary-General" imageUrl={OSG} />
      <BigSectionUI>
        <OfficesCardNew
          title="The OSG"
          description="aims to ensure efficiency on administrative and secretariat works that shall mobilize the student government to operate its services and meet its goals."
        />
      </BigSectionUI>
      <SmallSectionUI>
        <OfficesDeputiesSection office="OSG" />
      </SmallSectionUI>
      <SmallSectionUI>
        <DepartmentSection office="OSG" />
      </SmallSectionUI>
      <BigSectionUI>
        <InitiativesTitleCard />
      </BigSectionUI>
      <InfiniteMarquee />
      <BigSectionUI>
        <InitiativesModalsSection office="OSG" />
      </BigSectionUI>
      <BigSectionUI>
        <SmallOfficesCardSection officesPosition="SECRETARY-GENERAL" />
      </BigSectionUI>
      <SolidBlueDivider />
    </>
  );
};

export default page;
