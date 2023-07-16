import React from "react";
import Image from "next/image";

interface Officer {
  firstName: string;
  lastName: string;
  position: string;
}
interface OfficerSmallCard {
  officer: Officer;
  department?: string;
  imageUrl: string;
}

const OfficerSmallCard: React.FC<OfficerSmallCard> = ({
  officer,
  department,
  imageUrl,
}) => {
  const { firstName, lastName, position } = officer;
  return (
    <div className="flex flex-col items-center gap-y-5 p-4">
      <div className="h-[10.188rem] md:h-[11.688rem] w-[9.25rem] md:w-[10.688rem] relative rounded-card">
        <Image src={imageUrl} alt={lastName} fill quality={100} />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <p className="text-[0.813rem] md:text-[1rem] text-blue font-appleGaramond font-bold italic text-shadow-soft leading-5">
            {firstName}
          </p>
          <p className="text-[1rem] md:text-[1.25rem] font-artega text-blue uppercase leading-5 font-medium">
            {lastName}
          </p>
        </div>
      </div>
      <div className="flex-col flex-shrink-0 flex max-w-[12.063rem] max-h-[1.875rem] text-blue text-[0.813rem] font-normal text-center leading-normal">
        {department ? (
          <>
            <p className="font-bold">{position}</p>
            <p>{department}</p>
          </>
        ) : (
          <p>{position}</p>
        )}
      </div>
    </div>
  );
};

export default OfficerSmallCard;
