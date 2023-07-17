import React from 'react';

const AboutForthSectionBlueCard = () => {
  return (
    <>
      {/* first card */}
      <div className="w-full bg-lightBlue rounded-lg flex flex-col p-14">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col">
            <h1 className="text-white lg:text-5xl text-3xl font-medium font-artega">
              This 2023
            </h1>
          </div>

          <div className="flex mt-8">
            <p className="text-white font-normal text-justify lg:text-lg md:text-base text-sm">
              For the past years, our SAMAHAN navigated a full circle of putting
              visions of every Atenean at the center. From there, we took a leap
              of faith to own the future, calling upon each Atenean to hold
              those visions more in motion and stride them to the here and now.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutForthSectionBlueCard;
