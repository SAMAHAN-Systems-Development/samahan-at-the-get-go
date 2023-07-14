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
    <div className="grid h-[300px] content-between w-full p-8 text-white bg-orange border-solid border-card rounded-card sm:h-[320px] md:h-[470px] lg:h-[428px] ">
      <div className="flex flex-row text-sm w-full justify-between">
        <p className="font-artega font-medium text-[0.875rem] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.5625rem]">
          {" "}
          01{" "}
        </p>
        <p className="font-appleGaramound italic font-bold text-[0.875rem] sm:text-[1.25rem] md:text-[1.46875rem] lg:text-[1.9375rem]">
          #AtTheGetGo
        </p>
      </div>
      <div className="flex flex-col justify-self-center sm:w-[320px] md:w-[392px] lg:w-[897px]">
        <h1 className="text-center font-artega  text-[1.9375rem] font-medium justify-self-center sm:text-[2.615rem] md:text-[3.8125rem] lg:text-[4.75rem]">
          {officesTitle}
        </h1>
        <p className="font-sans flex-wrap text-justify flex text-[0.875rem] sm:[1rem] md:text-[1.1875rem] lg:text-[1.5625rem] lg:text-center">
          {officesDescription}
        </p>
      </div>
      <div className="flex flex-row w-full justify-between">
        <div className="rounded-full bg-blue w-[15px] h-[15px] sm:w-[17.5px] sm:h-[17.5px] md:w-[23px] md:h-[23px] lg:w-[23px] lg:h-[23px]">
          {" "}
        </div>
        <p className="text-xs font-normal sm:text-[1rem] md:text-[1.4375rem] lg:text-[1.5625rem]">
          SAMAHAN
        </p>
      </div>
    </div>
  );
};

export default OfficesCardComponent;
