'use client';

import React from 'react';

import * as Dialog from '@radix-ui/react-dialog';

type ModalWrapperProps = {
  children: React.ReactNode;
};

const ModalWrapper: React.FC<ModalWrapperProps> = ({ children }) => {
  return (
    <Dialog.Overlay className="fixed top-0 right-0 bottom-0 left-0 bg-blue/60 flex justify-center items-center overflow-y-auto z-[9999]">
      <Dialog.Content className="data-[state=open]:animate-contentShow">
        {children}
      </Dialog.Content>
    </Dialog.Overlay>
  );
};

export default ModalWrapper;
