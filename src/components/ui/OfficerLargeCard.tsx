import React from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

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

type OfficerLargeCardProps = {
  isButton: boolean;
  officer: {
    firstName: string;
    imageUrl: StaticImageData;
    lastName: string;
    position: string;
  };
} & VariantProps<typeof cardVariants>;

const OfficerLargeCard: React.FC<OfficerLargeCardProps> = ({
  officer: { firstName, lastName, position, imageUrl },
  isButton,
}) => {
  return (
    <div className="h-64 relative block overflow-hidden bg-blue w-full max-w-2xl rounded-[0.938rem] shadow lg:h-72">
      <Image
        src={imageUrl}
        alt={lastName}
        className="object-cover object-top"
        fill
        placeholder="blur"
      />
      <div className={cardVariants({ isButton })}>
        <div className="text-shadow text-xl leading-6 sm:text-title-sm sm:leading-title-sm lg:text-title-md lg:leading-title-md group-hover/overlay:translate-x-3 transition-all ease-in-out duration-300">
          <p className="font-appleGaramond-bold italic">{firstName}</p>
          <p className="font-artega uppercase">{lastName}</p>
          <p className="font-sans uppercase">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default OfficerLargeCard;
