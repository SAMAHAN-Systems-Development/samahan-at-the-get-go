import React from "react";
import Image from "next/image";

type CardProps = {
  title: string;
};

const AboutSecondSectionBlueCard = (props: CardProps) => {
  return (
    <>
      {/* +++++++++++++++++++++++++++++++++++++++++++++second card+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

      <div className="relative xl:w-2/5 md:w-full w-full bg-blue rounded-card flex flex-col justify-center items-center gap-3 ">
        <div className="flex xl:items-center items-end xl:flex-col lg:flex-row md:flex-row justify-between lg:gap-80 md:gap-50 xl:gap-10 w-full px-16 sm:gap-10 my-5 flex-col">
          <div className="flex justify-end xl:w-40 xl:h-40 md:w-16 md:h-16 w-12 h-12 relative">
            <Image
              src="/assets/images/whiteArrow.png"
              alt="White Arrow"
              className="object-contain"
              fill
            />
          </div>

          <h1 className="text-white xl:text-7xl text-3xl tracking-wider font-semibold font-helvetica mt-5 text-center">
            {props.title}
          </h1>
        </div>

        <div className="flex xl:mx-10 md:mx-20 mx-16 mt-4 mb-6">
          <p className="text-white font-base text-lg text-justify">
            We venture back to the University life we yearned for so long, and
            actualize what we collectively envision as the next generation of
            Blue Knights. Not only do we thrive to achieve our fullest
            potential, we are also looking forward to working with the entire
            Ateneo Community to make it all happen.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutSecondSectionBlueCard;
