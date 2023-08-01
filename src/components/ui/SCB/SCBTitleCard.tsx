import React from 'react';
import Image from 'next/image';

import SamahanAtTheGetGoLogo from 'public/assets/images/SamahanAtTheGetGoLogo.png';

const SCBTitleCard = () => {
  return (
    <div className="h-[17.5rem] w-full grid content-between border-solid border-card border-lightBlue rounded-section-card py-4 px-7 sm:h-[18.75rem] md:h-[28.125rem] lg:h-[43.75rem] lg:px-20 lg:py-7">
      <div className="relative ml-auto w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28">
        <Image
          src={SamahanAtTheGetGoLogo}
          alt="SamahanAtTheGetGoLogo"
          className="object-contain"
          placeholder="blur"
          draggable={false}
          fill
        />
      </div>
      <div className="font-artega uppercase text-lightBlue text-[1.25rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[5.6rem] leading-[1.3rem] sm:leading-[2.3rem] md:leading-[3rem] lg:leading-[6rem]">
        <h1 className="uppercase">
          <span className="block">Samahan</span>
          <span className="block">Central</span>
          <span className="block">Board</span>
        </h1>
      </div>
    </div>
  );
};

export default SCBTitleCard;
