import type { FC } from 'react';
import React from 'react';
import { TbArrowUpRight } from 'react-icons/tb';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

type CardType = {
  imageUrl: StaticImageData;
  title: string;
  number?: string;
};

const InitiativesCardButton: FC<CardType> = ({ title, imageUrl, number }) => {
  return (
    // w-full h-[15.5rem] md:h-[25rem] md:w- 2xl:h-[28rem] 2xl:w-
    <div className="relative rounded-card overflow-hidden cursor-pointer my-2 md:m-3 w-full h-[15.5rem] md:h-[22rem] md:w-[19rem] 2xl:h-[25rem] 2xl:w-[22rem]">
      <Image
        alt={title}
        src={imageUrl}
        fill
        className="object-cover"
        placeholder="blur"
        draggable={false}
      />
      <div className="absolute bottom-0 left-0  w-full h-full flex flex-col justify-between group hover:bg-blue/25 ease-in-out duration-300 p-7 pb-11 2xl:p-8 2xl:pb-12">
        <div className="flex w-full justify-between">
          <p className="font-artega text-white text-shadow-bold text-base md:text-xl">
            {number}
          </p>
          <TbArrowUpRight className="text-white text-2xl md:text-3xl" />
        </div>
        <h4 className="font-artega text-left text-white text-shadow-bold group-hover:translate-x-3 ease-in-out duration-300 text-sm md:text-base 2xl:text-xl">
          {title}
        </h4>
      </div>
    </div>
  );
};

export default InitiativesCardButton;
