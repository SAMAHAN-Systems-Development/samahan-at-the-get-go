import React from 'react';
import Image from 'next/image';

const AboutFifthSection = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center">
        <div className="relative w-full m-5 border-2 border-blue rounded-lg flex flex-col sm:p-14 p-5">
          <div className="relative sm:w-36 sm:h-36 w-20 h-20">
            <Image
              src="/assets/images/LeftBlueArrow.png"
              alt="Blue Arrow"
              className="object-contain"
              fill
            />
          </div>
          <div className="flex flex-col gap-3 text-2xl lg:text-6xl md:text-5xl">
            <h1 className=" flex flex-col gap-2 text-blue font-semibold tracking-wide font-artega">
              <span className="text-blue sm:text-3xl text-sm font-appleGaramond italic font-semibold">
                We aim to be in our
              </span>{' '}
              Year of Magis
            </h1>
          </div>

          <div className="flex flex-col mt-10">
            <p className="text-orange font-artega font-bold xl:text-2xl md:text-lg text-xs text-justify">
              Rooted in our renewed sense of purpose, we aspire to start up once
              more and invigorate a fullest comeback, to Ateneo and beyond
            </p>

            <div className="overflow-hidden mt-10">
              <p className="text-lightBlue text-xs lg:text-xl md:text-lg text-justify">
                As we reignite the ambitions we once shared together, we dream
                of bringing them to life by leading our actions into limitless
                opportunities, striving to advance leadership towards
                people-centered advocacies, and bringing forth concrete actions
                in building a student government that is adaptive,
                transformative, and closer to its people, onwards to our real
                Atenean dream.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutFifthSection;
