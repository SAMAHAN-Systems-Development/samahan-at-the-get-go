import React from 'react';
import Image from 'next/image';

import PolicyPageImage from '/public/assets/images/PolicyPageImage.png';
import BigSectionUI from '@/components/ui/BigSectionUI';
import DataPrivacyPolicyAccordion from '@/components/ui/DataPrivacyPolicy/DataPrivacyPolicyAccordion';
import DataPrivacyFirstSection from '@/components/ui/DataPrivacyPolicyPage/DataPrivacyFirstSection';
import DataPrivacyFourthSection from '@/components/ui/DataPrivacyPolicyPage/DataPrivacyFourthSection';
import DataPrivacyThirdSection from '@/components/ui/DataPrivacyPolicyPage/DataPrivacyThirdSection';

const page = () => {
  return (
    <>
      <div className="overflow-y-hidden relative w-full h-[30.875rem]">
        <Image
          src={PolicyPageImage}
          alt="PolicyImage"
          className="object-cover"
          placeholder="blur"
          draggable={false}
          layout="fill"
        />
      </div>
      <BigSectionUI>
        <DataPrivacyFirstSection />
      </BigSectionUI>
      <BigSectionUI>
        <DataPrivacyPolicyAccordion />
      </BigSectionUI>
      <DataPrivacyThirdSection />
      <BigSectionUI>
        <DataPrivacyFourthSection />
      </BigSectionUI>
    </>
  );
};

export default page;
