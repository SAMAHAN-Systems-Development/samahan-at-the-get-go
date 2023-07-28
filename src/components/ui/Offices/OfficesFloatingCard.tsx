import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import OSGIcon from '/public/assets/images/osg.png';
import OSPIcon from '/public/assets/images/osp.png';
import OSTIcon from '/public/assets/images/ost.png';
import OVPIcon from '/public/assets/images/ovp.png';
import SamahanAtTheGetGoLogo from '/public/assets/images/SamahanAtTheGetGoLogo.png';

type OfficesFloatingCardProps = {
  office: string;
};

const OfficesFloatingCard: React.FC<OfficesFloatingCardProps> = ({
  office,
}) => {
  const handleIcon = (office: OfficesFloatingCardProps['office']) => {
    switch (office) {
      case 'office-of-the-president':
        return OSPIcon;
      case 'office-of-the-vice-president':
        return OVPIcon;
      case 'office-of-the-secretary-general':
        return OSGIcon;
      case 'office-of-the-treasurer':
        return OSTIcon;
      default:
        return { src: '', height: 0, width: 0 };
    }
  };

  return (
    <div className="fixed bottom-0 w-full flex justify-between items-center bg-white border border-lightBlue py-5 px-12">
      <div className="relative w-12 h-12">
        <Image
          src={SamahanAtTheGetGoLogo}
          alt="SamahanAtTheGetGoLogo"
          className="object-contain"
          fill
        />
      </div>
      <Link href={`${office}`} className="relative w-16 h-16">
        <Image
          src={handleIcon(office)}
          alt={office}
          className="object-contain"
          fill
        />
      </Link>
    </div>
  );
};

export default OfficesFloatingCard;
