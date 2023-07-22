import type { FC } from 'react';
import React from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import { cva } from 'class-variance-authority';

type CardType = {
  title: string;
  imageUrl: StaticImageData;
  size: 'fat' | 'thin';
};

const cardSize = cva(
  ['relative w-full rounded-card overflow-hidden cursor-pointer'],
  {
    variants: {
      size: {
        fat: 'h-[11.5rem] lg:h-56',
        thin: 'h-28 md:h-32',
      },
    },
  }
);

const cardContent = cva(
  [
    'absolute bottom-0 left-0  w-full h-full flex items-end group hover:bg-blue/25 ease-in-out duration-300',
  ],
  {
    variants: {
      size: {
        fat: 'text-xl lg:text-3xl px-5 md:px-10 py-4 lg:px-20 lg:py-11',
        thin: 'text-xs md:text-base lg:text-xl px-5 py-3 md:py-4 md:px-7 lg:px-14',
      },
    },
  }
);

const ModalCardButton: FC<CardType> = ({ title, imageUrl, size }) => {
  return (
    <div className={cardSize({ size })}>
      <Image
        alt={title}
        src={imageUrl}
        fill={true}
        style={{ objectFit: 'cover' }}
      />
      <div className={cardContent({ size })}>
        <h4
          className={`font-artega text-left text-white text-shadow-bold group-hover:translate-x-3 ease-in-out duration-300`}
        >
          {title}
        </h4>
      </div>
    </div>
  );
};

export default ModalCardButton;