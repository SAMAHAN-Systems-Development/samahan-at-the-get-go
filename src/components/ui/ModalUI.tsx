'use client';

import type { FC } from 'react';

import * as Dialog from '@radix-ui/react-dialog';
import type { ModalDataType } from 'library/types/ModalDataType';

import AdvocasixCardButton from '@/components/ui/Advocasix/AdvocasixCardButton';
import ModalOverlayComponent from '@/components/ui/ModalOverlayComponent/ModalComponent';

const ModalUI: FC<ModalDataType> = ({
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
        <Dialog.Overlay className="fixed top-0 right-0 bottom-0 left-0 bg-blue/60 flex justify-center items-center overflow-y-auto ">
          <Dialog.Content className="data-[state=open]:animate-contentShow">
            <ModalOverlayComponent
              imageUrl={imageUrl2}
              hashtag={hashtag}
              title={title}
              description={description}
            />
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ModalUI;
