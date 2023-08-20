import React from 'react';

type buttonProp = {
  title: string;
};

const FAQsButton: React.FC<buttonProp> = ({ title }) => {
  return (
    <div className="w-full border-card border-lightBlue rounded-card px-7 py-3 group hover:cursor-pointer">
      <p className="font-artega bold text-xs text-center lg:text-sm text-lightBlue capitalize group-hover:scale-95 transition-all ease-in-out duration-300">
        {title}
      </p>
    </div>
  );
};

export default FAQsButton;
