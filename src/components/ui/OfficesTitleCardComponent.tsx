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
    <div className="grid h-[262px] p-4 w-full content-between text-lightBlue bg-transparent rounded-card border-card border-lightBlue sm:h-[400px] md:h-[622px] md:p-8 lg:h-[681px] lg:p-16">
      <div className="flex flex-row w-full justify-between">
        <p className="font-artega font-medium text-sm sm:text-l md:text-xl lg:text-2xl">
          00
        </p>
        <div className="relative h-[52px] w-[32px] sm:h-[62px] sm:w-[41px] md:w-[53px] md:h-[86px] lg:w-[53px] lg:h-[86px]">
          <Image
            alt="AtTheGetGoLogo"
            src={SamahanAtTheGetGoLogo}
            className="object-contain"
            fill={true}
          />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <p className="font-appleGaramond italic font-bold text-[1.5625rem] sm:text-[2.1rem] md:text-[3.0625rem] lg:text-[4.75rem]">
          Office of the
        </p>
        <h1 className="font-artega font-medium text-[1.75rem] sm:text-[2.5rem] md:text-[3.8125rem] lg:text-[7.4375rem]">
          {officesPosition}
        </h1>
      </div>
    </div>
  );
};

export default OfficesTitleCardComponent;
