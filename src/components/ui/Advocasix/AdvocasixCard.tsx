import type { FC } from 'react';
import React from 'react';
import Image from 'next/image';

import { cva } from 'class-variance-authority';

type CardType = {
  title: string;
  imageUrl: string;
  size: 'fat' | 'thin';
};

const cardSize = cva(['relative w-full rounded-card overflow-hidden'], {
  variants: {
    size: {
      fat: 'h-44 md:h-48 lg:h-56',
      thin: 'h-28 md:h-32',
    },
  },
});

const cardContent = cva(
  [
    'absolute bottom-0 left-0  w-full h-full flex items-end group hover:bg-blue/25 ease-in-out duration-300',
  ],
  {
    variants: {
      size: {
        fat: 'text-xl md:text-3xl px-10 py-8 md:px-18 md:py-11',
        thin: 'text-lg md:text-xl px-10 py-2 md:px-14',
      },
    },
  }
);

const AdvocasixCard: FC<CardType> = ({ title, imageUrl, size }) => {
  return (
    <div className={cardSize({ size })}>
      <Image
        alt={title}
        src={imageUrl}
        fill={true}
        style={{ objectFit: 'cover' }}
      />
      <div className={cardContent({ size })}>
        <p
          className={`font-artega text-white text-shadow-bold group-hover:translate-x-3 ease-in-out duration-300`}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export default AdvocasixCard;
