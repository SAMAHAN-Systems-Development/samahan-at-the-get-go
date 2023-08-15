import React from 'react';

type ReleventInformationCardButtonProps = { title: string };

const ReleventInformationCardButton: React.FC<
  ReleventInformationCardButtonProps
> = ({ title }) => {
  return (
    <div className="w-80 border-card border-lightBlue rounded-card px-7 py-3 group hover:cursor-pointer">
      <p className="font-artega bold text-xs text-center lg:text-sm text-lightBlue capitalize group-hover:translate-x-3 transition-all ease-in-out duration-300">
        {title}
      </p>
    </div>
  );
};

export default ReleventInformationCardButton;
