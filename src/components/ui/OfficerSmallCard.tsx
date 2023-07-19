import React from 'react';
import Image from 'next/image';

import type { officer } from 'lib/types/officerType';

import { cn } from '@/utils/cvaUtils';

type OfficerSmallCardProps = officer;

const OfficerSmallCard: React.FC<OfficerSmallCardProps> = ({
  officer,
  imageUrl,
}) => {
  const { firstName, lastName, position, department } = officer;
  return (
    <div className="flex flex-col items-center gap-y-5 p-4">
      <div className="h-[10.188rem] md:h-[11.688rem] w-[9.25rem] md:w-[10.688rem] relative rounded-card">
        <Image src={imageUrl} alt={lastName} fill placeholder="blur" />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <p className="text-[0.813rem] md:text-[1rem] text-blue font-appleGaramond font-bold italic text-shadow-soft leading-5">
            {firstName}
          </p>
          <p className="text-[1rem] md:text-[1.25rem] font-artega text-blue uppercase leading-5 font-medium">
            {lastName}
          </p>
        </div>
      </div>
      <div className="flex-col flex-shrink-0 flex max-w-[12.063rem] max-h-[1.875rem] text-blue text-[0.813rem] font-normal text-center leading-normal">
        <p className={cn(department ? 'font-bold' : '')}>{position}</p>
        {department ? <p>{department}</p> : null}
      </div>
    </div>
  );
};

export default OfficerSmallCard;
