import React from 'react';
import Image from 'next/image';

import AtTheGetGo from 'public/assets/images/AtTheGetGo.png';
import Samahan from 'public/assets/images/SAMAHAN.png';

import YearofMagis from '@/components/ui/AboutPage/AboutFifthSection/YearOfMagisCard';
import AboutHeroSection from '@/components/ui/AboutPage/AboutFirstSection/AboutHeroSection';
import AboutFourthSection from '@/components/ui/AboutPage/AboutFourthSection/AboutFourthSection';
import AboutSecondSection from '@/components/ui/AboutPage/AboutSecondSection/AboutSecondSection';
import AboutThirdSection from '@/components/ui/AboutPage/AboutThirdSection/AboutThirdSection';
import Divider from '@/components/ui/Divider';

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col items-center">
        <AboutHeroSection />
      </div>
      {/* Divider */}
      <Divider
        page="AboutPage"
        text="The Samahan ng mga Mag-aaral ng Pamantasang ng Ateneo de Davao, or SAMAHAN, is the lone autonomous Student Government of the College Unit of Ateneo de Davao University.&nbsp;"
      />
      {/* At the get go image */}
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-10/12 h-5/6 flex justify-center relative animate-fade">
          <Image
            src={AtTheGetGo}
            placeholder="blur"
            alt="AtTheGetGo"
            className="object-contain"
            fill
          />
        </div>
      </div>
      {/* Second Section */}
      <div className="w-full flex h-5/6 justify-center">
        <AboutSecondSection />
      </div>
      {/* Third Section */}
      <div className="w-full flex sm:h-screen h-5/6 justify-center">
        <AboutThirdSection />
      </div>
      {/* Fourth Section */}
      <div className="w-full flex h-full justify-center">
        <AboutFourthSection />
      </div>
      {/* Fifth Section */}
      <div className="w-full flex justify-center h-5/6">
        <YearofMagis />
      </div>
      {/* SAMAHAN Picture */}
      <div className="w-full sm:h-screen h-52 flex justify-center items-center px-6">
        <div className="w-full sm:h-full h-96 flex justify-center relative animate-fade">
          <Image
            src={Samahan}
            placeholder="blur"
            alt="AtTheGetGo"
            className="object-contain"
            fill
          />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
