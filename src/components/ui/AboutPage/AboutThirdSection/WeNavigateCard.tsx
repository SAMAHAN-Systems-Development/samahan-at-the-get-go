import React from 'react';
import Image from 'next/image';

import imgSrc from 'public/assets/images/WhiteArrow2.png';

const WeNavigateCard = () => {
  return (
    <div className="w-full h-full bg-lightBlue rounded-section-card grid gap-5 p-10 sm:p-20 lg:p-28">
      <div className="relative w-24 h-24 sm:w-36 sm:h-36">
        <Image
          src={imgSrc}
          placeholder="blur"
          alt="White Arrow"
          className="object-contain"
          draggable={false}
          fill
        />
      </div>

      <div className="flex flex-col justify-center">
        <div className="flex flex-col">
          <h2 className="flex flex-col text-white lg:text-6xl md:text-4xl text-3xl font-semibold font-artega">
            <span className="text-white font-artega">We</span>
            Navigate
          </h2>
        </div>

        <div className="flex mt-14">
          <p className="text-white text-justify font-medium lg:text-xl md:text-base text-sm xl:leading-9">
            A community that continues to defy with stories of hope and
            resilience. Punctuated by the pandemic times, our university life
            was confined to just being there instead of being more. However,
            despite what was thought to be insurmountable, we challenged the
            call of time and chose to be a community destined to go further.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeNavigateCard;
