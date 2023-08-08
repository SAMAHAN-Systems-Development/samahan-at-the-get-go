import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import SamahanAtTheGetGoLogo from '/public/assets/images/SamahanAtTheGetGoLogo.png';
import NextButtonForOffices from '@/components/ui/Offices/NextButtonForOffices';

type OfficesFloatingCardProps = {
  office: string;
};

const OfficesFloatingCard: React.FC<OfficesFloatingCardProps> = ({
  office,
}) => {
  return (
    <div className="fixed bottom-0 w-full flex justify-between items-center bg-white border border-lightBlue py-5 px-12">
      <div className="relative w-8 h-8 lg:w-12 lg:h-12">
        <Image
          src={SamahanAtTheGetGoLogo}
          alt="SamahanAtTheGetGoLogo"
          className="object-contain"
          placeholder="blur"
          draggable={false}
          fill
        />
      </div>
      <Link href={`${office}`} className="relative w-fit my-auto">
        <NextButtonForOffices office="OSP" />
      </Link>
    </div>
  );
};

export default OfficesFloatingCard;
