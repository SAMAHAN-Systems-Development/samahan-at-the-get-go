import React from "react";

const InitiativesTitleCard: React.FC = () => {
  return (
    <div className="h-[502px] w-auto md:h-[772px] lg:h-[562px] bg-[#ED751F] m-1 p-4 flex flex-col justify-between rounded-[20px] text-[#FFFF]">
      <div className="flex justify-between">
        <span className="flex font-artega text-[20px] md:text-[20px] lg:text-[30px] font-[500]">
          04
        </span>
        <span className="flex font-appleGaramond italic font-[700] text-[20px] md:text-[20px] lg:text-[30px]">
          #AtTheGetGo
        </span>
      </div>
      <div className="flex justify-between items-end">
        <span className="flex font-artega text-[35px] md:text-[60px] lg:text-[75px] font-[500]">
          Initiatives
        </span>
        <span className="flex text-[10px] md:text-[23px] lg:text-[25px] font-[400] p-2">
          SAMAHAN
        </span>
      </div>
    </div>
  );
};

export default InitiativesTitleCard;
