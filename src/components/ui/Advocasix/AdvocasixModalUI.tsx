'use client';

import type { FC } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import type { ModalDataType } from 'lib/types/ModalDataType';

import AdvocasixCardButton from '@/components/ui/Advocasix/AdvocasixCardButton';
import ModalOverlayComponent from '@/components/ui/ModalOverlayComponent/ModalComponent';

const AdvocasixModalUI: FC<ModalDataType> = ({
  title,
  imageUrl1,
  imageUrl2,
  description,
  hashtag,
}) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <AdvocasixCardButton title={title} imageUrl={imageUrl1} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed top-0 right-0 bottom-0 left-0 bg-blue/60 flex justify-center items-center overflow-y-auto z-[9999]">
          <Dialog.Content className="data-[state=open]:animate-contentShow">
            <ModalOverlayComponent
              imageUrl={imageUrl2}
              title={title}
              description={description}
              hashtag={hashtag}
            />
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AdvocasixModalUI;
