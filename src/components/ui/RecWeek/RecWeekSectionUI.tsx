import type { FC } from 'react';
import React from 'react';

type RecWeekSectionUIProps = {
  children: React.ReactNode;
};

const RecWeekSectionUI: FC<RecWeekSectionUIProps> = ({ children }) => {
  return <section className="container-2xl my-20 lg:my-32">{children}</section>;
};

export default RecWeekSectionUI;
