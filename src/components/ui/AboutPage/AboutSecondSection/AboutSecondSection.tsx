import React from 'react';

const AboutSecondSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center w-full gap-2 p-5">
        {/* divider */}
        <div className="px-2">
          <hr className="divider w-full flex justify-center items-center bg-blue text-blue" />
        </div>

        <div className="flex sm:flex-row flex-col justify-center items-center lg:space-x-10 sm:px-24 px-10 pt-6 pb-11">
          <div className="flex flex-col">
            <h3 className="text-blue sm:text-4xl text-base font-semibold font-artega flex flex-col mb-6">
              Since 1982
            </h3>
          </div>

          <p className="text-blue text-justify text-lg font-medium">
            The SAMAHAN remains committed in our collective agenda of creating
            impactful results, solutions, and initiatives for the greater
            communities. For 41 long years, the SAMAHAN remains, endures, and
            actively continues to be at the heart of navigating our
            ever-changing University with, for, and by our students.
          </p>
        </div>

        {/* divider */}
        <div className="px-2">
          <hr className="divider w-full flex justify-center items-center bg-blue text-blue" />
        </div>

        <div className="flex sm:flex-row flex-col justify-center items-center gap-5 sm:px-24 px-10 lg:space-x-10 pt-6 pb-11">
          <div className="flex flex-col">
            <h3 className="text-blue sm:text-4xl text-base font-semibold font-artega flex flex-col mb-6">
              This Year
            </h3>
          </div>

          <p className="text-blue text-justify text-lg font-medium">
            This year, we venture back to the University life we yearned for so
            long, and actualize what we collectively envision as the next
            generation of Blue Knights. Not only do we thrive to achieve our
            fullest potential, we are also looking forward to working with the
            entire Ateneo Community to make it all happen. This is SAMAHAN At
            The Get-go.
          </p>
        </div>

        {/* divider */}
        <div className="px-2">
          <hr className="divider w-full flex justify-center items-center bg-blue text-blue" />
        </div>
      </div>
    </>
  );
};

export default AboutSecondSection;
