import React from 'react';

const AboutSecondSection = () => {
  return (
    <>
      <div className="flex flex-col justify-center w-full gap-2 p-5">
        {/* divider */}
        <div className="px-2">
          <hr className="divider w-full flex justify-center items-center bg-blue text-blue" />
        </div>

        <div className="flex flex-row justify-center gap-5 px-24 pt-6 pb-11">
          <div className="flex flex-col">
            <p className="text-blue sm:text-4xl text-lg font-semibold font-artega flex flex-col">
              Since 1982
            </p>
          </div>

          <p className="text-blue text-justify text-lg font-normal">
            The SAMAHAN remains committed in our collective agenda of creating
            impactful results, solutions, and initiatives for the greater
            communities. For 41 long years, the SAMAHAN remains, endures, and
            actively continues to be at the heart of navigating our
            ever-changing University with, for, and by our students.
          </p>
        </div>

        {/* divider */}
        <hr className="divider w-full flex justify-center items-center bg-blue" />

        <div className="flex flex-row justify-center gap-5 px-24 pt-6 pb-11">
          <div className="flex flex-col">
            <p className="text-blue sm:text-4xl text-lg font-semibold font-artega flex flex-col">
              This Year
            </p>
          </div>

          <p className="text-blue text-justify text-lg font-normal">
            This year, we venture back to the University life we yearned for so
            long, and actualize what we collectively envision as the next
            generation of Blue Knights. Not only do we thrive to achieve our
            fullest potential, we are also looking forward to working with the
            entire Ateneo Community to make it all happen. This is SAMAHAN At
            The Get-go.
          </p>
        </div>

        {/* divider */}
        <hr className="divider w-full flex justify-center items-center bg-blue" />
      </div>
    </>
  );
};

export default AboutSecondSection;
