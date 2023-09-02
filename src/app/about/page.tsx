import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

import AtTheGetGo from 'public/assets/images/AtTheGetGo.png';
import SamahanMembersPhoto from 'public/assets/images/samahan_members.jpg';

import YearofMagis from '@/components/ui/AboutPage/AboutFifthSection/YearOfMagisCard';
import AboutHeroSection from '@/components/ui/AboutPage/AboutFirstSection/AboutHeroSection';
import AboutFourthSection from '@/components/ui/AboutPage/AboutFourthSection/AboutFourthSection';
import AboutSecondSection from '@/components/ui/AboutPage/AboutSecondSection/AboutSecondSection';
import WeNavigateCard from '@/components/ui/AboutPage/AboutThirdSection/WeNavigateCard';
import BigSectionUI from '@/components/ui/BigSectionUI';
import Divider from '@/components/ui/Divider';

export const metadata: Metadata = {
  title: 'About | At the Get Go',
  description:
    'Learn about SAMAHAN, the student government of Ateneo de Davao University, and discover our mission, vision, and the values that guide us in serving the student community.',
};

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <AboutHeroSection />
      {/* Divider */}
      <Divider
        page="AboutPage"
        text="The Samahan ng mga Mag-aaral ng Pamantasang ng Ateneo de Davao, or SAMAHAN, is the lone autonomous Student Government of the College Unit of Ateneo de Davao University.&nbsp;"
      />
      {/* At the get go image */}
      <section className="container-2xl my-5 sm:my-14 lg:my-20">
        <div className="w-full h-40 sm:h-[15rem] lg:h-[25rem] flex justify-center relative animate-fade py-20">
          <Image
            src={AtTheGetGo}
            placeholder="blur"
            alt="AtTheGetGo"
            className="object-contain"
            draggable={false}
            fill
          />
        </div>
      </section>
      {/* Second Section */}
      <BigSectionUI>
        <AboutSecondSection />
      </BigSectionUI>
      {/* Third Section */}
      <BigSectionUI>
        <WeNavigateCard />
      </BigSectionUI>
      {/* Fourth Section */}
      <BigSectionUI>
        <AboutFourthSection />
      </BigSectionUI>
      {/* Fifth Section */}
      <BigSectionUI>
        <YearofMagis />
      </BigSectionUI>
      {/* SAMAHAN Picture */}
      <div className="relative w-full h-[25rem] lg:h-[34.25rem] bg-lightBlue mt-10">
        <Image
          src={SamahanMembersPhoto}
          placeholder="blur"
          alt="AtTheGetGo"
          className="object-cover object-center"
          draggable={false}
          fill
        />
      </div>
    </>
  );
};

export default AboutPage;
