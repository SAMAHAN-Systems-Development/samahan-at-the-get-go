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
    <div className="grid h-64 content-between mx-4 p-4 text-white bg-transparent rounded-3xl border-2 border-blue md:h-[38.3125rem] md:p-8 lg:h-[651px] lg:p-16">
      <div className="flex flex-row w-full justify-between">
        <p className="font-artega font-medium text-blue text-sm md:text-xl lg:text-2xl">
          00
        </p>
        <div className="text-blue relative h-14 w-8 md:w-[3.3125rem] md:h-[5.357rem] lg:w-[3.3125rem] lg:h-[5.357rem]">
          <Image
            alt="AtTheGetGoLogo"
            src={SamahanAtTheGetGoLogo}
            className="object-contain"
            fill={true}
          />
        </div>
      </div>
      <div className="flex flex-col text-blue w-full">
        <h2 className="font-appleGaramond italic text-2xl font-bold md:text-[3.0625rem] md:mb-5 lg:text-[4.75rem] lg:mb-20">
          Office of the
        </h2>
        <h1 className="font-artega text-3xl font-medium md:text-[3.8125rem] lg:text-[7.4375rem]">
          {officesPosition}
        </h1>
      </div>
    </div>
  );
};

export default OfficesTitleCardComponent;
