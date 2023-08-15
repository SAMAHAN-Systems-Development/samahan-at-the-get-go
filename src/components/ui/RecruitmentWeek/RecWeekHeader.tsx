import React from 'react';
import Image from 'next/image';

import RecWeekHeaderImage from 'public/assets/images/RecWeekHeader.png';
import WhiteArrowRight from 'public/assets/images/WhiteArrow4.png';

const RecWeekHeader = () => {
  return (
    <div className="grid relative content-between h-[30rem] sm:h-[38.75rem] md:h-[52.6875rem] lg:h-screen overflow-hidden -z-10 w-full py-[3rem] px-[1.8rem] md:py-[3.8rem] md:px-[2.75rem] lg:px-[5.88rem] lg:pt-[4.69rem] lg:pb-[6.31rem]">
      <Image
        src={RecWeekHeaderImage}
        alt="RecWeekHeaderImage"
        className="object-cover"
        placeholder="blur"
        draggable={false}
        fill
      />
      <div className="relative z-10 max-w-[7.5rem] sm:max-w-[14.6875rem] justify-self-end">
        <Image
          alt="AtTheGetGoLogo"
          src={WhiteArrowRight}
          className="object-contain"
          placeholder="blur"
          draggable={false}
        />
      </div>
      <div className="text-white z-10">
        <h1>
          <span className="font-appleGaramond block uppercase italic font-medium text-[1.2625rem] sm:text-[1.75rem] md:text-[2.1875rem] lg:text-[3.125rem]">
            Samahan
          </span>
          <span className="font-artega uppercase text-[1.4375rem] sm:text-[1.75rem] md:text-[2.1875rem] lg:text-[3.8125rem] max-w-[19rem] lg:w-full sm:no-wrap text-wrap">
            Recruitment Week
          </span>
        </h1>
      </div>
    </div>
  );
};

export default RecWeekHeader;
