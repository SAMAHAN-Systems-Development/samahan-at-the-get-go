import React from "react";
import Image from "next/image";

import logo from "public/assets/images/logo.png";

const AdvocasixHeaderCard = () => {
  return (
    <>
      <div className="w-full bg-orange rounded-section-card flex flex-col justify-end px-8 py-10 md:px-12 md:py-14 h-72 md:h-[32] lg:h-[41.25rem]">
        <div className="relative w-6 h-12 md:w-10 md:h-16 mb-auto self-end">
          <Image
            alt="/"
            src={logo}
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </div>
        <p className="font-appleGaramound italic text-white text-xl lg:text-title-md">
          Six Pillar Advocacies
        </p>
        <p className="font-artega text-white text-title-md lg:text-title-lg">
          We Are:
        </p>
      </div>
    </>
  );
};

export default AdvocasixHeaderCard;
