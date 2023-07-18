import React from 'react';
import Image from 'next/image';

import logo from 'public/assets/images/logo.png';

const AdvocasixHeaderCard = () => {
  return (
    <>
      <div className="w-full bg-orange rounded-section-card flex flex-col justify-end px-8 py-10 md:px-12 md:py-14 lg:px-20 lg:py-20 h-72 md:h-[32] lg:h-[41.25rem]">
        <div className="relative w-6 h-12 md:w-10 md:h-16 mb-auto self-end">
          <Image
            alt="/"
            src={logo}
            fill={true}
            style={{ objectFit: 'contain' }}
          />
        </div>
        <h2 className="font-appleGaramound italic text-white text-xl md:text-3xl lg:text-title-md">
          Six Pillar Advocacies
        </h2>
        <h1 className="font-artega text-white text-title-md md:text-6xl lg:text-title-lg leading-title-sm lg:leading-title-lg">
          We Are:
        </h1>
      </div>
    </>
  );
};

export default AdvocasixHeaderCard;
