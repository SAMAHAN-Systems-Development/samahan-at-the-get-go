import React from "react";

const SeeBelow: React.FC = () => {
  return (
    <div className="m-2 flex items-center bg-[#ED751F] px-2 md:px-10 rounded-[200px] text-[#ffff] w-auto h-[19px]">
      <div className="flex-none text-[9px] md:text-[13px]">SAMAHAN</div>
      <div className="flex-1 text-center mx-4 text-[8px] md:text-[10px] font-artega font-[500] leading-5">
        See Below
      </div>
      <div className="text-[9px] md:text-[13px] font-appleGaramond italic font-[700] leading-5">
        #AtTheGetGo
      </div>
    </div>
  );
};

export default SeeBelow;
