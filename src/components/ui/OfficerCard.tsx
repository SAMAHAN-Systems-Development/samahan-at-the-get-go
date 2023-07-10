import React from "react";
import Image from "next/image";

interface OfficerCardProps {
  firstName: string;
  lastName: string;
  position: string;
  imageUrl: string;
  link: string;
}

const OfficerCard: React.FC<OfficerCardProps> = ({
  firstName,
  lastName,
  position,
  imageUrl,
  link,
}) => {
  return (
    <a
      href={link}
      className="w-full h-60 relative block overflow-hidden bg-blue max-w-sm rounded-lg shadow hover:cursor-pointer"
    >
      <Image
        src={imageUrl}
        alt={lastName}
        className="w-full h-full object-cover"
        width={607}
        height={280}
      />
      <div className="absolute bottom-0 left-0 flex items-end p-4 text-white w-full h-full hover:bg-blue-opacity-25">
        <div>
          <h2 className="font-appleGaramound italic">{firstName}</h2>
          <h1 className="font-artega">{lastName}</h1>
          <p className="font-sans">{position}</p>
        </div>
      </div>
    </a>
  );
};

export default OfficerCard;
