import React from "react";

type CardProps = {
  first_header: string;
  second_header: string;
};

const AboutThirdSectionOrangeCard = (props: CardProps) => {
  return (
    <>
      {/* first card */}
      <div className="xl:w-3/5 md:w-full w-full bg-orange rounded-lg flex flex-col ">
        <div className="flex  m-11">
          <p className="text-blue">a</p>
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex flex-col ml-10 mb-6">
            <h1 className="text-white xl:text-4xl text-2xl font-artega">
              {props.first_header}
            </h1>
            <h1 className="text-white lg:text-6xl md:text-4xl text-3xl font-semibold font-artega">
              {props.second_header}
            </h1>
          </div>

          <div className="flex mx-10 mb-6">
            <p className="text-white font-bold lg:text-lg md:text-base text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutThirdSectionOrangeCard;
