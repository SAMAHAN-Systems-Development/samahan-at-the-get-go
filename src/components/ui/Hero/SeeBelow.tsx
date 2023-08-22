import React from 'react';

const SeeBelow: React.FC = () => {
  return (
    <div className="m-2 flex items-center bg-orange px-2 md:px-10 rounded-[12.5rem] text-white w-full h-[1.25rem] md:h-[2rem]">
      <div className="flex-none text-[0.563rem] md:text-[.813rem] lg:text-[1rem] font-normal">
        SAMAHAN
      </div>
      <div className="flex-1 text-center mx-4 text-[0.5rem] md:text-[0.625rem] lg:text-[0.813rem] font-artega font-[500] leading-5">
        See Below
      </div>
      <div className="text-[0.563rem] md:text-[0.813rem] lg:text-[1rem] font-appleGaramond italic font-bold leading-5">
        #AtTheGetGo
      </div>
    </div>
  );
};

export default SeeBelow;
