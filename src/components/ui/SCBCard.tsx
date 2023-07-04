import React from "react";
import Image from "next/image";

interface SCBCardProps {
  firstName: string;
  lastName: string;
  position: string;
  imageUrl: string;
  link: string;
}

const SCBCard: React.FC<SCBCardProps> = ({
  firstName,
  lastName,
  position,
  imageUrl,
  link,
}) => {
  return (
    <a
      href={link}
      className="relative overflow-hidden block max-w-sm rounded-lg shadow hover:cursor-pointer"
    >
      <Image
        src={imageUrl}
        alt="Background"
        className="w-full h-full object-cover"
        width={626}
        height={417}
      />
      <div className="absolute bottom-0 left-0 flex items-end p-4 text-white w-full h-full hover:bg-gray-800 hover:bg-opacity-50">
        <div>
          <h4 className="font-bold">{firstName}</h4>
          <h3 className="font-bold">{lastName}</h3>
          <p>{position}</p>
        </div>
      </div>
    </a>
  );
};

export default SCBCard;
