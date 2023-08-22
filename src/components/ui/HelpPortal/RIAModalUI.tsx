'use client';

import type { FC } from 'react';
import { FaTimes } from 'react-icons/fa';

import * as Dialog from '@radix-ui/react-dialog';

import ModalWrapper from '@/components/ui/ModalWrapper';

import HelpPortalModalButton from '@/components/ui/HelpPortal/HelpPortalModalButton';
import TitlePill from '@/components/ui/HelpPortal/TitlePill';

type RIAMOdalUIProps = {
  children: React.ReactNode;
  title: string;
};

const RIAModalUI: FC<RIAMOdalUIProps> = ({ title, children }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <HelpPortalModalButton title={title} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <ModalWrapper>
          <div className="bg-white border-solid border-card border-lightBlue">
            <Dialog.Close asChild>
              <button className="flex justify-end w-full text-lightBlue pt-10 px-4 lg:px-3 lg:py-3">
                <FaTimes />
              </button>
            </Dialog.Close>
            <div className="px-14 pb-14 h-screen lg:max-h-[35rem] max-w-5xl w-screen overflow-y-auto">
              <div className="flex justify-center mb-6">
                <TitlePill title={title} />
              </div>
              {children}
            </div>
          </div>
        </ModalWrapper>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default RIAModalUI;
