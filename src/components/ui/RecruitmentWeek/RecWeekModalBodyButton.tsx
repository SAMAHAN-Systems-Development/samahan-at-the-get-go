import type { FC } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import OrangeArrowDiagonalImage from '/public/assets/images/orange_arrow_diagonal.png';

type RecWeekModalBodyButtonProps = {
  link: string;
  title: string;
};

const RecWeekModalBodyButton: FC<RecWeekModalBodyButtonProps> = ({
  link,
  title,
}) => {
  return (
    <Link href={link}>
      <div className="flex justify-between w-fit space-x-2 border border-lightBlue rounded-card px-6 py-4">
        <p className="font-artega text-lightBlue text-sm sm:text-base md:text-lg lg:text-2xl">
          {title}
        </p>
        <div className="relative w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4">
          <Image
            src={OrangeArrowDiagonalImage}
            alt="Orange Arrow Diagonal Image"
            className="object-contain"
            placeholder="blur"
            draggable={false}
            fill
          />
        </div>
      </div>
    </Link>
  );
};

export default RecWeekModalBodyButton;
