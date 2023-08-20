import type { FC } from 'react';
import React from 'react';
import Image from 'next/image';

import type { departmentType } from 'lib/types/departmentType';

type RecWeekModalButtonProps = departmentType;

const RecWeekModalButton: FC<RecWeekModalButtonProps> = ({
  fullName,
  imageSrc,
  name,
}) => {
  return (
    <div className="flex justify-between items-center border-card border-lightBlue rounded-section-card p-5 sm:p-7 md:p-9 lg:p-9 group hover:bg-lightBlue hover:cursor-pointer transition-all ease-in-out duration-300">
      <div className="text-lightBlue group-hover:text-white transition-all ease-in-out duration-300">
        <p className="font-artega uppercase text-[0.8rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.8rem]">
          {fullName}
        </p>
        <p className="font-appleGaramond-bold italic text-[0.8rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.8rem]">
          {name}
        </p>
      </div>
      <div className="relative min-w-[2.5rem] h-10 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden ml-3">
        <Image
          src={imageSrc}
          alt={`${name} logo`}
          className="object-cover"
          placeholder="blur"
          draggable={false}
          fill
        />
      </div>
    </div>
  );
};

export default RecWeekModalButton;
