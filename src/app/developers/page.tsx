import React from 'react';

import AboutDevelopersHeader from '@/components/ui/AboutDevelopers/AboutDevelopersHeader';
import DeveloperSection from '@/components/ui/AboutDevelopers/DeveloperSection';
import SolidBlueDivider from '@/components/ui/SolidBlueDivider';
const page = () => {
  return (
    <>
      <AboutDevelopersHeader />
      <DeveloperSection />
      <SolidBlueDivider />
    </>
  );
};

export default page;
