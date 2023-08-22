import React from 'react';
import { TbArrowUpRight } from 'react-icons/tb';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

type SmallOfficesCard = {
  imageUrl: StaticImageData;
  officesPosition: string;
  officesTitle: string;
};

const SmallOfficesCard: React.FC<SmallOfficesCard> = ({
  officesTitle,
  imageUrl,
  officesPosition,
}) => {
  return (
    <div className="overflow-hidden relative h-[30rem] w-full grid content-between text-white -z-10 px-[2.53rem] py-[2.31rem] border-solid border-card rounded-section-card">
      <Image
        src={imageUrl}
        alt={`Office Of The ${officesTitle}`}
        className="object-cover rounded"
        placeholder="blur"
        draggable={false}
        fill
      />
      <div className="absolute inset-x-0 bottom-0 h-[10rem] bg-gradient-to-b from-lightBlue/0 to-lightBlue" />

      <div className="flex flex-row w-full justify-between z-10">
        <p className="font-artega font-medium text-[1.25rem]">{officesTitle}</p>
        <TbArrowUpRight className="align-baseline w-[2rem] h-[2rem]" />
      </div>
      <div className="flex flex-row z-10 w-[10.125rem]">
        <h1 className="font-appleGaramond italic font-medium text-[1.5625rem]">
          Office of the {officesPosition}
          <span className="inline-flex items-center justify-center ml-1 align-middle">
            <TbArrowUpRight className="align-baseline w-[2rem] h-[2rem]" />
          </span>
        </h1>
      </div>
    </div>
  );
};

export default SmallOfficesCard;
