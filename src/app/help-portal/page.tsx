import React from 'react';
import type { Metadata } from 'next';

import FAQsModalsSection from '@/components/HelpPortal/FAQsModalsSection';
import RIAModalsSection from '@/components/HelpPortal/RIAModalsSection';
import StudentServicesModalsSection from '@/components/HelpPortal/StudentServicesModalsSection';
import BigSectionUI from '@/components/ui/BigSectionUI';
import FAQsHeaderCard from '@/components/ui/HelpPortal/FAQsHeaderCard';
import HelpPortalCard from '@/components/ui/HelpPortal/HelpPortalCard';
import RIAHeaderCard from '@/components/ui/HelpPortal/RIAHeaderCard';
import StrawCard from '@/components/ui/HelpPortal/StrawCard';
import StudentServicesHeaderCard from '@/components/ui/HelpPortal/StudentServicesHeaderCard';
import SolidBlueDivider from '@/components/ui/SolidBlueDivider';

export const metadata: Metadata = {
  title: 'SupportAdDU | At the Get Go',
  description:
    'Find answers to frequently asked questions and access general information designed to assist the students of Ateneo de Davao University. Your one-stop resource for all your SAMAHAN-related queries.',
};

const page = () => {
  return (
    <>
      <HelpPortalCard />
      {/* TO BE REPLACED WITH STRAW COMPLAINT DESK */}
      <BigSectionUI>
        <StrawCard />
      </BigSectionUI>
      <BigSectionUI>
        <RIAHeaderCard />
      </BigSectionUI>
      <RIAModalsSection />
      <BigSectionUI>
        <StudentServicesHeaderCard />
      </BigSectionUI>
      <StudentServicesModalsSection />
      <BigSectionUI>
        <FAQsHeaderCard />
      </BigSectionUI>
      <FAQsModalsSection />
      <SolidBlueDivider />
    </>
  );
};

export default page;
