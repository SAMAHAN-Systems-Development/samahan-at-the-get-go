import React from "react";

type OfficesCardComponentProps = {
  Title: string;
  Description: string;
};

const OfficesCardComponent: React.FC<OfficesCardComponentProps> = ({
  Title,
  Description,
}) => {
  return (
    <div className="grid h-[18.6875rem] overflow-auto content-between w-full p-8 text-white bg-orange border-solid border-card rounded-card sm:h-[22rem] md:h-[29.375rem] lg:h-[26.75rem] ">
      <div className="flex flex-row text-sm w-full justify-between">
        <p className="font-artega font-medium text-[0.875rem] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.5625rem]">
          01
        </p>
        <p className="font-appleGaramound italic font-bold text-[0.875rem] sm:text-[1.25rem] md:text-[1.46875rem] lg:text-[1.9375rem]">
          #AtTheGetGo
        </p>
      </div>
      <div className="flex flex-col my-2 justify-self-center w-[13.5rem] sm:w-[32.5rem] md:w-[42rem] lg:w-[56rem]">
        <h2 className="text-center font-artega mt-2 text-[1.9375rem] font-medium justify-self-center sm:text-[2.615rem] md:text-[3.8125rem] lg:text-[4.75rem]">
          {Title}
        </h2>
        <h3 className="font-sans  flex-wrap text-justify flex text-[0.875rem] sm:[1rem] md:text-[1.1875rem] lg:text-[1.5625rem] sm:text-center lg:text-center">
          {Description}
        </h3>
      </div>
      <div className="flex flex-row w-full justify-between">
        <div className="rounded-full bg-blue w-[0.9375rem] h-[0.9375rem] sm:w-[0.9375rem] sm:h-[0.9375rem] md:w-[1.4375rem] md:h-[1.4375rem] lg:w-[1.4375rem] lg:h-[1.4375rem]">
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
