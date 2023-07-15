import React from "react";
import Image from "next/image";

import SamahanAtTheGetGoLogo from "public/assets/images/SamahanAtTheGetGoLogo.png";

interface OfficesTitleCardComponentProps {
  officesPosition: string;
}

const OfficesTitleCardComponent: React.FC<OfficesTitleCardComponentProps> = ({
  officesPosition,
}) => {
  return (
    <div className="w-full overflow-hidden grid content-between border-solid border-card border-lightBlue rounded-section-card text-lightBlue py-4 px-7 h-[16.375rem] sm:h-[22.45rem] sm:py-5 sm:px-12 md:h-[34.375rem] md:py-6 md:px-16 lg:h-[42.5625rem] lg:px-22 lg:py-7">
      <div className="flex flex-row w-full justify-between">
        <p className="font-artega font-medium text-sm sm:text-l md:text-xl lg:text-2xl">
          00
        </p>
        <div className="relative ml-auto h-[3.23444rem] w-[2rem] sm:h-[3.23444rem] sm:w-[2rem] md:w-[3.3125rem] md:h-[5.357rem] lg:w-[3.3125rem] lg:h-[5.357rem]">
          <Image
            alt="AtTheGetGoLogo"
            src={SamahanAtTheGetGoLogo}
            className="object-contain"
          />
        </div>
      </div>
      <h1>
        <span className="font-appleGaramond block italic font-bold text-[1.5625rem] sm:text-[2.1rem] md:text-[3.0625rem] lg:text-[4.75rem] leading-[1.2rem] sm:leading-[2rem] md:leading-[2.7rem] lg:leading-[4rem]">
          Office of the
        </span>
        <span className="font-artega block text-wrap font-medium text-[1.5rem] w-[20.3125rem] sm:text-[2.5rem] md:text-[3.8125rem] md:w-[46rem] lg:w-[60rem] lg:text-[7rem] leading-[2rem] sm:leading-[3rem] md:leading-[4.5rem] lg:leading-[8rem]">
          {officesPosition}
        </span>
      </h1>
    </div>
  );
};

export default OfficesTitleCardComponent;
