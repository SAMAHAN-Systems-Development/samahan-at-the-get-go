import React from 'react';

import DataPrivacyFirstSection from '@/components/ui/DataPrivacyPolicyPage/DataPrivacyFirstSection';
import DataPrivacyFourthSection from '@/components/ui/DataPrivacyPolicyPage/DataPrivacyFourthSection';
import DataPrivacySecondSection from '@/components/ui/DataPrivacyPolicyPage/DataPrivacySecondSection';
import DataPrivacyThirdSection from '@/components/ui/DataPrivacyPolicyPage/DataPrivacyThirdSection';

const page = () => {
  return (
    <>
      <DataPrivacyFirstSection />
      <DataPrivacySecondSection />
      <DataPrivacyThirdSection />
      <DataPrivacyFourthSection />
    </>
  );
};

export default page;
