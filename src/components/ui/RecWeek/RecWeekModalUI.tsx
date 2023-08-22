'use client';

import type { FC } from 'react';
import { FaTimes } from 'react-icons/fa';
import type { StaticImageData } from 'next/image';

import * as Dialog from '@radix-ui/react-dialog';

import ModalWrapper from '@/components/ui/ModalWrapper';

import RecWeekModalButton from '@/components/ui/RecWeek/RecWeekModalButton';
import SolidBlueDivider from '@/components/ui/SolidBlueDivider';

type RecWeekModalUIProps = {
  children: React.ReactNode;
  fullName: string;
  imageSrc: StaticImageData;
  name: string;
};

const RecWeekModalUI: FC<RecWeekModalUIProps> = ({
  name,
  fullName,
  imageSrc,
  children,
}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="w-full">
        <RecWeekModalButton
          name={name}
          fullName={fullName}
          imageSrc={imageSrc}
        />
      </Dialog.Trigger>
      <Dialog.Portal>
        <ModalWrapper>
          <div className="bg-white border-solid border-card border-lightBlue h-screen w-screen">
            <div className="h-full w-full overflow-y-auto">
              <Dialog.Close asChild>
                <button className="fixed top-0 right-0 lg:right-6 text-beige p-3 z-10">
                  <FaTimes />
                </button>
              </Dialog.Close>
              {children}
              <SolidBlueDivider />
            </div>
          </div>
        </ModalWrapper>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default RecWeekModalUI;
