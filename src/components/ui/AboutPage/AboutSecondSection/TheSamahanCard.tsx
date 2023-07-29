import React from 'react';
import Image from 'next/image';

import imgSrc from 'public/assets/images/BlueArrow.png';

const TheSamahanCard = () => {
  return (
    <>
      <div className="xl:w-3/5 md:w-full w-full border-card border-blue rounded-card flex flex-col">
        <div className="flex flex-row justify-between sm:m-11 m-6">
          <div className="relative w-16 h-5">
            <Image
              src={imgSrc}
              placeholder="blur"
              alt="Blue Arrow"
              className="object-contain"
              fill
            />
          </div>
          <p className="text-blue sm:text-base text-sm font-bold font-artega">
            Since 1982
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex sm:ml-10 ml-5 mb-6">
            <h2 className="flex flex-col text-blue lg:text-6xl md:text-4xl text-xl font-semibold font-artega">
              <span className="text-blue text-4xl italic font-appleGaramond">
                The
              </span>
              SAMAHAN
            </h2>
          </div>
          {/* divider */}
          <div className="flex justify-center items-center my-4">
            <hr className="divider w-11/12 flex justify-center items-center bg-blue" />
          </div>

          <div className="flex flex-row gap-3 my-6 ml-10">
            <div className="relative w-10 h-5">
              <Image
                src="/assets/images/SmallBlueArrow.png"
                alt="Blue Arrow"
                className="object-contain"
                fill
              />
            </div>
            <p className="text-blue font-bold font-2xl font-appleGaramond">
              Commitment
            </p>
          </div>

          <div className="flex mx-10 mb-6">
            <p className="text-blue font-bold lg:text-lg md:text-base text-sm">
              remains committed in our collective agenda of creating impactful
              results, solutions, and initiatives{' '}
              <span className="text-orange">for the greater communities.</span>
            </p>
          </div>

          {/* divider */}
          <div className="flex justify-center items-center my-4">
            <hr className="divider w-11/12 flex justify-center items-center bg-blue" />
          </div>

          <div className="flex flex-row gap-3 my-6 ml-10">
            <div className="relative w-10 h-5">
              <Image
                src="/assets/images/SmallBlueArrow.png"
                alt="Blue Arrow"
                className="object-contain"
                fill
              />
            </div>
            <p className="text-blue font-bold font-2xl font-appleGaramond">
              Navigate
            </p>
          </div>

          <div className="flex mx-10 mb-6">
            <p className="text-blue font-bold lg:text-lg md:text-base text-sm">
              endures, and actively continues to be at the heart of navigating{' '}
              <span className="text-orange">
                our ever-changing University with, for, and by our students.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TheSamahanCard;
