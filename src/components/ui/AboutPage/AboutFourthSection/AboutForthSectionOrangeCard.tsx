import React from "react";

type CardProps = {
  year: string;
};

const AboutForthSectionOrangeCard = (props: CardProps) => {
  return (
    <>
      {/* first card */}
      <div className="w-full bg-orange rounded-lg flex flex-col">
        <div className="flex flex-col justify-center mt-7">
          <div className="flex mx-12 my-4">
            <p className="text-white font-normal text-justify lg:text-lg md:text-base text-sm">
              But this time, as we move forward to reclaim the life we used to
              own, we envision a community that starts anew, a student body that
              expands to new directions, and a
            </p>
          </div>

          <div className="flex flex-col ml-12 mb-6">
            <h1 className="text-white lg:text-4xl text-3xl font-normal font-artega">
              {props.year}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutForthSectionOrangeCard;
