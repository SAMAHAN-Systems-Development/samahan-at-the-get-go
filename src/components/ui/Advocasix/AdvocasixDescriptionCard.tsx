import React from 'react';
import Image from 'next/image';

import arrow from 'public/assets/images/orangeArrow1.png';

const AdvocasixDescriptionCard = () => {
  return (
    <>
      <div className="w-full bg-blue rounded-section-card flex flex-col justify-end px-8 py-10 md:px-12 md:py-14 lg:px-20 lg:py-24 min-h-[18rem] md:h-[32] lg:h-[41.25rem]">
        <div className="flex mb-auto pb-5">
          <p className="font-artega leading-normal text-white text-base md:text-2xl lg:text-title-sm mr-auto">
            ADVOCASIX
          </p>
          <div className="relative w-[268px] ml-3 justify-end">
            <Image
              alt="arrow"
              src={arrow}
              fill
              className="object-contain"
              placeholder="blur"
              draggable={false}
            />
          </div>
        </div>
        <p className="text-white text-base lg:text-2xl">
          The Samahan ng mga Mag-aaral ng Pamantasan ng Ateneo de Davao, guided
          by its Jesuit, Filipino, and Mindanaoan values, aspires to be an
          autonomous student government that is genuinely present in championing
          here and now its chosen six pillar advocacies.
        </p>
      </div>
    </>
  );
};

export default AdvocasixDescriptionCard;
