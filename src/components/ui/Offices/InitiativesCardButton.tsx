import type { FC } from 'react';
import React from 'react';
import { TbArrowUpRight } from 'react-icons/tb';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

type CardType = {
  imageUrl: StaticImageData;
  title: string;
};

const InitiativesCardButton: FC<CardType> = ({ title, imageUrl }) => {
  return (
    <div className="relative rounded-card overflow-hidden cursor-pointer w-full h-[15.5rem] md:w-[22rem] md:h-[25rem] xl:w-[25rem] xl:h-[28rem]">
      <Image
        alt={title}
        src={imageUrl}
        fill={true}
        style={{ objectFit: 'cover' }}
        placeholder="blur"
      />
      <div className="absolute bottom-0 left-0  w-full h-full flex flex-col justify-between group hover:bg-blue/25 ease-in-out duration-300 p-7 pb-11 xl:p-8 xl:pb-12">
        <div className="flex w-full justify-between">
          <p className="font-artega text-white text-shadow-bold text-base md:text-xl">
            01
          </p>
          <TbArrowUpRight className="text-white text-2xl md:text-3xl" />
        </div>
        <h4 className="font-artega text-left text-white text-shadow-bold group-hover:translate-x-3 ease-in-out duration-300 text-sm md:text-base xl:text-xl">
          {title}
        </h4>
      </div>
    </div>
  );
};

export default InitiativesCardButton;
