import React from 'react';

import FAQSModalSection from '@/components/ui/HelpPortal/FAQSModalSection';
import RelevantInformationAreaCard from '@/components/ui/HelpPortal/RelevantInformationAreaCard';
const page = () => {
  return (
    <div>
      <RelevantInformationAreaCard />
      <FAQSModalSection />
      <RelevantInformationAreaCard />
    </div>
  );
};

export default page;
