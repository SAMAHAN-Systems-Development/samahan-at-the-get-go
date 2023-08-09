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
    <div className="relative rounded-card overflow-hidden cursor-pointer w-full h-[15.5rem] min-[800px]:w-[22rem] min-[800px]:h-[25rem] 2xl:w-[25rem] 2xl:h-[28rem]">
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
          <p className="font-artega text-white text-shadow-bold text-base min-[800px]:text-xl">
            {number}
          </p>
          <TbArrowUpRight className="text-white text-2xl min-[800px]:text-3xl" />
        </div>
        <h4 className="font-artega text-left text-white text-shadow-bold group-hover:translate-x-3 ease-in-out duration-300 text-sm min-[800px]:text-base 2xl:text-xl">
          {title}
        </h4>
      </div>
    </div>
  );
};

export default InitiativesCardButton;
