import React from "react";
import Image from "next/image";

interface OfficerSmallCard {
  firstName: string;
  lastName: string;
  position: string;
  department?: string;
  imageUrl: string;
}

const OfficerSmallCard: React.FC<OfficerSmallCard> = ({
  firstName,
  lastName,
  position,
  department,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col items-center gap-y-5">
      <Image src={imageUrl} alt={lastName} width={148} height={163} />
      <div className="flex flex-col items-center">
        <div className="space-y-0 flex flex-col items-center">
          <h2 className="text-[15px] text-[#1A275F] font-appleGaramound font-semibold italic">
            {firstName}
          </h2>
          <h2 className="text-xl font-artega text-[#1A275F] uppercase">
            {lastName}
          </h2>
        </div>
      </div>
      <div className="flex-col flex-shrink-0 flex max-w-[193px] max-h-[30px] text-[#263167] text-[13px] font-normal text-center">
        {department ? (
          <>
            <span className="font-bold">{position}</span>
            <span>{department}</span>
          </>
        ) : (
          <span>{position}</span>
        )}
      </div>
    </div>
  );
};

export default OfficerSmallCard;
