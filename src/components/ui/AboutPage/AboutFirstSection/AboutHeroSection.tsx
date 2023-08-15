import React from 'react';
import Image from 'next/image';

import AboutPageHeaderImage from 'public/assets/images/AboutPageHeaderImage.png';
const AboutHeroSection = () => {
  return (
    <div className="w-full overflow-y-hidden relative h-[25rem] sm:h-[28rem] md:h-[42.0625rem] lg:h-[66.25rem] lg:px-[7.87rem] lg:py-[13.94rem]">
      <Image
        alt="AboutPageHeaderImage"
        src={AboutPageHeaderImage}
        placeholder="blur"
        className="object-cover"
        draggable={false}
        fill
      />
      <div className="absolute inset-x-0 bottom-0 h-[10rem] bg-gradient-to-b from-white/0 to-white" />
      <div className="grid content-between">
        <div className="flex flex-row text-sm text-white w-full justify-between z-10 px-7 pt-6">
          <p className="font-artega font-medium text-[0.875rem] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.5625rem]">
            About Us
          </p>
          <p className="font-appleGaramound italic font-bold text-[0.875rem] sm:text-[1.25rem] md:text-[1.46875rem] lg:text-[1.9375rem]">
            #AtTheGetGo
          </p>
        </div>
        <div className="mb-[3.81rem] mt-[5rem] md:mb-[3.81rem] md:mt-[9.25] lg:mb-[3.75rem] lg:mt-[12.5rem] text-white z-10">
          <h1 className="text-center">
            <span className="font-appleGaramond block italic font-bold text-[1.5625rem] sm:text-[2.4rem] md:text-[3.4375rem] lg:text-[3.9375rem] leading-[1.2rem] sm:leading-[2rem] md:leading-[2.7rem] lg:leading-none">
              This is
            </span>
            <span className="font-artega uppercase text-wrap font-medium text-[1.5rem] max-w-[20.3125rem] sm:text-[2.5rem] md:text-[3.8125rem] md:w-[46rem] lg:w-[36rem] lg:text-[5.9375rem] leading-[2rem] sm:leading-[3rem] md:leading-[4.5rem] lg:leading-none">
              SAMAHAN
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
