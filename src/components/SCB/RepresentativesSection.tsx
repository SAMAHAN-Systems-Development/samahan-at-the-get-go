import React from 'react';
import Image from 'next/image';

import WhiteArrow from 'public/assets/images/WhiteArrow3.png';

import OfficerSmallCard from '@/components/ui/OfficerSmallCard';
import { Representatives } from '@/data/Representatives';
import { cn } from '@/utils/cvaUtils';

const RepresentativesSection: React.FC = () => {
  const isLastCardCentered = Representatives.length % 2 === 1;

  return (
    <section className="bg-[#1A275F] h-full relative rounded-section-card py-20 m-2 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div className="col-span-full text-center mt-20 mb-7">
        <h2 className="text-white sm:text-xl lg:text-4xl font-artega font-medium uppercase">
          Cluster Representatives
        </h2>
      </div>
      {Representatives.map((item, index) => (
        <div
          key={index}
          className={cn(
            'flex flex-col items-center',
            isLastCardCentered && index === Representatives.length - 1
              ? 'md:col-span-2 md:justify-center lg:col-span-4 lg:justify-self-center'
              : ''
          )}
        >
          <OfficerSmallCard {...item} textColorClass="text-white" />
        </div>
      ))}
      <div className="sm:my-32 my-14">
        <div className="absolute right-0 bottom-0 mt-10">
          <div className="relative sm:w-96 sm:h-96 w-36 h-36">
            <Image
              src={WhiteArrow}
              placeholder="blur"
              alt="White Arrow"
              className="object-contain"
              draggable={false}
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepresentativesSection;
