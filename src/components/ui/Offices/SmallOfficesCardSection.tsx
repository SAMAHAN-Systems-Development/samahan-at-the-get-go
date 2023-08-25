import type { FC } from 'react';
import React from 'react';
import Link from 'next/link';

import SmallOfficesCard from '@/components/ui/Offices/SmallOfficesCard';
import ThinBlueDivider from '@/components/ui/ThinBlueDivider';
import { OfficesDescription } from '@/data/OfficesDescription';

type SmallOfficesCardSectionProps = {
  officesPosition: string;
};

const SmallOfficesCardSection: FC<SmallOfficesCardSectionProps> = ({
  officesPosition,
}) => {
  return (
    <>
      <div className="my-10">
        <ThinBlueDivider />
      </div>
      <h4 className="font-artega text-lightBlue pb-10 text-center text-[1rem] sm:text-[2rem] lg:text-left lg:text-[2.5rem]">
        Want to see other SAMAHAN offices?
      </h4>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {OfficesDescription.map((item, index) => {
          if (officesPosition !== item.officesPosition) {
            return (
              <Link href={item.pageLink ? item.pageLink : '/'} key={index}>
                <SmallOfficesCard
                  officesTitle={item.officesTitle}
                  imageUrl={item.imageUrl}
                  officesPosition={item.officesPosition}
                />
              </Link>
            );
          }
        })}
      </div>
    </>
  );
};

export default SmallOfficesCardSection;
