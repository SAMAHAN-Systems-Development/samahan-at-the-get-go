import React from 'react';

const SamahanGuideBookCard = () => {
  return (
    <div className="h-[30rem] md:h-[22rem] w-full border-solid border-card border-lightBlue rounded-section-card py-[2.44rem] px-7 md:py-[4.12rem] md:px-[2.56rem] lg:px-20 lg:py-7 lg:h-[15.8125rem] flex justify-end items-end md:items-start md:flex-col md:justify-start lg:items-start lg:flex-col lg:justify-start">
      <div className="flex text-lightBlue w-full text-center md:text-right flex-col justify-center items-center">
        <h1 className="font-artega md:h-[4.625rem] md:flex md:flex-wrap font-medium text-[1.5625rem] md:text-[1.9375rem] lg:text-[2.4375rem] md:text-right lg:text-right">
          SAMAHAN Guidebook
        </h1>
        <p className="text-[0.8125rem] w-[14.875rem] sm:text-center md:w-[14.3125rem] md:text-[1rem] lg:text-[1.25rem] lg:w-full">
          A start-up kit for incoming first year students
        </p>
        <button className="md:ml-auto uppercase text-[0.5625rem] lg:text-[1rem] py-[0.38rem] px-[1.3rem] text-white bg-blue rounded-[1.25rem]">
          Download Here
        </button>
      </div>
    </div>
  );
};

export default SamahanGuideBookCard;
