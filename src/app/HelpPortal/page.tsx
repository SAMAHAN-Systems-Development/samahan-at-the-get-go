import React from 'react';

import HelpPortalCard from '@/components/ui/HelpPortal/HelpPortalCard';
import RelevantInformationAreaCard from '@/components/ui/HelpPortal/RelevantInformationAreaCard';
import SamahanGuideBookCard from '@/components/ui/HelpPortal/SamahanGuideBookCard';

const page = () => {
  return (
    <div>
      <HelpPortalCard />
      <SamahanGuideBookCard />
      <RelevantInformationAreaCard />
    </div>
  );
};

export default page;
