import React from 'react';
import Image from 'next/image';

import imgSrc from 'public/assets/images/RoxasGate (2).png';

import WeNavigateCard from '@/components/ui/AboutPage/AboutThirdSection/WeNavigateCard';

const AboutThirdSection = () => {
  return (
    <>
      <div className="flex flex-col justify-start w-full gap-2 p-5 xl:flex-row md:flex-col">
        <WeNavigateCard />
        <div className="relative xl:w-2/5 md:w-full w-full xl:h-auto lg:h-96 h-screen rounded-card">
          <Image
            src={imgSrc}
            placeholder="blur"
            alt="Ateneo Gate"
            className="object-fill"
            draggable={false}
            fill
          />
        </div>
      </div>
    </>
  );
};

export default AboutThirdSection;
