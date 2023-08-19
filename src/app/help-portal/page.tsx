import React from 'react';

import FAQsHeaderSection from '@/components/HelpPortal/FAQsHeaderSection';
import HelpPortalWelcomeSection from '@/components/HelpPortal/HelpPortalWelcomeSection';
import RIAHeaderSection from '@/components/HelpPortal/RIAHeaderSection';
import RIAModalsSection from '@/components/HelpPortal/RIAModalsSection';
import SamahanGuidebookSection from '@/components/HelpPortal/SamahanGuidebookSection';

const page = () => {
  return (
    <>
      <HelpPortalWelcomeSection />
      <SamahanGuidebookSection />
      <RIAHeaderSection />
      <RIAModalsSection />
      <FAQsHeaderSection />
    </>
  );
};

export default page;
