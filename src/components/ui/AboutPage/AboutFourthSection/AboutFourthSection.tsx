import React from 'react';
import Image from 'next/image';

import imgSrc from 'public/assets/images/LargeBlueArrow.png';

const AboutFourthSection = () => {
  return (
    <>
      <div className="relative flex flex-col justify-start w-full gap-2 p-5">
        {/* Divider */}
        <div className="px-2">
          <hr className="divider w-full flex justify-center items-center bg-blue text-blue" />
        </div>

        <div className="flex xl:flex-row lg:flex-row md:flex-col flex-col justify-center items-center lg:space-x-24 space-y-11 p-24">
          <div className="relative w-full md:h-96 h-52">
            <Image
              src={imgSrc}
              placeholder="blur"
              alt="Blue Arrow"
              className="object-contain"
              draggable={false}
              fill
            />
          </div>

          <div className="flex justify-center">
            <p className="text-justify text-blue font-semibold lg:text-xl md:text-base text-sm">
              For the past years, our SAMAHAN navigated a full circle of putting
              visions of every Atenean at the center. From there, we took a leap
              of faith to own the future, calling upon each Atenean to hold
              those visions more in motion and stride them to the here and now.
              But this time, as we move forward to reclaim the life we used to
              own, we envision a community that starts anew, a student body that
              expands to new directions, and a SAMAHAN that is at the get-go.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="px-2">
          <hr className="divider w-full flex justify-center items-center bg-blue text-blue" />
        </div>
      </div>
    </>
  );
};

export default AboutFourthSection;
