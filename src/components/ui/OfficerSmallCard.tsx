import React from "react";
import Image from "next/image";

interface OfficerSmallCard {
  firstName: string;
  lastName: string;
  position: string;
  imageUrl: string;
}

const OfficerSmallCard: React.FC<OfficerSmallCard> = ({
  firstName,
  lastName,
  position,
  imageUrl,
  //yearSection,
}) => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <Image src={imageUrl} alt={lastName} width={148} height={163} />
      <div className="flex flex-col items-center">
        <div className="space-y-0 flex flex-col items-center">
          <h2 className="text-[15px] text-[#1A275F] font-appleGaramound font-semibold italic">
            {firstName}
          </h2>
          <h2 className="text-xl font-artega text-[#1A275F]">{lastName}</h2>
        </div>
        <div className="text-center break-words">{position}</div>
      </div>
    </div>
  );
};

export default OfficerSmallCard;
