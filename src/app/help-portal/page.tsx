import React from 'react';
import type { Metadata } from 'next';

import FAQsModalsSection from '@/components/HelpPortal/FAQsModalsSection';
import RIAModalsSection from '@/components/HelpPortal/RIAModalsSection';
import BigSectionUI from '@/components/ui/BigSectionUI';
import FAQsHeaderCard from '@/components/ui/HelpPortal/FAQsHeaderCard';
import HelpPortalCard from '@/components/ui/HelpPortal/HelpPortalCard';
import RIAHeaderCard from '@/components/ui/HelpPortal/RIAHeaderCard';
import SamahanGuideBookCard from '@/components/ui/HelpPortal/SamahanGuideBookCard';
import SolidBlueDivider from '@/components/ui/SolidBlueDivider';

export const metadata: Metadata = {
  title: 'Help Portal | At the Get Go',
  description:
    'Find answers to frequently asked questions and access general information designed to assist the students of Ateneo de Davao University. Your one-stop resource for all your SAMAHAN-related queries.',
};

const page = () => {
  return (
    <>
      <HelpPortalCard />
      <BigSectionUI>
        <SamahanGuideBookCard />
      </BigSectionUI>
      <BigSectionUI>
        <RIAHeaderCard />
      </BigSectionUI>
      <RIAModalsSection />
      <BigSectionUI>
        <FAQsHeaderCard />
      </BigSectionUI>
      <FAQsModalsSection />
      <SolidBlueDivider />
    </>
  );
};

export default page;
