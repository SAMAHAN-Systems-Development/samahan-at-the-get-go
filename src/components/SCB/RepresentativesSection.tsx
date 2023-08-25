import React from 'react';
import Image from 'next/image';

import WhiteArrow from 'public/assets/images/WhiteArrow3.png';

import OfficerSmallCard from '@/components/ui/OfficerSmallCard';
import { Representatives } from '@/data/Representatives';
import { cn } from '@/utils/cvaUtils';

const RepresentativesSection: React.FC = () => {
  const isLastCardCentered = Representatives.length % 2 === 1;

  return (
    <section className="bg-[#1A275F] h-full relative rounded-section-card py-20 m-5 sm:mx-6 md:mx-8 lg:mx-12 mb-10 flex flex-col gap-4">
      <div className="text-center mt-20 mb-7">
        <h2 className="text-white sm:text-xl lg:text-4xl font-artega font-medium uppercase">
          Cluster Representatives
        </h2>
      </div>
      <div className="container flex flex-wrap justify-center">
        {Representatives.map((item, index) => (
          <div
            key={index}
            className={cn(
              'flex flex-col items-center',
              isLastCardCentered && index === Representatives.length - 1
                ? 'md:w-full lg:w-full justify-center'
                : 'md:w-1/2 lg:w-1/4'
            )}
          >
            <OfficerSmallCard {...item} textColorClass="text-white" />
          </div>
        ))}
      </div>
      <div className="self-end my-14">
        <div className="relative w-36 h-36">
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
    </section>
  );
};

export default RepresentativesSection;
