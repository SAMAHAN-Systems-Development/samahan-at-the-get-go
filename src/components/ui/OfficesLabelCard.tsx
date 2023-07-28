import React from 'react';
import Image from 'next/image';

type OfficesLabelCardProps = {
  title: string;
};

const OfficesLabelCard: React.FC<OfficesLabelCardProps> = ({ title }) => {
  return (
    <div className="flex justify-between items-center rounded-section-card bg-lightBlue px-5 lg:px-14 py-4">
      <p className="font-artega font-semibold uppercase text-white text-xs lg:leading-none sm:text-base lg:text-2xl ">
        {title}
      </p>
      <div className="relative h-10 w-16 sm:w-32 lg:w-40 ">
        <Image
          src="/assets/images/orange_arrow.png"
          alt="Orange Arrow"
          className="object-contain"
          fill
        />
      </div>
    </div>
  );
};

export default OfficesLabelCard;
