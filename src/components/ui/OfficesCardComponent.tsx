import React from "react";

interface OfficesCardComponentProps {
  officesTitle: string;
  officesDescription: string;
}

const OfficesCardComponent: React.FC<OfficesCardComponentProps> = ({
  officesTitle,
  officesDescription,
}) => {
  return (
    <div className="grid h-[18.6875rem] content-between mx-4 p-8 text-white bg-orange rounded-3xl md:h-[29.375rem] lg:h-[26.75rem] ">
      <div className="flex flex-row text-sm w-full justify-between">
        <p className="font-artega font-medium lg:text-[1.5625rem] "> 01 </p>
        <p className="font-appleGaramound italic font-bold lg:text-[1.9375rem]">
          #AtTheGetGo
        </p>
      </div>
      <div className="flex flex-col justify-self-center md:w-[24.5rem] lg:w-[56.0625rem]">
        <h1 className="text-center font-artega text-[1.9375rem] font-medium justify-self-center mb-[24px] md:text-[3.8125rem] lg:text-[4.75rem]">
          {officesTitle}
        </h1>
        <p className="font-sans flex-wrap text-justify flex text-sm md:text-[1.1875rem] lg:text-[1.5625rem] lg:text-center">
          {officesDescription}
        </p>
      </div>
      <div className="flex flex-row w-full justify-between">
        <div className="w-[0.9375rem] h-[0.9375rem] rounded-full bg-blue md:w-[1.4375rem] md:h-[1.4375rem] lg:w-[1.4375rem] lg:h-[1.4375rem]">
          {" "}
        </div>
        <p className="text-xs font-normal md:text-[1.4375rem] lg:text-[1.5625rem]">
          {" "}
          SAMAHAN{" "}
        </p>
      </div>
    </div>
  );
};

export default OfficesCardComponent;
