import React from "react";

const SeeBelow: React.FC = () => {
  return (
    <div className="m-2 flex items-center bg-orange px-2 md:px-10 rounded-[200px] text-[#ffff] w-auto h-[19px] md:h-[32px]">
      <div className="flex-none text-[9px] md:text-[13px] lg:text-[16px] font-normal">
        SAMAHAN
      </div>
      <div className="flex-1 text-center mx-4 text-[8px] md:text-[10px] lg:text-[13px] font-artega font-[500] leading-5">
        See Below
      </div>
      <div className="text-[9px] md:text-[13px] lg:text-[16px] font-appleGaramond italic font-bold leading-5">
        #AtTheGetGo
      </div>
    </div>
  );
};

export default SeeBelow;
