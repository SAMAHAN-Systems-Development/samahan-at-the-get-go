import React from "react";
import Image from "next/image";

interface OfficerLargeCardProps {
  firstName: string;
  lastName: string;
  position: string;
  imageUrl: string;
  link: string;
}

const OfficerCard: React.FC<OfficerLargeCardProps> = ({
  firstName,
  lastName,
  position,
  imageUrl,
  link,
}) => {
  return (
    <a
      href={link}
      className="h-64 relative block overflow-hidden bg-blue max-w-2xl rounded-[15px] shadow lg:h-72 hover:cursor-pointer"
    >
      <Image
        src={imageUrl}
        alt={lastName}
        className="object-cover object-top"
        fill
      />
      <div className="absolute bottom-0 left-0 flex items-end p-4 text-white w-full h-full group/overlay hover:bg-blue/25 transition-all ease-in-out duration-300">
        <div className="text-xl md:text-2xl lg:text-3xl group-hover/overlay:translate-x-3 transition-all ease-in-out duration-300">
          <p className="font-appleGaramond-bold italic">{firstName}</p>
          <p className="font-artega">{lastName}</p>
          <p className="font-sans">{position}</p>
        </div>
      </div>
    </a>
  );
};

export default OfficerCard;
