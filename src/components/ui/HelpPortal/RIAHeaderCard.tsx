import React from 'react';
import Image from 'next/image';

import RIAImage from 'public/assets/images/Initiatives/internationalization.jpg';

const RIAHeaderCard = () => {
  return (
    <div className="bg-lightBlue h-80 w-full flex flex-col-reverse justify-start rounded-section-card text-white">
      <div className="relative w-full rounded-card overflow-hidden h-80">
        <Image
          alt="Something"
          src={RIAImage}
          fill
          className="object-cover"
          placeholder="blur"
          draggable={false}
        />
      </div>
      <h2 className="p-10 absolute font-artega text-[1.5625rem] md:text-[1.9375rem] lg:text-[2.4375rem] font-medium max-w[17.18456rem]">
        Relevant Information Area
      </h2>
    </div>
  );
};

export default RIAHeaderCard;
