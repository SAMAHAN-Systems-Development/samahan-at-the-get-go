import React from "react";

const InitiativesTitleCard: React.FC = () => {
  return (
    <div className="h-[31.375rem] w-auto md:h-[48.25rem] lg:h-[35.125rem] bg-orange m-1 p-4 md:px-8 md:py-[3.75rem] lg:px-[3.75rem] lg:py-8 flex flex-col justify-between rounded-section-card text-white">
      <div className="flex justify-between">
        <h2 className="flex font-artega text-[1.25rem] md:text-[1.25rem] lg:text-[1.875rem] font-medium">
          04
        </h2>
        <h2 className="flex font-appleGaramond italic font-bold text-[1.25rem] md:text-[1.25rem] lg:text-[1.875rem]">
          #AtTheGetGo
        </h2>
      </div>
      <div className="flex justify-between items-end">
        <h2 className="flex font-artega text-[2.188rem] md:text-[3.75rem] lg:text-[4.688rem] font-medium">
          Initiatives
        </h2>
        <h2 className="flex text-[0.625rem] md:text-[1.438rem] lg:text-[1.563rem] font-normal p-2">
          SAMAHAN
        </h2>
      </div>
    </div>
  );
};

export default InitiativesTitleCard;
