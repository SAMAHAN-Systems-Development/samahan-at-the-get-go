import type { FC } from 'react';
import React from 'react';

type SmallSectionUIProps = {
  children: React.ReactNode;
};

const SmallSectionUI: FC<SmallSectionUIProps> = ({ children }) => {
  return <section className="container-lg my-10">{children}</section>;
};

export default SmallSectionUI;
