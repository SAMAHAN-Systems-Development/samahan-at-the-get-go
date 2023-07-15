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
      <div className="h-[163px] md:h-[187px] w-[148px] md:w-[171px] relative rounded-card">
        <Image src={imageUrl} alt={lastName} fill />
      </div>
      <div className="flex flex-col items-center">
        <div className=" flex flex-col items-center">
          <h2 className="text-[13px] md:text-[16px] text-[#1A275F] font-appleGaramond font-bold italic text-shadow-soft leading-5">
            {firstName}
          </h2>
          <h2 className="text-[16px] md:text-[20px] font-artega text-[#1A275F] uppercase leading-5 font-medium">
            {lastName}
          </h2>
        </div>
      </div>
      <div className="flex-col flex-shrink-0 flex max-w-[193px] max-h-[30px] text-[#263167] text-[13px] font-normal text-center leading-normal">
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
