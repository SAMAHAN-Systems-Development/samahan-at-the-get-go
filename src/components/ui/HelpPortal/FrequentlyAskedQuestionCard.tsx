import React from 'react';

const FrequentlyAskedQuestionCard = () => {
  return (
    <div className="grid h-[18.6875rem] content-between w-full px-[1.87rem] py-[2rem] md:px-[3.94rem] md:py-[3.25rem] lg:px-[5.38rem] lg:py-[4.3rem] text-white bg-lightBlue border-solid border-card rounded-card sm:h-[22rem] md:h-[29.375rem] lg:h-[30.875rem]">
      <div className="flex flex-row text-sm w-full justify-between">
        <p className="font-artega font-medium text-[0.875rem] sm:text-[1rem] md:text-[1.25rem] lg:text-[1.9375rem]">
          FAQs
        </p>
        <p className="font-appleGaramond italic font-bold text-right text-[0.875rem] sm:text-[1rem] md:text-[1.46875rem] lg:text-[1.5625rem]">
          Frequently Asked Questions
        </p>
      </div>
      <div>
        <p className="flex-wrap max-w-[15.0625rem] sm:max-w-[20rem] md:max-w-[30.5625rem] lg:max-w-[41.5625rem] text-[1.5625rem] font-normal font-artega sm:text-[2rem] md:text-[3.0625rem] lg:text-[3.8125rem]">
          What can we help with?
        </p>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestionCard;
