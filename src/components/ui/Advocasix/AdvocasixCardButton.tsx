import type { FC } from 'react';
import React from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

type CardType = {
  imageUrl: StaticImageData;
  title: string;
};

const AdvocasixCardButton: FC<CardType> = ({ title, imageUrl }) => {
  return (
    <div className="relative w-full rounded-card overflow-hidden cursor-pointer h-[11.5rem] lg:h-56">
      <Image
        alt={title}
        src={imageUrl}
        fill={true}
        style={{ objectFit: 'cover' }}
        placeholder="blur"
        draggable={false}
      />
      <div className="absolute bottom-0 left-0  w-full h-full flex items-end group hover:bg-blue/25 ease-in-out duration-300 text-xl lg:text-3xl px-5 md:px-10 py-4 lg:px-20 lg:py-11">
        <h4 className="font-artega text-left text-white text-shadow-bold group-hover:translate-x-3 ease-in-out duration-300">
          {title}
        </h4>
      </div>
    </div>
  );
};

export default AdvocasixCardButton;
