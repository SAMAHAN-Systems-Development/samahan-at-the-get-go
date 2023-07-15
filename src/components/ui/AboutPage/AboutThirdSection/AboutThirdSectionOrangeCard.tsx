import React from "react";
import Image from "next/image";

type CardProps = {
  first_header: string;
  second_header: string;
};

const AboutThirdSectionOrangeCard = (props: CardProps) => {
  return (
    <>
      {/* first card */}
      <div className="xl:w-3/5 md:w-full w-full bg-orange rounded-lg flex flex-col ">
        <div className="relative w-24 h-24 mx-11 my-5">
          <Image
            src="/assets/images/BigBlueArrow.png"
            alt="Blue Arrow"
            className="object-contain"
            fill
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex flex-col ml-10 mb-12">
            <h1 className="text-white xl:text-4xl text-2xl font-artega">
              {props.first_header}
            </h1>
            <h1 className="text-white lg:text-6xl md:text-4xl text-3xl font-semibold font-artega">
              {props.second_header}
            </h1>
          </div>

          <div className="flex mx-10 mb-6">
            <p className="text-white text-justify font-medium lg:text-lg md:text-base text-sm mr-7">
              A community that continues to defy with stories of hope and
              resilience. Punctuated by the pandemic times, our university life
              was confined to just being there instead of being more. However,
              despite what was thought to be insurmountable, we challenged the
              call of time and chose to be a community destined to go further.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutThirdSectionOrangeCard;
