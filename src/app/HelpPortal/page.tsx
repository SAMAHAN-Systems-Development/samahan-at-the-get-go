import React from 'react';

import FrequentlyAskedQuestionCard from '@/components/ui/HelpPortal/FrequentlyAskedQuestionCard';
import HelpPortalCard from '@/components/ui/HelpPortal/HelpPortalCard';
import RelevantInformationAreaCard from '@/components/ui/HelpPortal/RelevantInformationAreaCard';
import SamahanGuideBookCard from '@/components/ui/HelpPortal/SamahanGuideBookCard';

const page = () => {
  return (
    <div className="px-5">
      <HelpPortalCard />
      <SamahanGuideBookCard />
      <RelevantInformationAreaCard />
      <FrequentlyAskedQuestionCard />
    </div>
  );
};

export default page;
