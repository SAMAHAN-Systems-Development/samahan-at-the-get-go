import React from "react";

const AtTheGetGoDefinition: React.FC = () => {
  return (
    <div className="m-2 md:ml-10 flex flex-col items-start text-[#1A275F] gap-y-2">
      <div className="flex flex-col space-y-0">
        <h2 className="md:text-xl text-[10px] font-artega leading-4">
          At&nbsp;
          <span className="md:text-sm font-sans text-[8px] italic">
            (prep.)
          </span>
        </h2>
        <p className="md:text-xl font-appleGaramond italic text-[9px] font-[700] leading-4">
          Expressing time, location, or a particular point
        </p>
      </div>
      <div className="md:flex md:space-x-4 gap-y-2">
        <div className="flex flex-col ">
          <h2 className="md:text-xl text-[10px] font-artega leading-4">
            The&nbsp;
            <span className="md:text-sm font-sans text-[8px] italic">
              (det.)
            </span>
          </h2>
          <p className="md:text-xl font-appleGaramond italic text-[9px] font-[700] leading-4">
            Used to move forward
          </p>
        </div>
        <div className="flex flex-col md:px-10 gap-y-2">
          <h2 className="md:text-xl text-[10px] font-artega leading-4">
            Get-go&nbsp;
            <span className="md:text-sm font-sans text-[8px] italic">(n.)</span>
          </h2>
          <p className="md:text-xl font-appleGaramond italic text-[9px] font-[700] leading-4">
            the very beginning; the very start
          </p>
        </div>
      </div>
    </div>
  );
};

export default AtTheGetGoDefinition;
