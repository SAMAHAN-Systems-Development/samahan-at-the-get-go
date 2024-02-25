import React from 'react';
import Link from 'next/link';

const StrawCard = () => {
  return (
    <div className="flex flex-col w-full border-solid border-card border-lightBlue rounded-section-card text-lightBlue justify-end text-center items-center h-80 py-[2.44rem] px-7 md:content-start md:text-right md:justify-center md:items-end md:py-[4.12rem] md:px-[2.56rem] lg:px-[5.87rem] lg:pt-[3.88rem]">
      <h1 className="font-artega font-medium text-[1.5625rem] w-[11.5625rem] flex-wrap md:text-[1.9375rem] md:text-right md:w-[14.3125rem] lg:w-full lg:text-[2.4375rem]">
        Unified StRAW Channel Form
      </h1>
      <p className="flex-wrap max-w-[14.3125rem] text-[0.8125rem] md:mb-[1.25rem] md:max-w-[14.3125rem] md:text-[1rem] lg:text-[1.25rem] lg:w-full">
        For the submission and resolution of non-academic complaints.
      </p>
      <button className="uppercase text-white text-[0.5625rem] py-[0.38rem] px-[1.3rem] bg-lightBlue rounded-[1.25rem] md:text-[0.8125rem] lg:text-[1rem]">
        <Link href="https://tinyurl.com/StrawUSC">Access Here</Link>
      </button>
    </div>
  );
};

export default StrawCard;
