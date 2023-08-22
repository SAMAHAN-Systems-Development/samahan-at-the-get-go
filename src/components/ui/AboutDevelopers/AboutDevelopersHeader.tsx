import React from 'react';
import Image from 'next/image';

import AboutDevelopersImage from 'public/assets/images/AboutDevelopersImage.png';
const AboutDevelopersHeader = () => {
  return (
    <div className="w-full grid content-between text-lightBlue">
      <div className="overflow-y-hidden relative w-full h-[23rem] sm:h-[23.9375rem] md:h-[42.0625rem]">
        <Image
          src={AboutDevelopersImage}
          alt="About Developers Image"
          className="object-cover"
          placeholder="blur"
          draggable={false}
          fill
        />
        <div className="absolute inset-x-0 bottom-0 h-[10rem] bg-gradient-to-b from-white/0 to-white" />
      </div>
      <div className="mt-[1rem] md:mt-[3.88rem] lg:mt-[1.38rem] mb:[5.31rem] md:mb-[6.38rem] lg:mb-[10.25rem]">
        <h1 className="text-center">
          <span className="font-appleGaramond block italic font-bold text-[1.5625rem] sm:text-[2.4rem] md:text-[3.4375rem] lg:text-[3.9375rem] leading-[1.2rem] sm:leading-[2rem] md:leading-[2.7rem] lg:leading-none">
            The
          </span>
          <span className="font-artega uppercase font-medium text-[1.9375rem] sm:text-[2.5rem] md:text-[3.1875rem] lg:text-[4.6875rem] leading-[2rem] sm:leading-[3rem] md:leading-[4.5rem] lg:leading-none">
            Developers
          </span>
        </h1>
      </div>
    </div>
  );
};

export default AboutDevelopersHeader;
