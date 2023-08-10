import React from 'react';
import Image from 'next/image';

import imgSrc from 'public/assets/images/WhiteArrow3.png';

const YearofMagis = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center">
        <div className="relative w-full m-5 border-2 border-blue bg-lightBlue rounded-lg flex flex-col sm:px-20 sm:py-28 p-5 pb-10">
          <div className="relative sm:w-36 sm:h-36 w-20 h-20">
            <Image
              src={imgSrc}
              placeholder="blur"
              alt="Blue Arrow"
              className="object-contain"
              draggable={false}
              fill
            />
          </div>
          <div className="flex flex-col gap-3 text-2xl lg:text-6xl md:text-5xl">
            <h2 className=" flex flex-col gap-2 text-white font-semibold tracking-wide font-artega">
              <span className="text-white sm:text-xl text-sm font-appleGaramond italic font-medium">
                We aim to be in our
              </span>{' '}
              Year of Magis
            </h2>
          </div>

          <div className="flex flex-col mt-10">
            <p className="text-white text-xs lg:text-xl md:text-lg text-justify">
              called to live upon a SAMAHAN that goes all-out in making all
              things happen we missed in the past. Rooted in our renewed sense
              of purpose, we aspire to start up once more and invigorate a
              fullest comeback, to Ateneo and beyond. Now more than ever, upon
              our return to a more vibrant university life, we strive to be at
              the get-go to a lot of things and more — one that is anchored to
              the values we hold close, to the causes we champion, and to the
              aspirations we nurture, all at once.
            </p>

            <div className="overflow-hidden mt-10">
              <p className="text-white text-xs lg:text-xl md:text-lg text-justify">
                As we reignite the ambitions we once shared together, we dream
                of bringing them to life by leading our actions into limitless
                opportunities, striving to advance leadership towards
                people-centered advocacies, and bringing forth concrete actions
                in building a student government that is adaptive,
                transformative, and closer to its people, onwards to our real
                Atenean dream.
              </p>
            </div>

            <div className="overflow-hidden mt-10">
              <p className="text-white text-xs lg:text-xl md:text-lg text-justify">
                This is SAMAHAN in its finest comeback, where our dreams and
                hopes unfold anew, as we start at the get-go.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YearofMagis;
