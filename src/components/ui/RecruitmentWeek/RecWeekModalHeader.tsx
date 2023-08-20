import type { FC } from 'react';
import React from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

type RecWeekModalHeaderProps = {
  imageSrc: StaticImageData;
  name: string;
};

const RecWeekModalHeader: FC<RecWeekModalHeaderProps> = ({
  imageSrc,
  name,
}) => {
  return (
    <div className="relative h-96 sm:h-[30rem] lg:h-[45rem]">
      <Image
        src={imageSrc}
        alt={`${name} Header Picture`}
        className="object-cover object-top"
        placeholder="blur"
        draggable={false}
        fill
      />
      <div className="absolute w-full flex justify-between text-white px-8 py-10 sm:px-14 sm:py-16 lg:px-24 lg:py-36 text-xs sm:text-xl lg:text-2xl">
        <p className="uppercase">Samahan Recruitment Week</p>
        <p className="font-artega">{name}</p>
      </div>
    </div>
  );
};

export default RecWeekModalHeader;
