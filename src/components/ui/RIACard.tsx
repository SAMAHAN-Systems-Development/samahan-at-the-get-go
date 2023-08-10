import type { FC } from 'react';
import React from 'react';

type RIACardType = {
  children: React.ReactNode;
  title: string;
};

const RIACard: FC<RIACardType> = ({ title, children }) => {
  return (
    <div className="w-full overflow-hidden border-solid border-card border-lightBlue rounded-section-card">
      <div className="border-b-card border-lightBlue md:py-4 md:px-7 lg:py-6 lg:px-14">
        <h2 className="font-appleGaramond-bold italic text-blue md:text-xl lg:text-3xl">
          {title}
        </h2>
      </div>
      <div className="text-blue md:text-base lg:text-xl md:py-4 md:px-7 lg:py-6 lg:px-14">
        {children}
      </div>
    </div>
  );
};

export default RIACard;
