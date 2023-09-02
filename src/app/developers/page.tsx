import React from 'react';
import type { Metadata } from 'next';

import AboutDevelopersHeader from '@/components/ui/AboutDevelopers/AboutDevelopersHeader';
import DeveloperSection from '@/components/ui/AboutDevelopers/DeveloperSection';
import SolidBlueDivider from '@/components/ui/SolidBlueDivider';

export const metadata: Metadata = {
  title: 'Developers | At the Get Go',
  description:
    'Meet the talented developers behind the SAMAHAN website. Discover their stories, skills, and the passion they bring to creating a platform that serves the Ateneo de Davao University community.',
};

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
