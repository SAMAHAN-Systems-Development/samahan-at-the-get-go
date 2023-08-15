import React from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';

import * as Dialog from '@radix-ui/react-dialog';
import Logo from 'public/assets/images/SamahanAtTheGetGoLogo.png';

type ModalComponentProps = {
  description: string;
  imageUrl: StaticImageData;
  title: string;
  hashtag?: string;
};

const ModalOverlayComponent: React.FC<ModalComponentProps> = ({
  imageUrl,
  hashtag,
  title,
  description,
}) => {
  return (
    <div className="flex justify-center">
      <div className=" w-full md:w-[45rem] border border-[#263167]">
        <div className="relative bg-[#1A275F] h-[15rem]">
          <Image
            className="object-cover object-center"
            alt="/"
            src={imageUrl}
            fill={true}
            placeholder="blur"
            draggable={false}
          />
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
                    placeholder="blur"
                    style={{ objectFit: 'contain' }}
                    draggable={false}
                  />
                </div>
              </div>
            </div>
            <p className="font-Helvetica py-[2rem] text-[0.8rem] text-justify">
              {description}
            </p>
            <Dialog.Close asChild>
              <p className="font-artega text-[0.6rem] font-semibold flex justify-center pb-[2rem] cursor-pointer">
                BACK
              </p>
            </Dialog.Close>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalOverlayComponent;
