import type { FC } from 'react';
import React from 'react';

type RecWeekSectionUIProps = {
  children: React.ReactNode;
};

const RecWeekSectionUI: FC<RecWeekSectionUIProps> = ({ children }) => {
  return <section className="container-2xl my-12 lg:my-20">{children}</section>;
};

export default RecWeekSectionUI;
