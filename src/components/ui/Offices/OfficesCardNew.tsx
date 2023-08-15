import React from 'react';

type OfficesCardNewProps = {
  description: string;
  title: string;
};

const OfficesCardNew: React.FC<OfficesCardNewProps> = ({
  title,
  description,
}) => {
  return (
    <div className="grid overflow-auto w-full px-[1.63rem] md:px-[3.44rem] lg:px-[4.81rem] text-white bg-lightBlue border-solid border-card rounded-card">
      <div className="w-full mt-[5.12rem] md:mt-[6.19rem] lg:mt-[7.81rem] text-center">
        <h2 className="font-artega font-medium justify-self-center text-[1.9375rem] sm:text-[2.615rem] md:text-[3.8125rem] lg:text-[4.75rem]">
          {title}
        </h2>
      </div>
      <div className="justify-self-center max-w-[16.375rem] sm:max-w-[25.6rem] md:max-w-[30.34921rem] mt-[1.44rem] lg:max-w-[38.6875rem]">
        <h3 className="font-sans flex-wrap text-justify flex text-[0.875rem] sm:text-[1rem] md:text-[1.1875rem] lg:text-[1.5625rem] sm:text-center lg:text-center">
          {description}
        </h3>
      </div>
      <div className="flex flex-row w-full justify-between text-[0.625rem] lg:text-[1.25rem] text-justify mb-[1.94rem] mt-[3.19rem] md:mt-[5.06rem] md:mb-[2.94rem] lg:mt-[3.75rem] lg:mb-[2.94rem]">
        <p className="font-appleGaramound italic font-bold sm:text-[1.25rem] md:text-[1rem]">
          #AtTheGetGo
        </p>
        <p className="font-normal sm:text-[1rem] md:text-[1.25rem]">SAMAHAN</p>
      </div>
    </div>
  );
};

export default OfficesCardNew;
