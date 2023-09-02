import React from 'react';
import type { Metadata } from 'next';

import OST from 'public/assets/images/OSTImage.png';

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
  title: 'Office of the Treasurer | At the Get Go',
  description:
    'Explore the functions and initiatives of the SAMAHAN Treasurer. Understand the financial activities, responsibilities, and officers committed to ensuring fiscal responsibility and transparency within the Ateneo de Davao University community.',
};

const page = () => {
  return (
    <>
      <OfficesHeaderNew officesPosition="Treasurer" imageUrl={OST} />
      <BigSectionUI>
        <OfficesCardNew
          title="The OST"
          description="aims to establish a well-financed, transparent, and resourceful student government that can utilize its funds to meet its goals and implement its mandates."
        />
      </BigSectionUI>
      <SmallSectionUI>
        <OfficesDeputiesSection office="OST" />
      </SmallSectionUI>
      <SmallSectionUI>
        <DepartmentSection office="OST" />
      </SmallSectionUI>
      <BigSectionUI>
        <InitiativesTitleCard />
      </BigSectionUI>
      <InfiniteMarquee />
      <BigSectionUI>
        <InitiativesModalsSection office="OST" />
      </BigSectionUI>
      <BigSectionUI>
        <SmallOfficesCardSection officesPosition="TREASURER" />
      </BigSectionUI>
      <SolidBlueDivider />
    </>
  );
};

export default page;
