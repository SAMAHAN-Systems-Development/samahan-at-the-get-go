'use client';

import type { FC } from 'react';

import * as Dialog from '@radix-ui/react-dialog';

import ModalWrapper from '@/components/ui/ModalWrapper';

import ReleventInformationCardButton from '@/components/ui/HelpPortal/ReleventInformationCardButton';
import TitlePill from '@/components/ui/HelpPortal/TitlePill';

type RIAMOdalUIProps = {
  children: React.ReactNode;
  title: string;
};

const RIAModalUI: FC<RIAMOdalUIProps> = ({ title, children }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <ReleventInformationCardButton title={title} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <ModalWrapper>
          <div className="bg-white p-6 rounded-section-card">
            <TitlePill color="orange" title={title} />
            {children}
          </div>
        </ModalWrapper>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default RIAModalUI;
