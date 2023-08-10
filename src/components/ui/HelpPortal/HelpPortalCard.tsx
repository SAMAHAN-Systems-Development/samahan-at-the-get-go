import React from 'react';
import Image from 'next/image';

import HelpPortalImage from 'public/assets/images/HelpPortalImage.png';
import WhiteArrowRight from 'public/assets/images/WhiteArrowRight.png';

const HelpPortalCard = () => {
  return (
    <div className="grid relative content-between h-[30rem] overflow-hidden -z-10 w-full border-solid border-card border-lightBlue rounded-section-card py-[3rem] px-[1.8rem] md:py-[3.8rem] md:px-[2.75rem] lg:px-[5.88rem] lg:pt-[4.69rem] lg:pb-[]">
      <Image
        src={HelpPortalImage}
        alt="HelpPortalImage"
        className="object-cover"
        placeholder="blur"
        draggable={false}
        fill
      />
      <div className="relative z-10  max-w-[7.5rem] sm:max-w-[14.6875rem] justify-self-end">
        <Image
          alt="AtTheGetGoLogo"
          src={WhiteArrowRight}
          className="object-contain"
          draggable={false}
        />
      </div>
      <div className="text-white z-10">
        <h1>
          <span className="font-appleGaramond italic block font-medium text-[1.5625rem] sm:text-[1.75rem] md:text-[2.1875rem] lg:text-[3.125rem]">
            Welcome to
          </span>
          <span className="font-artega font-medium text-[1.9375rem] md:text-[2.4375rem] lg:text-[3.125rem]">
            HELP PORTAL
          </span>
        </h1>
        <p className="text-[0.625rem] md:text-[1rem] lg:text-[1rem] sm:max-w-[25rem] md:max-w-[37.4375rem] lg:max-w-[37.4375rem]">
          The SAMAHAN Help Portal aims to assist the student with the different
          academic-related processes online. It will answer frequently asked
          questions (FAQs) and respond to student concerns that deal with online
          transactions.
        </p>
      </div>
    </div>
  );
};

export default HelpPortalCard;
