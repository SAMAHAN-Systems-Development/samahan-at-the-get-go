import type { FC } from 'react';
import React from 'react';

type RIAModalBodyCardProps = {
  children: React.ReactNode;
  title: string;
};

const RIAModalBodyCard: FC<RIAModalBodyCardProps> = ({ title, children }) => {
  return (
    <div className="w-full bg-white overflow-hidden border-solid border-card border-lightBlue rounded-section-card">
      <div className="border-b-card border-lightBlue py-4 px-5 md:px-7 lg:py-6 lg:px-14">
        <h2 className="font-appleGaramond-bold italic text-lightBlue text-xl lg:text-3xl">
          {title}
        </h2>
      </div>
      <div className="text-lightBlue text-sm leading-7 md:text-base py-5 px-4 lg:text-xl md:py-4 md:px-7 lg:leading-10 lg:py-10 lg:px-14">
        {children}
      </div>
    </div>
  );
};

export default RIAModalBodyCard;
