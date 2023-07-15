import React from "react";

const InitiativesTitleCard: React.FC = () => {
  return (
    <div className="h-[502px] w-auto md:h-[772px] lg:h-[562px] bg-orange m-1 p-4 md:px-8 md:py-[60px] lg:px-[60px] lg:py-8 flex flex-col justify-between rounded-section-card text-[#FFFF]">
      <div className="flex justify-between">
        <h2 className="flex font-artega text-[20px] md:text-[20px] lg:text-[30px] font-[500]">
          04
        </h2>
        <h2 className="flex font-appleGaramond italic font-[700] text-[20px] md:text-[20px] lg:text-[30px]">
          #AtTheGetGo
        </h2>
      </div>
      <div className="flex justify-between items-end">
        <h2 className="flex font-artega text-[35px] md:text-[60px] lg:text-[75px] font-[500]">
          Initiatives
        </h2>
        <h2 className="flex text-[10px] md:text-[23px] lg:text-[25px] font-[400] p-2">
          SAMAHAN
        </h2>
      </div>
    </div>
  );
};

export default InitiativesTitleCard;
