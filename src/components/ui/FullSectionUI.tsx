import type { FC } from 'react';
import React from 'react';

type FullSectionUIProps = {
  children: React.ReactNode;
};

const FullSectionUI: FC<FullSectionUIProps> = ({ children }) => {
  return <section className="my-10">{children}</section>;
};

export default FullSectionUI;
