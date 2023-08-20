import React from 'react';

type TitlePillProps = {
  title: string;
};

const TitlePill: React.FC<TitlePillProps> = ({ title }) => {
  return (
    <div className="px-5 py-2 bg-orange font-artega w-fit h-fit text-white capitalize rounded-section-card text-center">
      <h1 className="text-sm md:text-base lg:text-xl">{title}</h1>
    </div>
  );
};

export default TitlePill;
