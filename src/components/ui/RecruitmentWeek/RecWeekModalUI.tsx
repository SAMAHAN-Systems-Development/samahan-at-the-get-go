'use client';

import type { FC } from 'react';
import { FaTimes } from 'react-icons/fa';
import type { StaticImageData } from 'next/image';

import * as Dialog from '@radix-ui/react-dialog';

import ModalWrapper from '@/components/ui/ModalWrapper';

import RecWeekModalButton from '@/components/ui/RecruitmentWeek/RecWeekModalButton';

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
          <div className="bg-white border-solid border-card border-lightBlue">
            <Dialog.Close asChild>
              <button className="flex justify-end w-full text-lightBlue p-3">
                <FaTimes />
              </button>
            </Dialog.Close>
            <div className="px-14 pb-14 max-h-[35rem] max-w-5xl w-screen overflow-y-auto">
              <div className="flex justify-center mb-6">{name}</div>
              {children}
            </div>
          </div>
        </ModalWrapper>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default RecWeekModalUI;
