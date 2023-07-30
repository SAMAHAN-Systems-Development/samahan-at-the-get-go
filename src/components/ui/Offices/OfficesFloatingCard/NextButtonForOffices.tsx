import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import OrangeArrowRightLargeImage from '/public/assets/images/orange_arrow_right_large.png';

type NextButtonForOfficesProps = {
  office: string;
};

const NextButtonForOffices: React.FC<NextButtonForOfficesProps> = ({
  office,
}) => {
  return (
    <Link
      href={office}
      className="text-lightBlue block items-center w-fit lg:flex lg:items-center"
    >
      <div className="block lg:space-x-2 lg:flex lg:items-end">
        <p className="font-appleGaramond-bold italic text-sm leading-none md:text-[1.25rem]">
          Next:
        </p>
        <p className="font-artega font-bold uppercase text-lg leading-none md:text-[1.563rem]">
          {office}
        </p>
      </div>
      <div className="relative w-10 h-3 ml-5 md:ml-7 md:w-16 lg:w-20 lg:ml-0">
        <Image
          src={OrangeArrowRightLargeImage}
          alt="orange_arrow_right"
          className="object-contain"
          placeholder="blur"
          fill
        />
      </div>
    </Link>
  );
};

export default NextButtonForOffices;
