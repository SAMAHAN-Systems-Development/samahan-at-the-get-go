import React from 'react';
import Image from 'next/image';

import whiteArrow from 'public/assets/images/whiteArrow.png';

interface RecWeekOfficeCardProps {
  officeNumber: string;
  position: string;
}

const RecWeekOfficeCard: React.FC<RecWeekOfficeCardProps> = ({
  officeNumber,
  position,
}) => {
  return (
    <div className="grid content-between w-full text-white bg-lightBlue h-[17.875rem] md:h-[26.75rem] px-[3rem] py-[3.27rem] md:px-[3.39rem] md:py-[3.63rem] lg:px-[4.68rem] lg:pt-[5rem] lg:pb-[3.25rem]">
      <div className="flex flex-row w-full justify-between">
        <p className="font-artega font-medium text-[0.875rem] sm:text-[1rem] md:text-[1.5625rem]">
          {officeNumber}
        </p>
        <div className="relative flex-shrink-0 h-[1.51613rem] w-[0.9375rem] sm:h-[3.13331rem] sm:w-[1.9375rem] lg:w-[3.3125rem] lg:h-[5.357rem]">
          <Image
            alt="AtTheGetGoLogo"
            src={whiteArrow}
            className="object-contain"
            draggable={false}
            placeholder="blur"
          />
        </div>
      </div>
      <div>
        <h1 className="font-artega uppercase font-normal text-wrap text-[1.25rem] sm:text-[1.5rem] md:text-[1.9375rem] lg:text-[3.0625rem] max-w-[15.0625rem] sm:max-w-[37rem] lg:max-w-[71.2rem]">
          Office of the {position}
        </h1>
      </div>
    </div>
  );
};

export default RecWeekOfficeCard;
