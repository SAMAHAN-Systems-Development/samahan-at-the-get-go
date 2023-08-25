import type { FC } from 'react';
import React from 'react';

type BigSectionUIProps = {
  children: React.ReactNode;
};

const BigSectionUI: FC<BigSectionUIProps> = ({ children }) => {
  return <section className="container-2xl my-5 lg:my-10">{children}</section>;
};

export default BigSectionUI;
