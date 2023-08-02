import React from 'react';

const HelpPortalCard = () => {
  return (
    <div className="h-[30rem] w-full bg-lightBlue border-solid border-card border-lightBlue rounded-section-card py-[3rem] px-[1.8rem] md:py-[3.8rem] md:px-[2.75rem] lg:px-20 lg:py-7 flex items-end">
      <div className="text-white">
        <h1>
          <span className="font-appleGaramond italic block font-medium text-[1.5625rem] sm:text-[1.75rem] md:text-[2.1875rem] lg:text-[3.125rem]">
            Welcome to
          </span>
          <span className="font-artega font-medium text-[1.9375rem] md:text-[2.4375rem] lg:text-[3.125rem]">
            HELP PORTAL
          </span>
        </h1>
        <p className="text-[0.625rem] md:text-[1rem] lg:text-[1rem] lg:max-w-[37.4375rem]">
          The SAMAHAN Help Portal aims to assist the student with the different
          academic-related processes online. It will answer frequently asked
          questions (FAQs) and respond to student concerns that deal with online
          transactions.
        </p>
      </div>
    </div>
  );
};

export default HelpPortalCard;
