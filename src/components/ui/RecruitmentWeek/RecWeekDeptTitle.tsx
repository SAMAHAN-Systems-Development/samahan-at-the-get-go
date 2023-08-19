import React from 'react';

interface RecWeekDeptTitleProps {
  bottomText: string;
  topText: string;
}

const RecWeekDeptTitle: React.FC<RecWeekDeptTitleProps> = ({
  bottomText,
  topText,
}) => {
  return (
    <div className="flex flex-col items-center justify-center m-4 gap-0">
      <h2 className="text-center text-lg md:text-2xl xl:text-4xl font-bold italic font-appleGaramond text-blue">
        {topText}
      </h2>
      <h2 className="text-center text-2xl md:text-4xl xl:text-6xl font-medium uppercase font-artega text-blue">
        {bottomText}
      </h2>
    </div>
  );
};

export default RecWeekDeptTitle;
