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
    <div className="grid content-between mx-4 p-4 h-[262px] overflow-hidden text-lightBlue bg-transparent rounded-card border-card border-lightBlue sm:h-[400px] md:h-[622px] md:p-11 lg:h-[613px] lg:p-16">
      <div className="flex flex-row w-full justify-between">
        <p className="font-artega font-medium text-sm sm:text-l md:text-xl lg:text-2xl">
          00
        </p>
        <div className="relative mr-4 ">
          <Image
            alt="AtTheGetGoLogo"
            src={SamahanAtTheGetGoLogo}
            className="object-contain h-[52px] w-[32px] sm:h-[62px] sm:w-[41px] md:w-[53px] md:h-[86px] lg:w-[53px] lg:h-[86px]"
          />
        </div>
      </div>
      <div className="">
        <p className="font-appleGaramond  italic font-bold text-[1.5625rem] -mb-2 sm:text-[2.1rem] sm:-mb-4 md:text-[3.0625rem] md:-mb-6 lg:text-[4.75rem] lg:-mb-8 ">
          Office of the
        </p>
        <h1 className="font-artega text-wrap font-medium text-[1.9375rem] w-[240px] sm:text-[2.5rem] md:text-[3.8125rem] md:w-[530px] lg:w-[860px] lg:text-[7.4375rem]">
          {officesPosition}
        </h1>
      </div>
    </div>
  );
};

export default OfficesTitleCardComponent;
