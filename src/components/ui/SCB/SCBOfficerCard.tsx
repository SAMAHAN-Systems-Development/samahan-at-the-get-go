import React from "react";
import Image from "next/image";

interface SCBOfficerCardProps {
  firstName: string;
  lastName: string;
  position: string;
  imageUrl: string;
  link: string;
}

const SCBOfficerCard: React.FC<SCBOfficerCardProps> = ({
  firstName,
  lastName,
  position,
  imageUrl,
  link,
}) => {
  return (
    <a
      href={link}
      className="h-60 relative block overflow-hidden bg-blue max-w-sm rounded-lg shadow hover:cursor-pointer"
    >
      <Image
        src={imageUrl}
        alt={lastName}
        className="w-full h-full object-cover"
        width={626}
        height={417}
      />
      <div className="absolute bottom-0 left-0 flex items-end p-4 text-white w-full h-full hover:bg-gray-800 hover:bg-opacity-50">
        <div>
          <h2 className="font-appleGaramound italic">{firstName}</h2>
          <h1 className="font-artega">{lastName}</h1>
          <p className="font-sans">{position}</p>
        </div>
      </div>
    </a>
  );
};

export default SCBOfficerCard;
