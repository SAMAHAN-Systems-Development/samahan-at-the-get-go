import React from 'react';

type HelpPortalModalButtonProps = { title: string };

const HelpPortalModalButton: React.FC<HelpPortalModalButtonProps> = ({
  title,
}) => {
  return (
    <div className="w-full border-card border-lightBlue rounded-card p-7 group hover:cursor-pointer">
      <p className="font-artega bold text-xs text-center lg:text-sm text-lightBlue capitalize group-hover:scale-95 transition-all ease-in-out duration-300">
        {title}
      </p>
    </div>
  );
};

export default HelpPortalModalButton;
