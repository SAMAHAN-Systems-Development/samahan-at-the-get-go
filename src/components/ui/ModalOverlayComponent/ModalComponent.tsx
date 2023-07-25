import React from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import Logo from 'public/assets/images/SamahanAtTheGetGoLogo.png';

type ModalComponentProps {
  imageUrl: StaticImageData;
  hashtag?: string;
  title: string;
  description: string;
  link: string;
}

const ModalOverlayComponent: React.FC<ModalComponentProps> = ({
  imageUrl,
  hashtag,
  title,
  description,
  link,
}) => {
  return (
    <div className="flex justify-center">
      <div className=" w-[45rem] border border-[#263167]">
        <div className="relative bg-[#1A275F] h-[15rem]">
          <Image className="object-cover" alt="/" src={imageUrl} fill={true} />
        </div>
        <div>
          <div className="px-[2.25rem] bg-[#FAF6F2] text-[#263167]">
            <div className="pt-[2.5rem]">
              {hashtag && (
                <p className="font-appleGaramond text-[0.7rem] text-[#ED751F] italic pb-[0.001rem] font-bold">
                  {hashtag}
                </p>
              )}
              <div className="flex items-center justify-between">
                <p className="font-artega text-xl">{title}</p>
                <div className="ml-auto">
                  <Image
                    alt="/"
                    src={Logo}
                    width={18}
                    height={50}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>
            <p className="font-Helvetica py-[2rem] text-[0.8rem] text-justify">
              {description}
            </p>
            <a
              href={link}
              className="font-artega text-[0.6rem] font-semibold flex justify-center pb-[2rem]"
            >
              BACK
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalOverlayComponent;
