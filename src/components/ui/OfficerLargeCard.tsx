import React from 'react';
import Image from 'next/image';

import { cva } from 'class-variance-authority';

type OfficerLargeCardProps = {
  officer: {
    firstName: string;
    lastName: string;
    position: string;
  };
  imageUrl: string;
  isButton: true | false;
};

const cardVariants = cva(
  [
    'absolute bottom-0 left-0 flex items-end text-white w-full h-full p-4 lg:p-6',
  ],
  {
    variants: {
      isButton: {
        true: 'group/overlay hover:bg-blue/25 transition-all ease-in-out duration-300 cursor-pointer',
        false: '',
      },
    },
  }
);

const OfficerLargeCard: React.FC<OfficerLargeCardProps> = ({
  officer: { firstName, lastName, position },
  imageUrl,
  isButton,
}) => {
  return (
    <div className="h-64 relative block overflow-hidden bg-blue max-w-2xl rounded-[0.938rem] shadow lg:h-72">
      <Image
        src={imageUrl}
        alt={lastName}
        className="object-cover object-top"
        fill
      />
      <div className={cardVariants({ isButton })}>
        <div className="text-shadow text-xl leading-6 sm:text-[1.5rem] sm:leading-7 md:text-title-sm md:leading-title-sm lg:text-title-md lg:leading-title-md group-hover/overlay:translate-x-3 transition-all ease-in-out duration-300">
          <p className="font-appleGaramond-bold italic">{firstName}</p>
          <p className="font-artega font- uppercase">{lastName}</p>
          <p className="font-sans uppercase">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default OfficerLargeCard;
