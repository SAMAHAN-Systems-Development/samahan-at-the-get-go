import React from "react";
import Image from "next/image";

type OfficerLargeCardProps = {
  firstName: string;
  lastName: string;
  position: string;
  imageUrl: string;
  isButton: boolean;
};

const OfficerCard: React.FC<OfficerLargeCardProps> = ({
  firstName,
  lastName,
  position,
  imageUrl,
  isButton,
}) => {
  return (
    <div className="h-64 relative block overflow-hidden bg-blue max-w-2xl rounded-[15px] shadow lg:h-72">
      <Image
        src={imageUrl}
        alt={lastName}
        className="object-cover object-top"
        fill
      />
      <div
        className={[
          [
            isButton &&
              "group/overlay hover:bg-blue/25 transition-all ease-in-out duration-300",
          ],
          [
            "absolute bottom-0 left-0 flex items-end text-white w-full h-full p-4 lg:p-6",
          ],
        ].join(" ")}
      >
        <div className="text-shadow text-xl leading-6 sm:text-[1.5rem] sm:leading-7 md:text-title-sm md:leading-title-sm lg:text-title-md lg:leading-title-md group-hover/overlay:translate-x-3 transition-all ease-in-out duration-300">
          <p className="font-appleGaramond-bold italic">{firstName}</p>
          <p className="font-artega uppercase">{lastName}</p>
          <p className="font-sans uppercase">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default OfficerCard;
