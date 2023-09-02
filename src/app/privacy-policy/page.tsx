import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

import PolicyPageImage from '/public/assets/images/PolicyPageImage.png';
import BigSectionUI from '@/components/ui/BigSectionUI';
import DataPrivacyFirstSection from '@/components/ui/DataPrivacyPolicy/DataPrivacyFirstSection';
import DataPrivacyFourthSection from '@/components/ui/DataPrivacyPolicy/DataPrivacyFourthSection';
import DataPrivacyPolicyAccordion from '@/components/ui/DataPrivacyPolicy/DataPrivacyPolicyAccordion';
import DataPrivacyThirdSection from '@/components/ui/DataPrivacyPolicy/DataPrivacyThirdSection';

export const metadata: Metadata = {
  title: 'Privacy Policy | At the Get Go',
  description:
    'Review our Privacy Policy to understand how SAMAHAN collects, uses, and protects your personal information. We are committed to ensuring the privacy and security of the Ateneo de Davao University community.',
};

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
