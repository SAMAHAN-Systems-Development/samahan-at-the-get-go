import React from 'react';

import FAQsModalsSection from '@/components/HelpPortal/FAQsModalsSection';
import RIAModalsSection from '@/components/HelpPortal/RIAModalsSection';
import BigSectionUI from '@/components/ui/BigSectionUI';
import FAQsHeaderCard from '@/components/ui/HelpPortal/FAQsHeaderCard';
import HelpPortalCard from '@/components/ui/HelpPortal/HelpPortalCard';
import RIAHeaderCard from '@/components/ui/HelpPortal/RIAHeaderCard';
import SamahanGuideBookCard from '@/components/ui/HelpPortal/SamahanGuideBookCard';

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
      <div className="h-28 w-full bg-lightBlue mt-10" />
    </>
  );
};

export default page;
