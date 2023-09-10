import React from 'react';
import Image from 'next/image';

import type { OfficerType } from 'lib/types/officerType';

import { cn } from '@/utils/cvaUtils';

type OfficerSmallCardProps = OfficerType & {
  textColorClass: string;
};

const OfficerSmallCard: React.FC<OfficerSmallCardProps> = ({
  firstName,
  lastName,
  position,
  department,
  email,
  imageUrl,
  textColorClass,
}) => {
  return (
    <div className={`flex flex-col items-center gap-y-5 p-8 ${textColorClass}`}>
      <div className="h-[10.188rem] md:h-[11.688rem] w-[9.25rem] md:w-[10.688rem] relative rounded-card">
        <Image
          src={imageUrl}
          alt={lastName}
          placeholder="blur"
          draggable={false}
          fill
          className="rounded-card object-cover object-center"
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <p className="text-[0.813rem] md:text-[1rem] font-appleGaramond font-bold italic text-shadow-soft leading-5">
            {firstName}
          </p>
          <p className="text-[1rem] md:text-[1.25rem] font-artega   uppercase leading-5 font-medium">
            {lastName}
          </p>
        </div>
      </div>
      <div className="flex-col flex-shrink-0 flex max-w-[12.063rem] max-h-[1.875rem]   text-[0.813rem] font-normal text-center leading-normal">
        <p
          className={cn(department ? 'font-bold' : email ? 'font-normal' : '')}
        >
          {position}
        </p>
        {department ? <p>{department}</p> : null}
        {email ? <p>{email}</p> : null}
      </div>
    </div>
  );
};

export default OfficerSmallCard;
